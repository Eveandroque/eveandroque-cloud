// src/stores/projectsStore.ts
import {create} from 'zustand';
import {supabase} from '../lib/supabase';

export interface Project {
    id: string;
    user_id: string;
    name: string;
    description: string | null;
    created_at: string;
    // Derived on the client — first property's thumbnail
    thumbnail?: string;
    propertyCount?: number;
}

interface ProjectsState {
    projects: Project[];
    // Map of projectId → Set of propertyIds
    projectProperties: Map<string, Set<string>>;
    isLoading: boolean;

    // Selectors
    isInAnyProject: (propertyId: string) => boolean;
    getProjectsForProperty: (propertyId: string) => string[];

    // Actions
    loadProjects: (userId: string) => Promise<void>;
    createProject: (name: string, description?: string, userId?: string) => Promise<Project | null>;
    deleteProject: (projectId: string) => Promise<void>;
    addToProject: (projectId: string, propertyId: string) => Promise<void>;
    removeFromProject: (projectId: string, propertyId: string) => Promise<void>;
    clear: () => void;
}

export const useProjectsStore = create<ProjectsState>((set, get) => ({
    projects: [],
    projectProperties: new Map(),
    isLoading: false,

    isInAnyProject: (propertyId) => {
        for (const ids of get().projectProperties.values()) {
            if (ids.has(propertyId)) return true;
        }
        return false;
    },

    getProjectsForProperty: (propertyId) => {
        const result: string[] = [];
        for (const [projectId, ids] of get().projectProperties.entries()) {
            if (ids.has(propertyId)) result.push(projectId);
        }
        return result;
    },

    loadProjects: async (userId) => {
        set({isLoading: true});
        try {
            // Load projects
            const {data: projectsData, error: projectsError} = await supabase
                .from('projects')
                .select('*')
                .eq('user_id', userId)
                .order('created_at', {ascending: false});

            if (projectsError) throw projectsError;

            // Load all project_properties for this user's projects
            const projectIds = (projectsData ?? []).map((p) => p.id);
            let projectProperties = new Map<string, Set<string>>();

            if (projectIds.length > 0) {
                const {data: ppData, error: ppError} = await supabase
                    .from('project_properties')
                    .select('project_id, property_id')
                    .in('project_id', projectIds);

                if (ppError) throw ppError;

                for (const row of ppData ?? []) {
                    if (!projectProperties.has(row.project_id)) {
                        projectProperties.set(row.project_id, new Set());
                    }
                    projectProperties.get(row.project_id)!.add(row.property_id);
                }
            }

            // Attach counts to projects
            const projects = (projectsData ?? []).map((p) => ({
                ...p,
                propertyCount: projectProperties.get(p.id)?.size ?? 0,
            }));

            set({projects, projectProperties, isLoading: false});
        } catch (err) {
            console.error('Failed to load projects:', err);
            set({isLoading: false});
        }
    },

    createProject: async (name, description, userId) => {
        const {data, error} = await supabase
            .from('projects')
            .insert({name, description: description ?? null, user_id: userId})
            .select()
            .single();

        if (error) {
            console.error('Failed to create project:', error);
            return null;
        }

        const newProject: Project = {...data, propertyCount: 0};
        set((state) => ({
            projects: [newProject, ...state.projects],
            projectProperties: new Map([...state.projectProperties, [data.id, new Set()]]),
        }));

        return newProject;
    },

    deleteProject: async (projectId) => {
        const {error} = await supabase
            .from('projects')
            .delete()
            .eq('id', projectId);

        if (error) {
            console.error('Failed to delete project:', error);
            return;
        }

        set((state) => {
            const next = new Map(state.projectProperties);
            next.delete(projectId);
            return {
                projects: state.projects.filter((p) => p.id !== projectId),
                projectProperties: next,
            };
        });
    },

    addToProject: async (projectId, propertyId) => {
        // Optimistic update
        set((state) => {
            const next = new Map(state.projectProperties);
            const ids = new Set(next.get(projectId) ?? []);
            ids.add(propertyId);
            next.set(projectId, ids);

            const projects = state.projects.map((p) =>
                p.id === projectId ? {...p, propertyCount: ids.size} : p
            );
            return {projectProperties: next, projects};
        });

        const {error} = await supabase
            .from('project_properties')
            .insert({project_id: projectId, property_id: propertyId});

        if (error && error.code !== '23505') {
            // Rollback if not a unique constraint violation (already added)
            console.error('Failed to add to project:', error);
            set((state) => {
                const next = new Map(state.projectProperties);
                const ids = new Set(next.get(projectId) ?? []);
                ids.delete(propertyId);
                next.set(projectId, ids);
                return {projectProperties: next};
            });
        }
    },

    removeFromProject: async (projectId, propertyId) => {
        // Optimistic update
        set((state) => {
            const next = new Map(state.projectProperties);
            const ids = new Set(next.get(projectId) ?? []);
            ids.delete(propertyId);
            next.set(projectId, ids);

            const projects = state.projects.map((p) =>
                p.id === projectId ? {...p, propertyCount: ids.size} : p
            );
            return {projectProperties: next, projects};
        });

        const {error} = await supabase
            .from('project_properties')
            .delete()
            .eq('project_id', projectId)
            .eq('property_id', propertyId);

        if (error) {
            console.error('Failed to remove from project:', error);
            // Rollback
            set((state) => {
                const next = new Map(state.projectProperties);
                const ids = new Set(next.get(projectId) ?? []);
                ids.add(propertyId);
                next.set(projectId, ids);
                return {projectProperties: next};
            });
        }
    },

    clear: () => set({projects: [], projectProperties: new Map(), isLoading: false}),
}));