import create from 'zustand';
import { Account } from './props/ClientProps';

interface UserStore {
    userAccount: Account | null
    setAccount: (acc: Account) => void
}

export const useUserStore = create<UserStore>((set) => ({
    userAccount: null,
    setAccount: (acc) => set({ userAccount: acc })
}))