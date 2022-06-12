import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

import NewsItem from './NewsItem'


const NewsList = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {

    const getArticles = async () => {
      const response = await axios.get('https://newsapi.org/v2/everything?q=stunting&from=2022-05-08&sortBy=publishedAt&apiKey=ee3303314c7e4386a09e9dabb12d2b2f')
      console.log(response)
      setArticles(response.data.articles)
    }
    getArticles()
  }, [])



  return (
    <Fragment>
      {articles.map(data => (
        <NewsItem
          key={data.id}
          title={data.title}
          description={data.description}
          url={data.url}
          urlToImage={data.urlToImage}
        />
      ))}
    </Fragment>
  )
}

export default NewsList
