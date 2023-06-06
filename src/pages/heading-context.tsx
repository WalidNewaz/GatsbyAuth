import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Section from "../components/context/Section"
import Heading from "../components/context/Heading"


const HeadingsContext: React.FC = () => {
    return (
        <Section>
          <Heading>Title</Heading>
          <Section>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Section>
              <Heading>Sub-heading</Heading>
              <Heading>Sub-heading</Heading>
              <Heading>Sub-heading</Heading>
              <Section>
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