import { atom } from "jotai";

let prefersDark = true

if (typeof window !== "undefined") prefersDark = !!window.matchMedia('(prefers-color-scheme: dark)')

export const themeAtom = atom<boolean>(prefersDark)
