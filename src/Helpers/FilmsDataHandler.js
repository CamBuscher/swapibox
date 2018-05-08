export default class FilmsDataHandler {
  constructor(filmsData) {
    this.data = this.cleaner(filmsData) 
  }

  cleaner(fetchedData) {
    const openingCrawlData = fetchedData.results.map(film => {
      return {
        title: film.title,
        release_date: film.release_date,
        crawl: film.opening_crawl
      }
    })

    return openingCrawlData
  }

}