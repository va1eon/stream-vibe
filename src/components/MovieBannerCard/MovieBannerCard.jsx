import './MovieBannerCard.scss'
import { Image } from 'minista'
import Button from '@/components/Button'
import classNames from 'classnames'

const MovieBannerCard = (props) => {
  const {
    title,
    titleId,
    TitleTag = 'h2',
    description,
    imgSrc,
    isSmallPaddingY = false,
  } = props

  const actionButtonProps = [
    {
      iconName: 'plus',
      label: 'Add to playlist',
    },
    {
      iconName: 'like',
      label: 'Like',
    },
    {
      iconName: 'volume',
      label: 'Mute',
    },
  ]

  return (
    <div className="movie-banner-card">
      <Image
        className="movie-banner-card__image"
        src={imgSrc}
      />
      <div
        className={classNames('movie-banner-card__inner', {
          'movie-banner-card__inner--small-padding-y': isSmallPaddingY,
        })}
      >
        <div className="movie-banner-card__body">
          <TitleTag
            className="movie-banner-card__title h3"
            id={titleId}
          >
            {title}
          </TitleTag>
          <div className="movie-banner-card__description hidden-mobile">
            <p>{description}</p>
          </div>
        </div>
        <footer className="movie-banner-card__footer">
          <Button
            className="movie-banner-card__play-button"
            iconName="play"
            hasFillIcon
            label="Play Now"
          />
          <div className="movie-banner-card__actions">
            {actionButtonProps.map((buttonProps, index) => (
              <Button
                {...buttonProps}
                isLabelHidden
                mode="black-06"
                key={index}
              />
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MovieBannerCard