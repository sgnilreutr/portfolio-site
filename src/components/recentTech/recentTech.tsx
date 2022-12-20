import * as local from 'constants/recentTechConstants'
import {
  SiAtlassian,
  SiGithub,
  SiGmail,
  SiGraphql,
  SiMaterialui,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTsnode,
  SiTypescript,
  SiVercel,
  SiVite,
  SiYarn,
} from 'react-icons/si'

interface recentTechItemType {
  internalName: string
  text: {
    text: string
  }
}

const ICON_SIZE = 40

const techIconMap: { [key: string]: JSX.Element } = {
  React: <SiReact size={ICON_SIZE} />,
  Redux: <SiRedux size={ICON_SIZE} />,
  TypeScript: <SiTypescript size={ICON_SIZE} />,
  MUI: <SiMaterialui size={ICON_SIZE} />,
  default: <div />,
}

const additionalTechMap = [
  { title: 'Atlassian', icon: <SiAtlassian size={ICON_SIZE} /> },
  { title: 'Github', icon: <SiGithub size={ICON_SIZE} /> },
  { title: 'GoogleAPI', icon: <SiGmail size={ICON_SIZE} /> },
  { title: 'GraphQL', icon: <SiGraphql size={ICON_SIZE} /> },
  { title: 'NextJs', icon: <SiNextdotjs size={ICON_SIZE} /> },
  { title: 'NodeJS', icon: <SiTsnode size={ICON_SIZE} /> },
  { title: 'Styled Components', icon: <SiStyledcomponents size={ICON_SIZE} /> },
  { title: 'Tailwind', icon: <SiTailwindcss size={ICON_SIZE} /> },
  { title: 'Vercel', icon: <SiVercel size={ICON_SIZE} /> },
  { title: 'Vite', icon: <SiVite size={ICON_SIZE} /> },
  { title: 'Yarn', icon: <SiYarn size={ICON_SIZE} /> },
]
const RecentTech = () => {
  // const { contentfulTechStack } = useStaticQuery(graphql`
  //   query {
  //     contentfulTechStack {
  //       internalName
  //       activeSkills {
  //         internalName
  //         text {
  //           text
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <section className="container">
      <h2 className="section-header">{local.SECTION_HEADER}</h2>
      <div className="tech-container">
        {/* {contentfulTechStack &&
          contentfulTechStack.activeSkills.length > 0 &&
          contentfulTechStack.activeSkills.map(
            (item: recentTechItemType, index: number) => (
              <div key={index}>
                {item.internalName && (
                  <i className="hover_effect">
                    {techIconMap[item.internalName]}
                  </i>
                )}
                {item.internalName && <h3>{item.internalName}</h3>}
                {item.text.text && <p>{item.text.text}</p>}
              </div>
            )
          )} */}
      </div>
      <h3 className="section-header">{local.ADDITIONAL_TECH}</h3>
      <div className="additional-tech-container">
        {additionalTechMap.map((item) => (
          <div key={item.title} title={item.title}>
            <i>{item.icon}</i>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentTech
