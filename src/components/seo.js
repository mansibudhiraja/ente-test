import React from 'react'
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types'

function SEO({ description, lang, meta, title }) {
    const {site} = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
              description
              siteUrl
              keywords
              image
            }
          }
        }
      `
    )
    
    const keywords = site.siteMetadata.keywords
    const metaDescription = site.siteMetadata.keywords
    const defaultTitle = site.siteMetadata?.title
    const image = site.siteMetadata.image

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
                {name: 'description', content: metaDescription},
                {name: `keywords`, content: keywords},
                {property: `og:title`, content: "ente"},
                {property: `og:description`, content: "encrypted backups for your photos"},
                {property: `og:site_name`, content: "ente"},
                {property: `og:site_name`, content: "ente"},
                {property: `og:image`, content: "https://ente.io/img/preview.png"},
                {name:"twitter:title" , content:"ente"},
                {name:"twitter:description", content:"encrypted backups for your photos"},
                {name:"twitter:image", content:"https://ente.io/img/preview.png"},
                {name:"twitter:card", content:"summary_large_image"},
                {name:"twitter:site", content:"@ente_io"}
            ].concat(meta)} />
  )
  }

  SEO.defaultProps = {
    lang: 'en',
    meta: [],
    description: ''
  }

  SEO.propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
  }

export default SEO