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
    <div className='relative pt-[10px] max-h-[80vh]'>
      <Image
        src={imageUrl}
        alt="News Image"
        layout='responsive'
        width={1920}
        height={700}
        className="object-cover"
        quality={100}
      />
      <div className='absolute inset-0 ml-[84px]'>
        <div className='px-[27px] py-[11px] bg-white mt-[130px] w-[312px] h-[250px] rounded-t-md'>
          <h1 className='text-[20px] text-black pb-[8px] w-[260px] font-georgia'>{headline}</h1>
          <p className='text-[16px] w-[260px]'>{description}</p>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className='w-[312px] h-[50px] bg-[#0D1117] rounded-b-md text-white font-georgia flex justify-center items-center cursor-pointer'>
            Continue Reading
          </div>
        </a>
      </div>
    </div>
  );
};

export default NewsImage;