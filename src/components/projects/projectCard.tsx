import React from "react"
import ReactMarkdown from "react-markdown"
import { ContentType, ItemType } from "./projectTypes"

const ERROR_MESSAGE = "Something went wrong."

const Projectcard = ({ item }: { item: ItemType }) => {
  const dataNode = item.node
  const { title, date, content } = dataNode

  const ContentCreator = ({ content }: { content: ContentType }) => {
    if (content.text) {
      return <ReactMarkdown>{content.text.text}</ReactMarkdown>
    } else if (content.link) {
      return (
        <pre>
          <a href={content.link}>{content.linkName}</a>
        </pre>
      )
    }
    return null
  }

  const pageContent = () => {
    return content && content.length > 0 ? (
      content.map((item: any, index: number) => (
        <ContentCreator key={index} content={item} />
      ))
    ) : (
      <div>{ERROR_MESSAGE}</div>
    )
  }

  return (
    <article className="project-container">
      <div className="project-header">
        <h3>{title}</h3>
        <p style={{ fontSize: "0.7rem", margin: 0 }}>{date}</p>
      </div>
      {pageContent()}
    </article>
  )
}

export default Projectcard
