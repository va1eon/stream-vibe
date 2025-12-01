import './ShowBanner.scss'
import MovieBannerCard from '@/components/MovieBannerCard'

const ShowBanner = () => {
  const titleId = 'show-banner-title'
  const title = 'Stranger Things'
  const description = 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.'

  return (
    <section className="container" aria-labelledby={titleId}>
      <MovieBannerCard
        TitleTag="h1"
        titleId={titleId}
        title={title}
        description={description}
        imgSrc="/src/assets/images/movie-banner/3.jpg"
        isSmallPaddingY
      />
    </section>
  )
}

export default ShowBanner