import React from "react"
import { FaJs, FaGithub, FaSketch, FaAtlassian } from "react-icons/fa"

const ICON_SIZE = 40

export const SECTION_HEADER = "Recent Tech"

const ATLASSIAN_ICON = <FaAtlassian size={ICON_SIZE} />
const ATLASSIAN_HEADER = "Atlassian"
const ATLASSIAN_PARAGRAPH =
  "By using my extensive experience with Jira and Confluence I'm able to support the development process. The analytical andstructured approach of matter supports writing down easy tounderstand application logic on a central location inConfluence, the development team can consultant it anytime andfrom anywhere."

const JS_ICON = <FaJs size={ICON_SIZE} />
const JS_HEADER = "JavaScript"
const JS_PARAGRAPH =
  "With my passion to learn, I have taught myself JavaScript. With this I wish to create numerous great products. JavaScript lends itself well for advanced application logics and ensuring high performance."

const GH_ICON = <FaGithub size={ICON_SIZE} />
const GH_HEADER = "Github"
const GH_PARAGRAPH =
  "Github allows me to store my projects online and share them with any development team. I aim to become hugely active on Github to support Open Source projects. Do you have one for me?"

const SKETCH_ICON = <FaSketch size={ICON_SIZE} />
const SKETCH_HEADER = "Sketch"
const SKETCH_PARAGRAPH =
  "Designing the next product allows me to align the aimed expectations with UI/UX before coding commences. Optimizing software flow for all devices, from a small mobile to a large desktop."

export const CONTENT_ARRAY = [
  {
    icon: ATLASSIAN_ICON,
    header: ATLASSIAN_HEADER,
    paragraph: ATLASSIAN_PARAGRAPH,
  },
  { icon: JS_ICON, header: JS_HEADER, paragraph: JS_PARAGRAPH },
  { icon: GH_ICON, header: GH_HEADER, paragraph: GH_PARAGRAPH },
  { icon: SKETCH_ICON, header: SKETCH_HEADER, paragraph: SKETCH_PARAGRAPH },
]
