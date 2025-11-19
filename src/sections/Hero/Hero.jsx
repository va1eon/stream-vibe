import './Hero.scss'
import Button from '@/components/Button'

const Hero = (props) => {
  const {} = props

  const titleId = 'hero-title'
  const plyButtonTitle = 'Play Video'

  return (
    <section className="hero" aria-labelledby={titleId}>
      <div className="hero__pano">
        <div className="hero__pano-inner container">
          <button
            className="hero__play-button"
            type="button"
            aria-label={plyButtonTitle}
            title={plyButtonTitle}
          >
            <img
              className="hero__play-button-image"
              src="/play.svg"
              alt=""
              width={470} height={470} loading="lazy"/>
          </button>
        </div>
      </div>
      <div className="hero__body">
        <div className="hero__body-inner container">
          <h1 className="hero__title" aria-label={titleId}>
            The Best Streaming Experience
          </h1>
          <div className="hero__description">
            <p>
              StreamVibe is&nbsp;the best streaming experience for watching your favorite movies and shows on&nbsp;demand, anytime, anywhere. With StreamVibe, you can enjoy a&nbsp;wide variety of&nbsp;content, including the latest blockbusters, classic movies, popular&nbsp;TV shows, and more. You can also create your own watchlists, so&nbsp;you can easily find the content you want to&nbsp;watch.
            </p>
          </div>
          <Button
            className="hero__button"
            iconName="play"
            label="Start Watching Now"
            hasFillIcon
          />
        </div>
      </div>
    </section>
  )
}

export default Hero