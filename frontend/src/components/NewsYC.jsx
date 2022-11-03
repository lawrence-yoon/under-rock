import React from 'react'

function NewsYC({headline, hyperlink}) {
  return (
    <div>
        <a href={hyperlink}>
            {headline}
        </a>
    </div>
  )
}

export default NewsYC