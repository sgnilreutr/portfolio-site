import ModeSwitch from './modeSwitch/modeSwitch'

const Header = () => (
  <div className="absolute top-0 left-0 z-50 w-full mb-6 pr-4 md:pr-0">
    <div className="flex flex-row justify-end pt-6">
      <ModeSwitch />
    </div>
  </div>
)

export default Header
