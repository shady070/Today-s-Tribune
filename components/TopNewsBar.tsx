'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Article = {
  source: { id: string | null; name: string };
  title: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  description: string;
};

type TopNewsBarProps = {
  onArticleSelect: (imageUrl: string | null, headline: string, description: string, url: string) => void;
};

const TopNewsBar = ({ onArticleSelect }: TopNewsBarProps) => {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/getNews');
        setNews(response.data.articles.slice(0, 4)); // Limit to 4 articles
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleArticleClick = (article: Article) => {
    onArticleSelect(article.urlToImage, article.title, article.description, article.url);
  };

  return (
    <div className='py-[20px] flex flex-wrap justify-center'>
      {news.map((article, index) => (
        <div key={index} onClick={() => handleArticleClick(article)}>
          <h1 
            className={`text-[16px] text-black w-[290px] mr-[14px] cursor-pointer`}
          >
            {article.title}
          </h1>
          <p className='pt-[6px] text-[14px] text-[#1E1E1E]'>
            {article.publishedAt}
          </p>
          <hr className='w-[290px] mt-[6px] border-black border-[1.5px]' />
        </div>
      ))}
    </div>
  );
};

export default TopNewsBar;