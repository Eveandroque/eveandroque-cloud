// src/stores/projectModalStore.ts
// Controls the "Add to project" modal open/close state

import {create} from 'zustand';

type ModalView = 'list' | 'create';

interface ProjectModalState {
    isOpen: boolean;
    view: ModalView;
    propertyId: string | null;
    propertyThumbnail: string | undefined;

    open: (propertyId: string, thumbnail?: string) => void;
    close: () => void;
    showCreate: () => void;
    showList: () => void;
}

export const useProjectModalStore = create<ProjectModalState>((set) => ({
    isOpen: false,
    view: 'list',
    propertyId: null,
    propertyThumbnail: undefined,

    open: (propertyId, thumbnail) =>
        set({isOpen: true, view: 'list', propertyId, propertyThumbnail: thumbnail}),
    close: () =>
        set({isOpen: false, propertyId: null, propertyThumbnail: undefined}),
    showCreate: () => set({view: 'create'}),
    showList: () => set({view: 'list'}),
}));