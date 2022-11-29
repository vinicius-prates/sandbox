import axios from 'axios';
import create from 'zustand';
import { Account } from './props/ClientProps';

interface UserStore {
    userAccount: Account | null
    fetchAccount: (accId: string | number) => void
}

export const useUserStore = create<UserStore>((set) => ({
    userAccount: null,
    fetchAccount: async (accId) => {
        const account = await axios.get('http://localhost:8000/api/account/' + accId)
        
        const accData = account.data as Account
        set({ userAccount: accData})
    }
}))