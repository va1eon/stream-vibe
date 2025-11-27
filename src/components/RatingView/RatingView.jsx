import './RatingView.scss'

const RatingView = (props) => {
  const {value, label} = props

  const ariaLabel = `Rating: ${value} stars`

  return (
    <div
      className="rating-view"
      aria-label={ariaLabel}
      title={ariaLabel}
      style={{
        '--ratingViewValue': value
      }}
    >
      <div className="rating-view__stars">
        <img
          className="rating-view__stars-unfilled"
          src="/rating/stars-unfilled.svg"
          alt="" width="98" height="18" loading="lazy"
        />
        <img
          className="rating-view__stars-filled"
          src="/rating/stars-filled.svg"
          alt="" width="98" height="18" loading="lazy"
        />
      </div>
      {label && (
        <div className="rating-view__label">{label}</div>
      )}
    </div>
  )
}

export default RatingView