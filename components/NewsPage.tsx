'use client';
import { useState } from 'react';
import TopNewsBar from './TopNewsBar';
import NewsImage from './NewsImage';

const NewsPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [headline, setHeadline] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [selectedUrl, setSelectedUrl] = useState<string>(''); // Added this state

  const handleArticleSelect = (imageUrl: string | null, headline: string, description: string, url: string) => {
    setSelectedImage(imageUrl);
    setHeadline(headline);
    setDescription(description);
    setSelectedUrl(url);
  };

  return (
    <div>
      <TopNewsBar onArticleSelect={handleArticleSelect} />
      <NewsImage imageUrl={selectedImage} headline={headline} description={description} url={selectedUrl} />
    </div>
  );
};

export default NewsPage;