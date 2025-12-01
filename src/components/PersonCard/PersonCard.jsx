import './PersonCard.scss'
import { Image } from 'minista'
import classNames from 'classnames'

const PersonCard = (props) => {
  const {
    imgSrc,
    imgAlt,
    isImgSmall = false,
    name,
    subtitle,
  } = props

  const hasBody = Boolean(name || subtitle)

  return (
    <div className="person-card">
      <Image
        className={classNames('person-card__image', {
          'person-card__image--small': isImgSmall
        })}
        src={imgSrc}
        alt={imgAlt}
        title={imgAlt}
      />
      {hasBody && (
        <div className="person-card__body">
          {name && <h4 className="person-card__name">{name}</h4>}
          {subtitle && <p className="person-card__subtitle">{subtitle}</p>}
        </div>
      )}
    </div>
  )
}

export default PersonCard