import React from 'react'
import {
  withRouter,
  RouteComponentProps
} from 'react-router-dom'

type MyProps = {
  text: string
} & RouteComponentProps

const ComponentB: React.SFC<MyProps> = ({
  text,
  history
}) => (
  <div>
    <h1>B</h1>
    <p>{text}</p>
    <button onClick={() => history.push('/a')}>ComponentAへ</button>
  </div>
)

export default withRouter(ComponentB)