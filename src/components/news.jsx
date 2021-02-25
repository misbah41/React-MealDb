
import React, { useState, useEffect } from 'react'
import './user.css';

export default function NewsApp() {
  const [newses, setNewses] = useState([])

  const url = `https://newsapi.org/v2/everything?q=Apple&from=2021-02-24&sortBy=popularity&apiKey=0fdcbc64feb04f319f81849076c64a00`;
  const req = new Request(url)
  const getNews = () => {
    fetch(req)
      .then(res => res.json())
      .then(data => setNewses(data.articles))
      .catch(err => {
        alert('Something Went Wrong Please Try Again')
      });
  };

  useEffect(() => {
    getNews()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="row justify-content-center mt-5">
        <h2 className="text-center">Apple News</h2>
        {
          newses.map(news => <div className="col-sm-6 col-md-4"> <div className="news-card">
            <News title={news.title} author={news.author} description={news.description} publishedAt={news.publishedAt} url={news.url} urlToImage={news.urlToImage} />
          </div> </div>)
        }
      </div>
    </>
  )
}

const News = (props) => {
  return (
    <>
      <a className="anchor-a" href={props.url} target="_blank" rel="noreferrer">
        <h6>{props.title}</h6>
        <small>Author : {props.author}</small>
        <p>{props.description}</p>
        <small>Date : {props.publishedAt}</small>
        <img src={props.urlToImage} alt="Imag Not foumd" /></a>
    </>
  )
}