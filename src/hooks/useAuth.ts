import {getUserList, setUserList} from "../utils/storage";
import {addCurrentUser, getCurrentUserName, removeCurrentUser} from "../utils/session";
import {User} from "../types";

interface AuthProps {
    addUser: (user: User) => void
    isRegisteredUser: (name: string) => boolean
    loginUser: (user: User) => void
    logout: () => void
    currentUserName: string | null
    isLoggedIn: () => boolean
}

export const useAuth = (): AuthProps => {

    const addUser = (user: User) => {
        const userList = getUserList()
        if (userList.find(({userName}) => userName === user.userName)) {
            return
        }
        setUserList([
            ...userList,
            user,
        ])
    }

    const isRegisteredUser = (name: string): boolean => {
        const userList = getUserList()
        return !!userList.find(({userName}) => userName === name)
    }

    const isLoggedIn = (): boolean => !!getCurrentUserName()

    const loginUser = (user: User) => {
        addCurrentUser(user)
    }

    const logout = (): void => {
        removeCurrentUser()
    }

    return {
        addUser,
        isRegisteredUser,
        isLoggedIn,
        loginUser,
        logout,
        currentUserName: getCurrentUserName(),
    }
}