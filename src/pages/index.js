import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Chat from "../components/chat/Chat"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Chat></Chat>
  </Layout>
)

export default IndexPage
