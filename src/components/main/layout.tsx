import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import NavBar from "./nav-bar"

declare let __PATH_PREFIX__: string

type LayoutProps = {
    location?: Location
    children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ location, children }) => {

    const rootPath = `${__PATH_PREFIX__}/`
    // const isRootPath = location.pathname === rootPath

    return (
        <div>
            <NavBar />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
