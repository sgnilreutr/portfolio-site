import * as local from 'constants/notableWorkConstants'
import Badge from 'components/elements/badge'
import { IIndex } from 'pages'

const NotableWork = ({ notableWorkList }: Pick<IIndex, 'notableWorkList'>) => {
  return (
    <section className="container-attention">
      <h2 className="section-header">{local.SECTION_HEADER}</h2>
      <div>
        {notableWorkList &&
          notableWorkList.length > 0 &&
          notableWorkList.map((item, index) => {
            return (
              <ul key={index}>
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
