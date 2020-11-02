import { useStaticQuery, graphql } from "gatsby"

const useSiteResume = () => {
  const result = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          resume {
            education {
              degree
              location
              period
              school
            }
            hobbies
            languages {
              level
              language
            }
            projects {
              name
              description
              url
              highlights
            }
            skills {
              category
              content
            }
            basics {
              email
              location
              name
              nationality
              age
              phone
              title
              website
              cvUrl
              lastUpdate
              profiles {
                network
                url
              }
            }
            experiences {
              activities
              company
              location
              period
              position
            }
          }
        }
      }
    }
  `)
  return result.site.siteMetadata.resume
}

export default useSiteResume
