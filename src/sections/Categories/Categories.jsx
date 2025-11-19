import './Categories.scss'
import Section from '@/layouts/Section'
import CategoryCard from '@/components/CategoryCard'
import Slider from '@/components/Slider'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import categoryItems from './categoryItems'

const Categories = () => {
  const title = 'Explore our wide variety of categories'
  const description = 'Whether you\'re looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new'

  const sliderNavigationId = 'categories-slider-navigation'

  return (
    <Section
      titleId="categories-title"
      title={title}
      description={description}
      actions={(
        <SliderNavigation
          mode="tile"
          id={sliderNavigationId}
        />
      )}
      isActionsHiddenOnMobile
    >
      <Slider
        navigationTargetElementId={sliderNavigationId}
        isBeyondTheViewportOnMobileS
      >
        {categoryItems.map((categoryItem, index) => (
          <CategoryCard
            {...categoryItem}
            key={index}
          />
        ))}
      </Slider>
    </Section>
  )
}

export default Categories