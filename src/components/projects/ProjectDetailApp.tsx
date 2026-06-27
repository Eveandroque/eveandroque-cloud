// src/components/projects/ProjectDetailApp.tsx
// React island for /listings/projects/[id] — shows properties in a single project

import React, {useEffect, useState} from 'react';
import {useAuthStore} from '../../stores/authStore';
import {useProjectsStore} from '../../stores/projectsStore';
import {PropertyCard} from '../listings/ListingsGrid';
import {SkeletonCard} from '../listings/ListingsGrid';
import {HeartButton} from './HeartButton';
import type {Property} from '../listings/types';
import '../listings/ListingsPage.css';
import './Projects.css';

interface ProjectDetailAppProps {
    projectId: string;
    baseApiUrl: string;
}

export function ProjectDetailApp({projectId, baseApiUrl}: ProjectDetailAppProps) {
    const {user, isLoading: authLoading} = useAuthStore();
    const {projects, projectProperties, isLoading: storeLoading, deleteProject} = useProjectsStore();
    const [properties, setProperties] = useState<Property[]>([]);
    const [fetchLoading, setFetchLoading] = useState(true);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const project = projects.find((p) => p.id === projectId);
    const propertyIds = Array.from(projectProperties.get(projectId) ?? []);
    console.log(projectProperties, propertyIds);

    useEffect(() => {
        if (authLoading || storeLoading) return;
        if (propertyIds.length === 0) {
            setProperties([]);
            setFetchLoading(false);
            return;
        }

        const fetch$ = async () => {
            setFetchLoading(true);
            try {
                // Try ?ids= first, fall back to fetching all
                const res = await fetch(`${baseApiUrl}/api/listings/property/${propertyIds.join(',')}`);
                if (res.ok) {
                    console.log('filter call')
                    const data = await res.json();
                    console.log(data);
                    // @ts-ignore
                    setProperties(data ?? []);
                } else {
                    const allRes = await fetch(`${baseApiUrl}/api/listings/cards?pageSize=100`);
                    if (allRes.ok) {
                        console.log('all call')
                        const allData = await allRes.json();
                        const idSet = new Set(propertyIds);
                        // @ts-ignore
                        setProperties((allData.listings ?? []).filter((p: Property) => idSet.has(p.id)));
                    }
                }
            } catch (err) {
                console.error('Failed to fetch project properties:', err);
            } finally {
                setFetchLoading(false);
            }
        };

        fetch$();
    }, [projectId, propertyIds.join(','), authLoading, storeLoading]);

    const handleDelete = async () => {
        await deleteProject(projectId);
        window.location.href = '/listings/projects';
    };

    if (authLoading || storeLoading) {
        return (
            <div className="projects-page">
                <div className="listings-grid">
                    {Array.from({length: 4}).map((_, i) => <SkeletonCard key={i}/>)}
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="projects-page">
                <div className="projects-empty">
                    <h2>Sign in to view this project</h2>
                    <a href="/listings" className="projects-empty__cta">Browse properties</a>
                </div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="projects-page">
                <div className="projects-empty">
                    <h2>Project not found</h2>
                    <a href="/listings/projects" className="projects-empty__cta">Back to projects</a>
                </div>
            </div>
        );
    }

    return (
        <div className="projects-page">
            <div className="projects-detail__header">
                <a href="/listings/projects" className="projects-detail__back">
                    <BackIcon/> All projects
                </a>
                <div className="projects-detail__title-row">
                    <h1 className="projects-page__title">{project.name}</h1>
                    <button
                        className="projects-detail__delete"
                        onClick={() => setConfirmDelete(true)}
                        title="Delete project"
                    >
                        <TrashIcon/>
                    </button>
                </div>
                {project.description && (
                    <p className="projects-detail__description">{project.description}</p>
                )}
                <p className="projects-detail__count">
                    {propertyIds.length} {propertyIds.length === 1 ? 'property' : 'properties'}
                </p>
            </div>

            {confirmDelete && (
                <div className="projects-confirm-delete">
                    <p>Delete <strong>{project.name}</strong>? This cannot be undone.</p>
                    <div className="projects-confirm-delete__actions">
                        <button className="projects-confirm-delete__cancel"
                                onClick={() => setConfirmDelete(false)}>Cancel
                        </button>
                        <button className="projects-confirm-delete__confirm" onClick={handleDelete}>Delete project
                        </button>
                    </div>
                </div>
            )}

            {fetchLoading ? (
                <div className="listings-grid">
                    {Array.from({length: 4}).map((_, i) => <SkeletonCard key={i}/>)}
                </div>
            ) : properties.length === 0 ? (
                <div className="projects-empty">
                    <div className="projects-empty__icon"></div>
                    <h2>No properties in this project</h2>
                    <a href="/listings" className="projects-empty__cta">Browse properties</a>
                </div>
            ) : (
                <div className="listings-grid">
                    {properties.map((property, i) => (
                        <div key={property.id} className="project-property-wrapper">
                            <PropertyCard property={property} index={i}/>
                            <HeartButton
                                propertyId={property.id}
                                propertyThumbnail={property.thumbnail}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

const BackIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
const TrashIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
         strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6"/>
        <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
        <path d="M10 11v6M14 11v6"/>
        <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
    </svg>
);