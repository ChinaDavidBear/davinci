import * as React from 'react'
import ScrollablePivot from './index'
import { IPivotProps } from './Pivot'

interface IPivotInVizStates {
  pivotProps: IPivotProps
}

export class PivotInViz extends React.Component<IPivotProps, IPivotInVizStates> {
  constructor (props) {
    super(props)
    this.state = {
      pivotProps: {
        data: [],
        cols: [],
        rows: [],
        metrics: [],
        filters: [],
        chartStyles: {},
        queryParams: [],
        cache: false,
        expired: 300,
        orders: []
      }
    }
  }

  public componentDidMount () {
    this.renderPivot(this.props)
  }

  public componentWillReceiveProps (nextProps) {
    this.renderPivot(nextProps)
  }

  private renderPivot = (props) => {
    if (props.data.length) {
      this.setState({
        pivotProps: {...props}
      })
    }
  }

  public render () {
    return (
      <ScrollablePivot {...this.state.pivotProps} />
    )
  }
}

export default PivotInViz
