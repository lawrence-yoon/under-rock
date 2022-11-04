import React from 'react'

function NewsYC({headline, hyperlink}) {
  return (
    <>
      <a href={hyperlink}>
          {headline}
      </a>
      <br />
    </>
  )
}

export default NewsYC