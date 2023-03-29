import { Grid, Col } from '@tremor/react'
import CardDisplay from './CardDisplay'
import ColorProps from './ColorProps'
import DeckInfo from './DeckInfo'
import DeckLoad from './DeckLoad'
import LandProps from './LandProps'
import ManaCurve from './ManaCurve'

function DeckDisplayAll() {
  return (
    <div>
      <Grid numColsLg={8} className="gap-6 mt-6">
        <Col numColSpanLg={1}></Col>
        <Col numColSpanLg={1}>
          <div className="space-y-6">
            <DeckLoad />
            <CardDisplay />
          </div>
        </Col>
        <Col numColSpanLg={3}>
          <DeckInfo />
        </Col>

        {/* KPI sidebar */}
        <Col numColSpanLg={2}>
          <div className="space-y-6">
            <ColorProps />
            <LandProps />
            <ManaCurve />
          </div>
        </Col>
      </Grid>
    </div>
  )
}

export default DeckDisplayAll
