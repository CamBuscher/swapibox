import React from 'react'
import './OpeningCrawl.scss'

const OpeningCrawl = ({crawlInfo}) => {
  return (
    <div>
      <h4>{crawlInfo.crawl}</h4>
      <p>{crawlInfo.title}</p>
      <p>Release date: {crawlInfo.release_date}</p>
    </div>
  )
}

export default OpeningCrawl