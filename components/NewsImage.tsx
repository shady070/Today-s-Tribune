import Image from 'next/image';

type NewsImageProps = {
  imageUrl: string | null;
  headline: string;
  description: string;
  url: string;
};

const NewsImage = ({ imageUrl, headline, description, url }: NewsImageProps) => {
  if (!imageUrl) return null;

  return (
    <div className='relative md:pt-[10px] md:max-h-[80vh]'>
      <Image 
        src={imageUrl}
        alt="News Image"
        layout='responsive'
        width={1920}
        height={700}
        className="object-cover rounded-t-md md:rounded-none"
        quality={100}
      />
      <div className='md:absolute inset-0 md:ml-[84px]'>
        <div className='px-[27px] py-[11px] bg-[#0D1117] md:bg-white md:mt-[130px] md:w-[312px] md:h-[250px] md:rounded-t-md'>
          <h1 className='text-[20px] text-white md:text-black pb-[8px] md:w-[260px] font-georgia'>{headline}</h1>
          <p className='text-[16px] md:w-[260px] text-[#C8C8C8] md:text-[#0D1117]'>{description}</p>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className='md:w-[312px] h-[50px] bg-black md:bg-[#0D1117] rounded-b-md text-white font-georgia flex justify-center items-center cursor-pointer'>
            Continue Reading
          </div>
        </a>
      </div>
    </div>
  );
};

export default NewsImage;
