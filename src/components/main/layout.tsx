import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Header from "./header"

declare let __PATH_PREFIX__: string

type LayoutProps = {
    location: Location
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ location, children }) => {

    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath

    return (
        <div data-is-root-path={isRootPath}>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
