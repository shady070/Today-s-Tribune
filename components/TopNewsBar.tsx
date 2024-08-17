'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton } from "@/components/ui/skeleton"; 

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
  const [selectedArticleIndex, setSelectedArticleIndex] = useState<number>(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/getNews');
        const articles = response.data.articles.slice(0, 4); 
        setNews(articles);
        if (articles.length > 0) {
          onArticleSelect(articles[0].urlToImage, articles[0].title, articles[0].description, articles[0].url);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleArticleClick = (index: number, article: Article) => {
    setSelectedArticleIndex(index);
    onArticleSelect(article.urlToImage, article.title, article.description, article.url);
  };

  return (
    <div className='py-[20px] flex flex-wrap md:justify-center'>
      {loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className='w-[290px] mr-[14px]'>
              <Skeleton className='h-[24px] w-full mb-[6px]' /> 
              <Skeleton className='h-[18px] w-[150px] mb-[6px]' /> 
            </div>
          ))
        : news.map((article, index) => (
          <div
            key={index}
            onClick={() => handleArticleClick(index, article)}
            className={`cursor-pointer transition-all duration-300 ${
              selectedArticleIndex === index ? 'font-bold' : ''
            }`}
          >
            <h1
              className={`text-[16px] text-black w-[290px] mr-[14px] ${
                selectedArticleIndex === index ? 'text-xl' : 'text-base'
              } transition-all duration-300`}
            >
              {article.title}
            </h1>
            <p className='pt-[6px] text-[14px] text-[#1E1E1E]'>
              {article.publishedAt}
            </p>
            <hr
              className={`w-[290px] mt-[6px] mb-[6px] md:mb-[0px] border-black ${
                selectedArticleIndex === index ? 'border-[3px]' : 'border-[1.5px]'
              } transition-all duration-300`}
            />
          </div>
        ))}
    </div>
  );
};

export default TopNewsBar;