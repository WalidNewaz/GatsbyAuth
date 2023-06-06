export const isBrowser = () => typeof window !== "undefined"

export const getUser = () => {
    if (isBrowser()) {
        const user = window.localStorage.getItem("gatsbyUser")
        if (user) {
            return JSON.parse(user)
        }
    }
    return {}

}

type User = {
    username?: string,
    name?: string,
    email?: string,
}

const setUser = (user: User) =>
    window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

type Login = {
    username: string,
    password: string,
}

export const handleLogin = ({ username, password }: Login) => {
    if (username === `john` && password === `pass`) {
        return setUser({
            username: `john`,
            name: `Johnny`,
            email: `johnny@example.org`,
        })
    }

    return false
}

export const isLoggedIn = () => {
    const user = getUser()

    return !!user.username
}

export const logout = (callback: Function) => {
    setUser({})
    callback()
}

