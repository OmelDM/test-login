import {User} from "../types";

const USER_LIST = 'USER_LIST'

export const getUserList = (): ReadonlyArray<User> => {
    const userList = localStorage.getItem(USER_LIST)
    if (userList) {
        return JSON.parse(userList)
    } else {
        return []
    }
}

export const setUserList = (userList: ReadonlyArray<User>) => localStorage.setItem(USER_LIST, JSON.stringify(userList))
