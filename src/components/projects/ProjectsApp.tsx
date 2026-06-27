// src/components/projects/ProjectsApp.tsx
// React island for /listings/projects — shows user's project grid

import React from 'react';
import {useAuthStore} from '../../stores/authStore';
import {useProjectsStore} from '../../stores/projectsStore';
import './Projects.css';

export function ProjectsApp() {
    const {user, isLoading: authLoading, openAuthModal} = useAuthStore();
    const {projects, isLoading} = useProjectsStore();
    const openProjectModal = () => { /* for creating standalone project */
    };

    if (authLoading || isLoading) {
        return (
            <div className="projects-page">
                <a href="/listings" className="projects-detail__back">
                    <BackIcon/> All Listings
                </a>
                <div className="projects-page__header">
                    <h1 className="projects-page__title">Projects</h1>
                </div>
                <div className="projects-grid">
                    {Array.from({length: 4}).map((_, i) => (
                        <div key={i} className="project-card-skeleton"/>
                    ))}
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="projects-page">
                <div className="projects-empty">
                    <div className="projects-empty__icon">️</div>
                    <h2>Sign in to view your projects</h2>
                    <p>Create collections of your favourite properties.</p>
                    <div className="projects-empty__cta-group">
                        <button className="projects-empty__cta" onClick={openAuthModal}>Sign in</button>
                        <a href="/listings" className="">Browse properties</a>
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="projects-page">
            <a href="/listings" className="projects-detail__back">
                <BackIcon/> All Listings
            </a>
            <div className="projects-page__header">
                <h1 className="projects-page__title">Projects</h1>
            </div>

            {projects.length === 0 ? (
                <div className="projects-empty">
                    <div className="projects-empty__icon">️</div>
                    <h2>No projects yet</h2>
                    <p>Click the heart on any property to create your first project.</p>
                    <a href="/listings" className="projects-empty__cta">Browse properties</a>
                </div>
            ) : (
                <div className="projects-grid">
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={`/listings/projects/${project.id}`}
                            className="project-card"
                        >
                            <div className="project-card__thumb">
                                {project.thumbnail ? (
                                    <img src={project.thumbnail} alt={project.name}/>
                                ) : (
                                    <div className="project-card__thumb-placeholder">
                                        <FolderIcon/>
                                    </div>
                                )}
                            </div>
                            <div className="project-card__body">
                                <h3 className="project-card__name">{project.name}</h3>
                                <p className="project-card__count">
                                    {project.propertyCount ?? 0}{' '}
                                    {project.propertyCount === 1 ? 'property' : 'properties'}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

const FolderIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round"
         strokeLinejoin="round">
        <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
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

const BackIcon = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);