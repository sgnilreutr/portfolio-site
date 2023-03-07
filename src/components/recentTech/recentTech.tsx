import * as local from './recentTechConstants'
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

import type { IIndex } from 'pages'
import type { ComponentText } from '__generated__/graphql'
import ContentSection from 'components/elements/contentSection'
import Stack from 'components/elements/stack'

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

const ERROR_MESSAGE = 'Something went wrong.'

const RecentTech = ({
  recentTechContent,
}: Pick<IIndex, 'recentTechContent'>) => {
  const pageContentRecentTech = () => {
    return recentTechContent[0] &&
      recentTechContent[0].activeSkillsCollection?.items &&
      recentTechContent[0].activeSkillsCollection.items.length > 0 ? (
      recentTechContent[0].activeSkillsCollection.items.map((item) => {
        if (item) {
          const { internalName, text, sys } = item as ComponentText
          return (
            <Stack key={sys.id} direction="vertical" align="start">
              {internalName && (
                <div className="duration-200 ease-in-out hover:text-orange-500 dark:hover:bg-orange-700">
                  {techIconMap[internalName]}
                </div>
              )}
              {internalName && <h3>{internalName}</h3>}
              {text && <p>{text}</p>}
            </Stack>
          )
        }
        return null
      })
    ) : (
      <div>{ERROR_MESSAGE}</div>
    )
  }

  const pageContentAdditionalTech = () => {
    return additionalTechMap.map(({ title, icon }) => (
      <div
        key={title}
        title={title}
        className="flex flex-col items-center justify-center md:flex-row md:odd:mb-auto md:even:mt-auto"
      >
        <i className="relative p-4 md:p-0 md:absolute">{icon}</i>
        <span className="text-center md:absolute p-2 transition-opacity duration-200 ease-in-out md:opacity-0 md:hover:opacity-100 bg-zinc-100/[.8] dark:bg-zinc-900/[.8]">
          {title}
        </span>
      </div>
    ))
  }

  return (
    <ContentSection>
      <h2 className="mt-0 mb-4">{local.SECTION_HEADER}</h2>
      <div className="grid grid-cols-1 gap-y-4 md:gap-y-6 md:gap-x-10 md:grid-cols-2">
        {pageContentRecentTech()}
      </div>
      <h3 className="mt-6 mb-4">{local.ADDITIONAL_TECH}</h3>
      <div className="grid grid-cols-2 pt-4 md:pt-10 md:flex md:flex-wrap md:flex-row md:justify-between md:relative md:h-20">
        {pageContentAdditionalTech()}
      </div>
    </ContentSection>
  )
}

export default RecentTech
