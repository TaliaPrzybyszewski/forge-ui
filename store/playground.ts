'use client'
import { create } from 'zustand'
import { PROP_DEFAULTS } from '@/lib/prop-defaults'

export type CanvasMode = 'c-grid' | 'c-dots' | 'c-dark'

interface PlaygroundStore {
  activeComponent: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: Record<string, Record<string, any>>
  canvasMode: CanvasMode
  setActiveComponent: (id: string) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setProp: (componentId: string, key: string, value: any) => void
  setCanvasMode: (mode: CanvasMode) => void
  resetComponent: (componentId: string) => void
}

export const usePlaygroundStore = create<PlaygroundStore>((set) => ({
  activeComponent: 'button',
  props: structuredClone(PROP_DEFAULTS),
  canvasMode: 'c-grid',

  setActiveComponent: (id) => set({ activeComponent: id }),

  setProp: (componentId, key, value) =>
    set((state) => ({
      props: {
        ...state.props,
        [componentId]: { ...state.props[componentId], [key]: value },
      },
    })),

  setCanvasMode: (mode) => set({ canvasMode: mode }),

  resetComponent: (componentId) =>
    set((state) => ({
      props: {
        ...state.props,
        [componentId]: structuredClone(PROP_DEFAULTS[componentId] ?? {}),
      },
    })),
}))
