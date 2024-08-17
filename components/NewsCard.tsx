'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton'; 
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Article = {
  source: { id: string | null; name: string };
  title: string;
  url: string;
  image: string | null;
  publishedAt: string;
  description: string;
};

const BusinessNewsComponent = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBusinessNews = async () => {
      try {
        const response = await axios.get('/api/business-news');
        console.log('API response:', response.data); // Log the response
        setNews(response.data.articles.slice(0, 3)); // Limit to 3 articles
      } catch (error) {
        console.error('Error fetching business news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessNews();
  }, []);

  return (
    <div className='mt-[45px] lg:mt-[310px] flex flex-wrap gap-[10px] md:gap-[52px] justify-center items-center'>
      <div className='md:hidden'>
        <Carousel className='w-[300px]'>
          <CarouselContent>
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index} className='w-[320px]'>
                    <Skeleton className='w-full h-[298px] rounded-t-md' />
                    <div className='w-full bg-[#0d1117] px-[30px] py-[30px] rounded-b-md'>
                      <Skeleton className='h-[24px] w-[80%] mb-[10px]' />
                      <Skeleton className='h-[18px] w-full' />
                    </div>
                  </CarouselItem>
                ))
              : news.map((article, index) => (
                  <CarouselItem key={index} className='w-[320px]'>
                    <div className='w-full bg-[#0d1117] px-[30px] py-[30px] rounded-t-md'>
                      <h1 className='text-[20px] text-white font-georgia'>{article.title}</h1>
                      <p className='text-[#C8C8C8] text-[16px] pt-[6px] pb-[6px]'>{article.description}</p>
                      <a href={article.url} target='_blank' rel='noopener noreferrer' className='text-white'>
                        Read more
                      </a>
                    </div>
                    {article.image ? (
                      <Image
                        src={article.image}
                        alt='News Image'
                        width={320}
                        height={298}
                        layout='responsive'
                        className='rounded-b-md'
                      />
                    ) : (
                      <p className='text-white text-center'>No image available</p>
                    )}
                  </CarouselItem>
                ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Static view for larger screens */}
      <div className='hidden md:flex flex-wrap gap-[10px]'>
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className='mb-4 w-[320px]'>
                <Skeleton className='w-full h-[298px] rounded-t-md' />
                <div className='w-[320px] bg-[#0d1117] px-[30px] py-[30px] rounded-b-md'>
                  <Skeleton className='h-[24px] w-[80%] mb-[10px]' />
                  <Skeleton className='h-[18px] w-full' />
                </div>
              </div>
            ))
          : news.map((article, index) => (
              <div key={index} className='mb-4 md:w-[320px] w-full'>
                <div className='w-[320px] bg-[#0d1117] px-[30px] py-[30px] rounded-t-md'>
                  <h1 className='text-[20px] text-white font-georgia'>{article.title}</h1>
                  <p className='text-[#C8C8C8] text-[16px] pt-[6px] pb-[6px]'>{article.description}</p>
                  <a href={article.url} target='_blank' rel='noopener noreferrer' className='text-white'>
                    Read more
                  </a>
                </div>
                {article.image ? (
                  <Image
                    src={article.image}
                    alt='News Image'
                    width={320}
                    height={298}
                    layout='responsive'
                    className='rounded-b-md'
                  />
                ) : (
                  <p className='text-white text-center'>No image available</p>
                )}
              </div>
            ))}
      </div>
    </div>
  );
};

export default BusinessNewsComponent;