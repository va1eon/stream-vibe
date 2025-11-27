import './MovieBanner.scss'
import MovieBannerCard from '@/components/MovieBannerCard'

const MovieBanner = () => {
  const titleId = 'movie-banner-title'
  const title = 'Kantara'
  const description = 'A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.'

  return (
    <section
      className="container"
      aria-labelledby={titleId}
    >
      <MovieBannerCard
        title={title}
        titleId={titleId}
        TitleTag="h1"
        description={description}
        imgSrc="/src/assets/images/movie-banner/2.jpg"
        isSmallPaddingY
      />
    </section>
  )
}

export default MovieBanner