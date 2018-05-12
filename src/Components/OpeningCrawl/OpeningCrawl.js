import React from 'react';
import './OpeningCrawl.css';
import PropTypes from 'prop-types';

const OpeningCrawl = ({crawlInfo, closeCrawl}) => {
  setTimeout(closeCrawl, 45000);
  
  return (
    <section className='star-wars'>
      <button 
        className='stop-crawl'
        onClick={closeCrawl}
      >Exit</button>
      <div className='crawl'>
        <h4>{crawlInfo.crawl}</h4>
        <div className='title'>
          <p>{crawlInfo.title}</p>
          <p>Release date: {crawlInfo.release_date}</p>
        </div>
      </div>
    </section>
  );
};

OpeningCrawl.propTypes = {
  crawlInfo: PropTypes.object.isRequired,
  closeCrawl: PropTypes.func.isRequired
};

export default OpeningCrawl;