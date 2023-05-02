import classNames from 'lib/classNames'
import type { ReactNode } from 'react'

interface ContentSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
  withDarkBackground?: boolean
}

const ContentSection = ({
  children,
  withDarkBackground = false,
  ...rest
}: ContentSectionProps) => {
  return (
    <section
      {...rest}
      className={classNames(
        'px-4 py-4 mx-2 my-0 md:px-10 md:mx-12 md:py-8 lg:py-12',
        `${withDarkBackground && 'text-white bg-black dark:text-zinc-300'}`,
        rest.className
      )}
    >
      {children}
    </section>
  )
}

export default ContentSection
