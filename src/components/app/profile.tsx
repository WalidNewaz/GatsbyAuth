import * as React from 'react'
import type { HeadFC } from "gatsby"
import Section from "../context/Section"
import Heading from "../context/Heading"
import { getUser } from "../../services/auth"

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

const ProfilePage: React.FC<{ path?: String }> = ({ path }) => {
  return (
    // <Section>
    //   <Heading>My Profile</Heading>
    //   <Post
    //     title="Hello traveller!"
    //     body="Read about my adventures."
    //   />
    //   <AllPosts />
    // </Section>
    <>
      <h1>Your profile</h1>
      <ul>
        <li>Name: {getUser().name}</li>
        <li>E-mail: {getUser().email}</li>
      </ul>
    </>
  )
}

export default ProfilePage

export const Head: HeadFC = () => <title>User Profile</title>
