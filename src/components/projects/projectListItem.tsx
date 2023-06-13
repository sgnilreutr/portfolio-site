import Stack from 'components/elements/stack'
import type { ComponentImage, Project } from 'gql/graphql'
import type { DateFormatter } from 'lib/formatDate'
import dateFormatter from 'lib/formatDate'
import { ICON_SIZE, PROJECT_LINK } from 'lib/globalConstants'
import Link from 'next/link'
import ImageComponent from 'components/elements/image'

interface ProjectListItemProps extends Pick<DateFormatter, 'noDay'> {
  project: Project
}

const ProjectListItem = ({ noDay, project }: ProjectListItemProps) => {
  const {
    date,
    title,
    contentCollection,
    sys: { id },
  } = project

  const getFirstImage = () => {
    if (!contentCollection) {
      return undefined
    }
    const firstImage = contentCollection.items.find(
      (item) => item && 'image' in item && item.image
    )
    if (firstImage) {
      const typeFirstImage = firstImage as ComponentImage
      return typeFirstImage
    }
    return firstImage
  }

  const logo = getFirstImage()
  const toUseHref = `${PROJECT_LINK}/${id}`

  return (
    <li className="relative -mx-3">
      <Link href={toUseHref}>
        <div className="hover:bg-zinc-700 dark:hover:bg-zinc-800 transition grid grid-cols-[100px_1fr] gap-3 py-1.5 px-3 items-center grayscale-[35%] hover:grayscale-0 transition">
          <span className="text-zinc-400 dark:text-zinc-500">
            {dateFormatter({ date, noDay })}
          </span>
          <Stack align="center" spacing="huge">
            {logo?.image ? (
              <ImageComponent
                image={logo?.image}
                noDefaultStyles
                customSize={ICON_SIZE}
                className="rounded-md"
              />
            ) : (
              <div className="w-[30px] h-[30px] bg-orange-600" />
            )}

            <span>{title}</span>
          </Stack>
        </div>
      </Link>
    </li>
  )
}

export default ProjectListItem
