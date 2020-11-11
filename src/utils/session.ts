import {User} from "../types";

const CURRENT_USER = 'CURRENT_USER'

export const addCurrentUser = (user: User) => {
    sessionStorage.removeItem(CURRENT_USER)
    sessionStorage.setItem(CURRENT_USER, user.userName)
}

export const removeCurrentUser = () => {
    sessionStorage.removeItem(CURRENT_USER)
}

export const getCurrentUserName = (): string | null => sessionStorage.getItem(CURRENT_USER)
