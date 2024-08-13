'use client'
import React, { useEffect, useState } from 'react';
import GazaNewsBox from './GazaNewsBox';
import axios from 'axios';
import { Skeleton } from '@/components/ui/skeleton'; // Import the Skeleton component

const GazaNews = () => {
  const [news, setNews] = useState<any[]>([]); // State to hold news articles
  const [loading, setLoading] = useState<boolean>(true); // State to handle loading

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/gaza-news');
        setNews(response.data.articles.slice(0, 6)); // Limit to the first 6 articles
      } catch (error) {
        console.error('Error fetching Gaza news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center mt-[20px] md:mt-[45px] md:pb-[100px] pb-[40px]'>
      <div className='flex gap-[20px] items-center pb-[20px]'>
        <h1 className='md:text-[96px] text-[30px] pb-[10px]'>War in Gaza</h1>
        <img className='w-[80px] md:w-[120px] md:h-[60px]' src="./Palestine.png" alt="Palestine Flag" />
      </div>
      {loading ? (
        <div className='flex flex-wrap justify-center gap-[20px]'>
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className='w-[374px]'>
              <Skeleton className='w-full h-[260px] rounded-md' />
              <Skeleton className='w-full h-[50px] mt-[10px]' />
              <Skeleton className='w-full h-[30px] mt-[5px]' />
            </div>
          ))}
        </div>
      ) : (
        <div className='flex flex-wrap justify-center gap-[20px]'>
          {news.map((article, index) => (
            <GazaNewsBox
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage}
              url={article.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GazaNews;
