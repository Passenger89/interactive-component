import React, { useState } from 'react'
import Card from '../Card/Card'
import ThankYou from '../ThankYou/ThankYou'

const App = () => {
  const [rating, setRating] = useState(null)
  const [show, setShow] = useState(false)

  return (
    <div className='container'>
      {!show && <Card rating={rating} setRating={setRating} setShow={setShow} />}
      {show && <ThankYou rating={rating} />}
    </div>
  )
}

export default App
