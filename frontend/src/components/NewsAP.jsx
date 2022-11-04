import React from 'react'

function NewsAP({headline, hyperlink, summary, timestamp}) {
  return (
    <>
        <a href={hyperlink}>
            <h3>{headline}</h3>
            <p>{summary}</p>
        </a>
        <p>{timestamp}</p>
    </>
  )
}

export default NewsAP