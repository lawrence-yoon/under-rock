import React from 'react'

function NewsYC({headline, hyperlink}) {
  return (
    <div className='posts-YC'>
      <a href={hyperlink}>
          {headline}
      </a>
    </div>
  )
}

export default NewsYC