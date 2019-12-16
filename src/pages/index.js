import React from 'react'
import { Link } from 'gatsby'
import Seo from 'components/Seo'
import MainLayout from 'components/MainLayout'
import Image from 'components/Image'

const IndexPage = () => (
  <MainLayout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image src="gatsby-astronaut.png" title="aasd" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </MainLayout>
)

export default IndexPage
