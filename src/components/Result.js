import React from 'react'
import './result.css'

function Result({winner1}) {
  return (
    <div className='result'>
          {winner1==='Circle'&&'Circle is winner'}
          {winner1==='Cross'&&'Cross is winner'}
          {winner1==='it is tie'&&'it is tie!'}
    </div>
  )
}

export default Result