import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Section from "../components/context/Section"
import Heading from "../components/context/Heading"

const Post: React.FC<{ title: string, body: string }> = ({ title, body }) => {
    return (
        <Section isFancy={true}>
          <Heading>
            {title}
          </Heading>
          <p><i>{body}</i></p>
        </Section>
      )
}

const RecentPosts: React.FC = () => {
    return (
        <Section>
          <Heading>Recent Posts</Heading>
          <Post
            title="Flavors of Lisbon"
            body="...those pastéis de nata!"
          />
          <Post
            title="Buenos Aires in the rhythm of tango"
            body="I loved it!"
          />
        </Section>
      )
}

const AllPosts: React.FC = () => {
    return (
        <Section>
          <Heading>Posts</Heading>
          <RecentPosts />
        </Section>
      )
}

const ProfilePage: React.FC = () => {
    return (
        <Section>
          <Heading>My Profile</Heading>
          <Post
            title="Hello traveller!"
            body="Read about my adventures."
          />
          <AllPosts />
        </Section>
      )
}

export default ProfilePage

export const Head: HeadFC = () => <title>User Profile</title>
