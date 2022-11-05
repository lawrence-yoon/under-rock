import React from 'react'

function NewsAP({headline, hyperlink, summary, timestamp}) {
  return (
    <div className='articles-AP'>
      <a href={hyperlink}>
        <h3 className='headline'>{headline}</h3>
        <p>{summary}</p>
      </a>
      <p>{timestamp}</p>
    </div>
  )
}

export default NewsAP