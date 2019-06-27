import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>nps_widget Demo</h1>
      <Example logo="https://ucarecdn.com/cf519751-fee2-484b-b797-5c3b01ab73c1/doopoll_powered_logo.svg" tabletop="https://docs.google.com/spreadsheets/d/1v86IiII0m78o0mAdqv-DhGGJ0lIuVOJP78zrgrW2F4w/edit?usp=sharing"/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
