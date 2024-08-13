/* eslint-disable @next/next/no-img-element */
import React from 'react';

type GazaNewsBoxProps = {
  title: string;
  description: string;
  imageUrl: string | null;
  url: string;
};

const GazaNewsBox = ({ title, description, imageUrl, url }: GazaNewsBoxProps) => {
  return (
    <div className='flex flex-col items-center border rounded-md shadow-md'>
      {imageUrl ? (
        <img className='w-[374px] h-[260px] object-cover' src={imageUrl} alt="Gaza News" />
      ) : (
        <div className='w-[374px] h-[260px] bg-gray-200 flex items-center justify-center'>
          <p>No image available</p>
        </div>
      )}
      <div className='md:w-[374px] p-[20px]'>
        <h1 className='text-[24px] font-georgia'>{title}</h1>
        <p className='text-[16px] pt-[6px]'>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className='text-blue-500'>Read more</a>
      </div>
    </div>
  );
};

export default GazaNewsBox;
