// src/components/projects/AddToProjectModal.tsx
// "Add to project" modal — list view + create view

import React, {useState} from 'react';
import {useProjectsStore} from '../../stores/projectsStore';
import {useProjectModalStore} from '../../stores/projectModalStore';
import {useAuthStore} from '../../stores/authStore';
import './Projects.css';

export function AddToProjectModal() {
    const {user} = useAuthStore();

    console.log(user?.id);
    const {isOpen, view, propertyId, close, showCreate, showList} = useProjectModalStore();
    const {
        projects, isLoading, addToProject, removeFromProject,
        createProject, getProjectsForProperty
    } = useProjectsStore();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isCreating, setIsCreating] = useState(false);

    if (!isOpen || !propertyId) return null;

    const projectsForProperty = getProjectsForProperty(propertyId);

    const handleProjectClick = async (projectId: string) => {
        const isAlreadyIn = projectsForProperty.includes(projectId);
        if (isAlreadyIn) {
            await removeFromProject(projectId, propertyId);
        } else {
            await addToProject(projectId, propertyId);
        }
        close();
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;
        setIsCreating(true);
        const newProject = await createProject(name.trim(), description.trim() || undefined, user?.id);
        if (newProject && propertyId) {
            await addToProject(newProject.id, propertyId);
        }
        setIsCreating(false);
        setName('');
        setDescription('');
        close();
    };

    const handleBackdropClick = () => close();

    return (
        <>
            <div className="project-modal-backdrop" onClick={handleBackdropClick}/>
            <div className="project-modal" role="dialog" aria-modal="true">
                {/* Close */}
                <button className="project-modal__close" onClick={close} aria-label="Close">
                    <CloseIcon/>
                </button>

                {view === 'list' ? (
                    <>
                        <h2 className="project-modal__title">Add to project</h2>
                        <div className="project-modal__list">
                            {/* Create new */}
                            <button
                                className="project-modal__create-row"
                                onClick={showCreate}
                            >
                                <div className="project-modal__create-icon">
                                    <PlusIcon/>
                                </div>
                                <span className="project-modal__create-label">Create new project</span>
                            </button>

                            {/* Existing projects */}
                            {isLoading ? (
                                <div className="project-modal__loading">Loading…</div>
                            ) : projects.length === 0 ? (
                                <p className="project-modal__empty">No projects yet. Create one above.</p>
                            ) : (
                                projects.map((project) => {
                                    const isIn = projectsForProperty.includes(project.id);
                                    return (
                                        <button
                                            key={project.id}
                                            className={`project-modal__project-row${isIn ? ' is-saved' : ''}`}
                                            onClick={() => handleProjectClick(project.id)}
                                        >
                                            <div className="project-modal__project-thumb">
                                                {project.thumbnail ? (
                                                    <img src={project.thumbnail} alt={project.name}/>
                                                ) : (
                                                    <div className="project-modal__project-thumb-placeholder"/>
                                                )}
                                            </div>
                                            <span className="project-modal__project-name">{project.name}</span>
                                            {isIn && (
                                                <span className="project-modal__check">
                                                    <CheckIcon/>
                                                </span>
                                            )}
                                        </button>
                                    );
                                })
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        <button className="project-modal__back" onClick={showList}>
                            <BackIcon/> Back
                        </button>
                        <h2 className="project-modal__title">Create project</h2>
                        <form className="project-modal__form" onSubmit={handleCreate}>
                            <div className="project-modal__field">
                                <label className="project-modal__label" htmlFor="proj-name">
                                    Project name
                                </label>
                                <input
                                    id="proj-name"
                                    className="project-modal__input"
                                    type="text"
                                    maxLength={50}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    autoFocus
                                    required
                                />
                                <span className="project-modal__char-count">{name.length}/50</span>
                            </div>
                            <div className="project-modal__field">
                                <label className="project-modal__label" htmlFor="proj-desc">
                                    Description <span className="project-modal__optional">(optional)</span>
                                </label>
                                <textarea
                                    id="proj-desc"
                                    className="project-modal__textarea"
                                    maxLength={1000}
                                    rows={4}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                <span className="project-modal__char-count">{description.length}/1000</span>
                            </div>
                            <button
                                type="submit"
                                className="project-modal__submit"
                                disabled={isCreating || !name.trim()}
                            >
                                {isCreating ? 'Creating…' : 'Create'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </>
    );
}

const CloseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);
const PlusIcon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 5v12M5 11h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);
const CheckIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 9l4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const BackIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);