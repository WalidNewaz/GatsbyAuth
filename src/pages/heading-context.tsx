import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Section from "../components/context/Section"
import Heading from "../components/context/Heading"


const HeadingsContext: React.FC = () => {
    return (
        <Section level={1}>
          <Heading>Title</Heading>
          <Section level={2}>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Section level={3}>
              <Heading>Sub-heading</Heading>
              <Heading>Sub-heading</Heading>
              <Heading>Sub-heading</Heading>
              <Section level={4}>
                <Heading>Sub-sub-heading</Heading>
                <Heading>Sub-sub-heading</Heading>
                <Heading>Sub-sub-heading</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      )
}

export default HeadingsContext

export const Head: HeadFC = () => <title>Heading Context</title>