import create from 'zustand';

interface UserStore {
    cpf: string
    setCpf: (cpf: string) => void
}

export const useUserStore = create<UserStore>((set) => ({
    cpf: '',
    setCpf: (cpf) => set({ cpf: cpf })
}))