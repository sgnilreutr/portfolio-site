import * as local from './notableWorkConstants'
import Badge from 'components/elements/badge'
import { IIndex } from 'pages'

const NotableWork = ({ notableWorkList }: Pick<IIndex, 'notableWorkList'>) => {
  return (
    <section className="px-4 md:px-10 py-8 mx-2 md:mx-12 my-0 text-white bg-black rounded-xl dark:text-zinc-400">
      <h2 className="mt-0 mb-4">{local.SECTION_HEADER}</h2>
      <div>
        {notableWorkList &&
          notableWorkList.length > 0 &&
          notableWorkList.map((item) => {
            return (
              <ul key={item?.sys.id} className="mb-4">
                <li>
                  <span style={{ marginRight: '10px' }}>
                    {item?.notableListItem}
                  </span>
                  <Badge
                    label={item?.label ?? ''}
                    variant={item?.label ?? 'dev'}
                  />
                </li>
              </ul>
            )
          })}
      </div>
    </section>
  )
}

export default NotableWork
