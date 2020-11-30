import React, { useEffect, useState } from "react";
import "./News.css";
import { NewsCard } from "../../Components";
import { useSelector } from "react-redux";
const News = () => {
  const [articles, setArticles] = useState(null);
  const [selectedCat, setSelectedCat] = useState(
    useSelector((state) => state.category)
  );
  const news = useSelector((state) => state.news);
  const category = useSelector((state) => state.category);
  useEffect(() => {
    //  news is a pending promise
    news?.then((new_) => {
      setArticles(new_);
      return setSelectedCat(new_?.section);
    });
    //
    // setSelectedCat(category);
  }, [news, category]);

  console.log(articles);
  return (
    <div className="news">
      <h1>{selectedCat}</h1>
      <div className="news__container">
        {articles?.results?.map((news_article, index) => {
          return <NewsCard key={index} news_article={news_article} />;
        })}
      </div>
    </div>
  );
};
export default News;
