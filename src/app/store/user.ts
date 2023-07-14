import { atom } from "jotai";
import { User } from "models/user";

export const userAtom = atom<User | undefined>(undefined)