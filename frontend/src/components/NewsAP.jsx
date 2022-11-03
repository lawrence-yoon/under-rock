import React from 'react'

function NewsAP({headline, hyperlink, summary, timestamp}) {
  return (
    <div>
        <a href={hyperlink}>
            <h2>{headline}</h2>
            <p>{summary}</p>
        </a>
        <p>{timestamp}</p>
    </div>
  )
}

export default NewsAP