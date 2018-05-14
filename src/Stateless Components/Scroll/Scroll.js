import React from 'react';

const Scroll = (props) => {
  if (props.openingCrawl.length) {
    const randomCrawlIndex = Math.floor((Math.random() * 6) + 1)
    const randomOpeningCrawl = props.openingCrawl[randomCrawlIndex]
    return (
      <div className="scroll">
          <h2>{randomOpeningCrawl.title} </h2> 
          <p> {randomOpeningCrawl.opening_crawl} </p>
      </div>  
    )
  } else {
    return <div> i'm loading </div>
  }
}


export default Scroll