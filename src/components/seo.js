import React from 'react'
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types'

function Seo({ description, lang, meta, title }) {
    const {site} = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
              description
              siteUrl
              keywords
            }
          }
        }
      `
    )
    
    const keywords = site.siteMetadata.keywords
    const metaDescription = site.siteMetadata.keywords
    const defaultTitle = site.siteMetadata?.title

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={defaultTitle}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
                {name: 'description', content: metaDescription},
                {name: 'keywords', content: keywords},
                {property: 'og:title', content: "ente"},
                {property: 'og:description', content: "encrypted backups for your photos"},
                {property: 'og:site_name', content: "ente"},
                {property: 'og:image', content: "https://ente.io/img/preview.png"},
                {name:"twitter:title" , content:"ente"},
                {name:"twitter:description", content:"encrypted backups for your photos"},
                {name:"twitter:image", content:"https://ente.io/img/preview.png"},
                {name:"twitter:card", content:"summary_large_image"},
                {name:"twitter:site", content:"@ente_io"}
            ].concat(meta)} />
  )
  }

  Seo.defaultProps = {
    lang: 'en',
    meta: [],
    description: ''
  }

  Seo.propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string
  }

export default Seo