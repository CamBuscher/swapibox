import React from 'react'
import './OpeningCrawl.css'

const OpeningCrawl = ({crawlInfo}) => {
  return (
    <section className='star-wars'>
      <button className='stop-crawl'>Exit</button>
      <div className='crawl'>
        <h4>{crawlInfo.crawl}</h4>
        <div className='title'>
          <p>{crawlInfo.title}</p>
          <p>Release date: {crawlInfo.release_date}</p>
        </div>
      </div>
    </section>
  )
}

export default OpeningCrawl