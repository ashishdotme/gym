import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import { Button } from 'semantic-ui-react'
import gfm from 'remark-gfm'

interface Props {
  card: {
    topic: string
    title: string
    front: string
    back: string
  }
}

const Card = ({ card }: Props) => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          {card.title}
          <div className="tag ml-3">{card.topic}</div>
        </p>
      </header>
      <div className="card-content">
        <p className="title is-5">
          <ReactMarkdown plugins={[gfm]} children={card.front} escapeHtml={false} />
        </p>
        <div className="content">
          <ReactMarkdown plugins={[gfm]} children={card.back} escapeHtml={false} />
        </div>
      </div>
    </div>
  )
}

export default Card
