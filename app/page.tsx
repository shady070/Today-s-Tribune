import GazaNews from '@/components/GazaNews'
import NewsCard from '@/components/NewsCard'
import NewsPage from '@/components/NewsPage'


const page = () => {
  return (
    <main className='px-[40px]'>
      <NewsPage />
      <NewsCard />
      <GazaNews />
    </main>
  )
}

export default page