import React from "react"
import { Router } from "@reach/router"
import type { HeadFC, PageProps } from "gatsby"
import PrivateRoute from "../components/PrivateRoute"
import Profile from "../components/app/profile"
import Login from "../components/app/login"
import TripsCreatedPage from "../components/app/trips-created"
import Layout from "../components/main/layout"

const App: React.FC<PageProps> = (props: PageProps) => {
    return (
        <Layout>
            <Router>
                <PrivateRoute {...props} path="/app/profile" component={Profile} />
                <PrivateRoute {...props} path="/app/trips/created" component={TripsCreatedPage} />
                <Login path="/app/login" />
            </Router>
        </Layout>
    )
}

export default App