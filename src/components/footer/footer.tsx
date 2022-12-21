import { FaGithub, FaLinkedin } from 'react-icons/fa'
import * as global from 'constants/globalConstants'

const Footer = () => {
  return (
    <footer className="flex flex-row flex-wrap justify-between px-10 py-4 mx-12 my-0 md:py-8 lg:py-12">
      <div className="flex flex-row flex-wrap">
        <div style={{ marginRight: `16px` }}>
          <a
            className="duration-200 ease-in-out hover:text-orange-500 dark:hover:text-orange-700 opacity-80"
            href={global.LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} aria-hidden="true" focusable="false" />
            <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-no-wrap border-0">
              {global.SR_LINKEDIN}
            </span>
          </a>
        </div>
        <div>
          <a
            className="duration-200 ease-in-out hover:text-orange-500 dark:hover:text-orange-700 opacity-80"
            href={global.GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} aria-hidden="true" focusable="false" />
            <span className="absolute w-px h-px p-0 -m-px overflow-hidden whitespace-no-wrap border-0">
              {global.SR_GITHUB}
            </span>
          </a>
        </div>
      </div>
      <div>
        <span className="text-sm">
          Build with{' '}
          <a
            className="underline duration-100 ease-in bg-transparent hover:text-orange-500 active:text-orange-500 dark:hover:text-orange-700"
            href="https://nextjs.org/"
          >
            NextJs
          </a>
          . Hosted on{' '}
          <a
            className="underline duration-100 ease-in bg-transparent hover:text-orange-500 active:text-orange-500 dark:hover:text-orange-700"
            href="https://vercel.com/"
          >
            Vercel
          </a>
          . View the{' '}
          <a
            className="underline duration-100 ease-in bg-transparent hover:text-orange-500 active:text-orange-500 dark:hover:text-orange-700"
            href="https://github.com/sgnilreutr/portfolio-site"
          >
            Source Code
          </a>
          .{' '}
        </span>
        <span className="text-sm">© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default Footer
