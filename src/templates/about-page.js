import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ReferralCard from '../components/ReferralCard'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section">
      <h2 className="heading-primary">{title}</h2>
      <div className="referral-card-wrapper">
        <ReferralCard
          thumbnail="https://lh3.googleusercontent.com/-2sFwgCmvZ1s/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcGGmEzQjkO-kKQP-4BpmxlFlsIvw.CMID/s192-c/photo.jpg"
          name="すずき ゆうた"
          text="フリーランスのエンジニアをやりながら、好きなものを開発しています。基本的には気ままに生きています。趣味はサウナです。ランチ行ってあげてもいいよって人は気軽にご連絡ください。"
        />
      </div>
      <PageContent className="post-content" content={content} />
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
