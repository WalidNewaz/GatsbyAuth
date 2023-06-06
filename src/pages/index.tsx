import * as React from "react"
import { Link, navigate } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/main/layout"
import { getUser, isLoggedIn } from "../services/auth"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
      <p>
        {isLoggedIn() ? (
          <>
            You are logged in, so check your{" "}
            <Link to="/app/profile">profile</Link>
          </>
        ) : (
          <>
            You should <Link to="/app/login">log in</Link> to see restricted
            content
          </>
        )}
      </p>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
