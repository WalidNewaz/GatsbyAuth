import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/main/layout"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <p>Nothing to show here</p>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
