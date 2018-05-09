import React from 'react'
import './OpeningCrawl.css'

const OpeningCrawl = ({crawlInfo}) => {
  return (
    <section class="star-wars">
      <div class="crawl">
        <h4>{crawlInfo.crawl}</h4>
        <div class="title">
          <p>{crawlInfo.title}</p>
          <p>Release date: {crawlInfo.release_date}</p>
        </div>
      </div>
    </section>
  )
}

export default OpeningCrawl