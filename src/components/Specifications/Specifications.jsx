import './Specifications.scss'
import classNames from 'classnames'

const Specifications = (props) => {
  const { items = [] } = props

  return (
    <div className="specifications">
      <dl className="specifications__list">
        {items.map((item, index) => (
          <div
            className={classNames('specifications__item', {
              'specifications__item--wide': item.isWide,
            })}
            key={index}
          >
            <dt className="specifications__key">{item.key}</dt>
            <dd className="specifications__value">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default Specifications