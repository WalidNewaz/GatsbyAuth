import React from "react"
import { Router } from "@reach/router"
import type { HeadFC, PageProps } from "gatsby"
import PrivateRoute from "../components/PrivateRoute"
import Profile from "../components/app/profile"
import Login from "../components/app/login"
import TripsCreatedPage from "../components/app/trips/created"
import Layout from "../components/main/layout"

const App: React.FC<PageProps> = (props: PageProps) => {
    return (
        <Layout>
            <Router>
                {/* <Profile path="/app/profile" /> */}
                <PrivateRoute {...props} path="/app/profile" component={Profile} />
                <Login path="/app/login" />
                <TripsCreatedPage path="/trips/created" />
            </Router>
        </Layout>
    )
}

export default App