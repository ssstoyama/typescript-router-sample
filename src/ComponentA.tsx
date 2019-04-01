import React from 'react'
import {
  Link
} from 'react-router-dom'

const ComponentA: React.SFC = () => (
  <div>
    <h1>A</h1>
    <Link to="/b">ComponentBへ</Link>
  </div>
)

export default ComponentA