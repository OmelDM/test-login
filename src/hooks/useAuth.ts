import {getUserList, setUserList} from "../utils/storage";
import {addCurrentUser, getCurrentUserName} from "../utils/session";
import {User} from "../types";

interface AuthProps {
    addUser: (user: User) => void
    isRegisteredUser: (user: User) => boolean
    loginUser: (user: User) => void
    currentUserName: string | null
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

    const isRegisteredUser = (user: User): boolean => {
        const userList = getUserList()
        return !!userList.find(({userName}) => userName === user.userName)
    }

    const loginUser = (user: User) => {
        addCurrentUser(user)
    }

    return {
        addUser,
        isRegisteredUser,
        loginUser,
        currentUserName: getCurrentUserName(),
    }
}