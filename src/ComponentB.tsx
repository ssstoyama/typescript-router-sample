import React from 'react'
import {
  withRouter,
  RouteComponentProps
} from 'react-router-dom'

type MyProps = {
  message: string
} & RouteComponentProps

const ComponentB: React.SFC<MyProps> = ({
  message,
  history
}) => (
  <div>
    <h1>B</h1>
    <p>{message}</p>
    <button onClick={() => history.push('/a')}>ComponentAへ</button>
  </div>
)

export default withRouter(ComponentB)