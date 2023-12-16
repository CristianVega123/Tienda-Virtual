
//* Interface para tener autocompletado y validación de tipos dentro del contexto de Zustand
export interface StateUser {
    user_id: number 
    user_email: string
    user_name :string;
    user_surname: string;
    user_isValid : boolean;
    user_role: string 
}

//* Declarando los set para poder "merged" los valores de los estados

export type Action = {
    update_user_name : (name: StateUser["user_name"]) => void
    update_user_surname : (surname: StateUser["user_surname"]) => void
    update_user_isValid : (valid: StateUser["user_isValid"]) => void
    update_user_role : (role: StateUser["user_role"]) => void
    update_user_id : (id: StateUser["user_id"]) => void
    update_user_email : (email: StateUser["user_email"]) => void
}
