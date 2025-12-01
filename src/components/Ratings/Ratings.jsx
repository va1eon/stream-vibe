import './Ratings.scss'
import RatingView from '@/components/RatingView'

const Ratings = (props) => {
  const {
    items = [],
  } = props

  return (
    <div className="ratings">
      <ul className="ratings__list">
        {items.map((item, index) => (
          <li className="ratings__item" key={index}>
            <h4 className="ratings__title">{item.title}</h4>
            <RatingView value={item.ratingValue} label={item.ratingValue}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ratings