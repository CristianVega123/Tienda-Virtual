import { create } from 'zustand'
import { Action, StateUser} from '../types/InterfaceState'



export const useStateUser = create<StateUser & Action>((set) => ({
    user_id: 0,
    user_email: "",
    user_name: "",
    user_surname: "",
    user_isValid: false,
    user_role: "",
    update_user_name: (name) => set(() => ({user_name: name})),
    update_user_surname: (surname) => set(() => ({user_surname: surname})),
    update_user_isValid: (valid) => set(() => ({user_isValid: valid})),
    update_user_role: (role) => set(() => ({user_role: role})),
    update_user_id: (id) => set(() => ({user_id: id})),
    update_user_email: (email) => set(() => ({user_email: email})),
}))