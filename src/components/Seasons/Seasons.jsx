import './Seasons.scss'
import AccordionGroup from '@/components/AccordionGroup'
import seasonsItems from '@/components/Seasons/seasonsItems'
import Accordion from '@/components/Accordion'

const Seasons = (props) => {
  const {} = props

  return (
    <AccordionGroup
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam.
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons