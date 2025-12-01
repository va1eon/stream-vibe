import './Seasons.scss'
import AccordionGroup from '@/components/AccordionGroup'
import seasonsItems from '@/components/Seasons/seasonsItems'
import Accordion from '@/components/Accordion'
import EpisodeCard from '@/components/EpisodeCard'

const Seasons = (props) => {
  const {} = props

  return (
    <AccordionGroup
      className="seasons"
      mode="dark"
      isOrderedList={false}
    >
      {seasonsItems.map((item,  index) => (
        <Accordion
          titleLevelClassName="h4"
          title={item.title}
          subtitle={item.subtitle}
          id={`season-${index}`}
          name="seasons"
          isOpen={index === 0}
          key={index}
          isArrowButton
        >
          <ul className="seasons__list">
            {item.episodes.map((episode, index) => (
              <li className="seasons__item" key={index}>
                <EpisodeCard {...episode}/>
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons