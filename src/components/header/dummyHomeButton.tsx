import { NAME } from 'lib/globalConstants'

const DummyHomeButton = () => {
  return (
    <span className="font-bold dark:text-zinc-500 text-zinc-400 cursor-default pl-4 py-2">
      <span>{NAME}</span>
    </span>
  )
}

export default DummyHomeButton
