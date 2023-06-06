import React from "react" 
import { useState } from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../../services/auth"
import { EventEmitter } from "stream"

const Login: React.FC<{ path?: String }> = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameUpdate = (event: React.BaseSyntheticEvent) => {
        setUsername(event.target.value)
    }

    const handlePasswordUpdate = (event: React.BaseSyntheticEvent) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event: React.BaseSyntheticEvent) => {
        event.preventDefault()
        handleLogin({ username, password })
    }


    return (
        <>
            <h1>Log in</h1>
            <form
                method="post"
                onSubmit={event => {
                    handleSubmit(event)
                    navigate(`/app/profile`)
                }}
            >
                <label>
                    Username
                    <input type="text" name="username" onChange={handleUsernameUpdate} />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        onChange={handlePasswordUpdate}
                    />
                </label>
                <input type="submit" value="Log In" />
            </form>
        </>
    )
}

export default Login