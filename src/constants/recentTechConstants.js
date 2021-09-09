import React from "react"
import { FaJs, FaGithub, FaSketch, FaAtlassian, FaReact } from "react-icons/fa"
import { SiGraphql, SiRedux } from "react-icons/si";

const ICON_SIZE = 40

export const SECTION_HEADER = "Recent Tech"

const ATLASSIAN_ICON = <FaAtlassian size={ICON_SIZE} />
const ATLASSIAN_HEADER = "Atlassian"
const ATLASSIAN_PARAGRAPH =
  "By using my extensive experience with Jira and Confluence I'm able to support the development process. The analytical andstructured approach of matter supports writing down easy tounderstand application logic on a central location inConfluence, the development team can consultant it anytime andfrom anywhere."

  const REACT_ICON = <FaReact size={ICON_SIZE} />
  const REACT_HEADER = "ReactJs"
  const REACT_PARAGRAPH =
    "With my passion to learn, I have taught myself to work with React. With this I wish to create numerous great products. React lends itself well for advanced application logics and ensuring high performance."
  
  const GRAPH_ICON = <SiGraphql size={ICON_SIZE} />
  const GRAPH_HEADER = "GraphQL"
  const GRAPH_PARAGRAPH =
    "In working with the static-site generation web framework Gatsby, I've learned to leverage the power of GraphQL."
  
  const REDUX_ICON = <SiRedux size={ICON_SIZE} />
  const REDUX_HEADER = "Redux"
  const REDUX_PARAGRAPH =
  "Having implemented Redux into several projects, it is my go to state container for React Apps. I have experience with both React-Redux and Redux Toolkit."
  
  const GH_ICON = <FaGithub size={ICON_SIZE} />
  const GH_HEADER = "Github"
  const GH_PARAGRAPH =
  "Github allows me to store my projects online and share them with any development team. I aim to become hugely active on Github to support Open Source projects. Do you have one for me?"
  
  // const JS_ICON = <FaJs size={ICON_SIZE} />
  // const JS_HEADER = "JavaScript"
  // const JS_PARAGRAPH =
  //   "With my passion to learn, I have taught myself JavaScript. With this I wish to create numerous great products. JavaScript lends itself well for advanced application logics and ensuring high performance."
  
// const SKETCH_ICON = <FaSketch size={ICON_SIZE} />
// const SKETCH_HEADER = "Sketch"
// const SKETCH_PARAGRAPH =
//   "Designing the next product allows me to align the aimed expectations with UI/UX before coding commences. Optimizing software flow for all devices, from a small mobile to a large desktop."

export const CONTENT_ARRAY = [
  {
    icon: ATLASSIAN_ICON,
    header: ATLASSIAN_HEADER,
    paragraph: ATLASSIAN_PARAGRAPH,
  },
  { icon: REACT_ICON, header: REACT_HEADER, paragraph: REACT_PARAGRAPH },
  { icon: REDUX_ICON, header: REDUX_HEADER, paragraph: REDUX_PARAGRAPH },
  { icon: GRAPH_ICON, header: GRAPH_HEADER, paragraph: GRAPH_PARAGRAPH },
  { icon: GH_ICON, header: GH_HEADER, paragraph: GH_PARAGRAPH },
]
