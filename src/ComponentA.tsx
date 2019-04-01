import React from 'react'
import {
  withRouter,
  RouteComponentProps
} from 'react-router-dom'

const ComponentA: React.SFC<RouteComponentProps> = ({
  history
}) => (
  <div>
    <h1>A</h1>
    <button onClick={() => history.push('/b')}>ComponentBへ</button>
  </div>
)

export default withRouter(ComponentA)