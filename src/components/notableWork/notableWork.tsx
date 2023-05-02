// import * as local from './notableWorkConstants'
// import Badge from 'components/elements/badge'
// import type { IndexProps } from 'pages'
// import ContentSection from 'components/elements/contentSection'
// import { LOADING_CONTENT } from 'constants/globalConstants'

// const NotableWork = ({
//   notableWorkList,
// }: Pick<IndexProps, 'notableWorkList'>) => {
//   if (!notableWorkList) {
//     return null
//   }

//   return (
//     <ContentSection withDarkBackground>
//       <h2 className="mt-0 mb-4">{local.SECTION_HEADER}</h2>
//       {notableWorkList && notableWorkList.length > 0 ? (
//         <>
//           {notableWorkList.map((item) => {
//             if (!item) {
//               return null;
//             }
//             return (
//               <ul key={item?.sys.id} className="mb-4">
//                 <li>
//                   <span className="mr-2">{item?.notableListItem}</span>
//                   <Badge
//                     label={item?.label ?? ''}
//                     variant={item?.label ?? 'dev'}
//                   />
//                 </li>
//               </ul>
//             )
//           })}
//         </>
//       ) : (
//         <p>{LOADING_CONTENT}</p>
//       )}
//     </ContentSection>
//   )
// }

// export default NotableWork

export default {}
