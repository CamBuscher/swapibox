import React from 'react'
import './OpeningCrawl.scss'

const OpeningCrawl = ({crawlInfo}) => {
  console.log(crawlInfo)
  return (
    <div>
      {crawlInfo.crawl}
    </div>
  )
}

export default OpeningCrawl