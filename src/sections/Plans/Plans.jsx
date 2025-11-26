import './Plans.scss'
import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import planGroup from '@/sections/Plans/planGroup'
import PlanCard from '@/components/PlanCard'

const Plans = () => {

  const title = 'Choose the plan that\'s right for you'
  const description = 'Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!'

  return (
    <Section
      titleId="plans-title"
      title={title}
      description={description}
    >
      <Grid columns={3}>
        {planGroup[0].items.map((planItem, index) => (
          <PlanCard {...planItem} key={index}/>
        ))}
      </Grid>
    </Section>
  )
}

export default Plans