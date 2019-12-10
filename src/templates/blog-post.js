import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ReferralCard from '../components/ReferralCard'

export const BlogPostTemplate = ({
  content,
  featuredimage,
  contentComponent,
  lead,
  tags,
  title,
  helmet,
  guestimage,
  guestname,
  guesttext,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="post-eyecatch">
        <PreviewCompatibleImage
          imageInfo={{
            image: featuredimage,
            alt: `featured image thumbnail for post ${title}`,
          }}
        />
      </div>
      <div className="post-content">
        <h1 className="post-heading">
          {title}
        </h1>
        <p>{lead}</p>
        <ReferralCard
          thumbnail={guestimage.childImageSharp.fluid.src}
          name={guestname}
          text={guesttext}
        />
        <PostContent content={content} />
        {tags && tags.length ? (
          <div>
            <ul className="post-tags">
              {tags.map(tag => (
                <li key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  featuredimage: PropTypes.object,
  description: PropTypes.string,
  title: PropTypes.string,
  lead: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  console.log('post', post)

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        lead={post.frontmatter.leadtext}
        tags={post.frontmatter.tags}
        guestimage={post.frontmatter.guestimage}
        guestname={post.frontmatter.guestname}
        guesttext={post.frontmatter.guesttext}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        leadtext
        description
        tags
        guestname
        guesttext
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        guestimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
