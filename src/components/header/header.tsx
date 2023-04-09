import ModeSwitch from './modeSwitch/modeSwitch'

const Header = () => (
  <div className="sticky top-0 left-0 z-50 w-full pt-4 pb-1 pr-4 mb-6 md:pr-0 bg-zinc-100/30 dark:bg-zinc-900/30 backdrop-blur-md">
    <div className="flex flex-row justify-end">
      <ModeSwitch />
    </div>
  </div>
)

export default Header
