import * as local from './notableWorkConstants'
import Badge from 'components/elements/badge'
import type { IIndex } from 'pages'
import ContentSection from 'components/elements/contentSection'
import { LOADING_CONTENT } from 'constants/globalConstants'

const NotableWork = ({ notableWorkList }: Pick<IIndex, 'notableWorkList'>) => {
  return (
    <ContentSection withDarkBackground>
      <h2 className="mt-0 mb-4">{local.SECTION_HEADER}</h2>
      {notableWorkList && notableWorkList.length > 0 ? (
        <>
          {notableWorkList.map((item) => {
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
        </>
      ) : (
        <p>{LOADING_CONTENT}</p>
      )}
    </ContentSection>
  )
}

export default NotableWork
