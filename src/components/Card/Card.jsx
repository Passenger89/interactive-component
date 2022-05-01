import React from 'react'
import '../../scss/main.scss'

const Card = ({ rating, setRating, show, setShow }) => {
  const handleSubmit = e => {
    e.preventDefault()
    if (rating) setShow(!show)
  }

  const handleClick = e => {
    setRating(e.target.value)
  }

  return (
    <div className='card'>
      <header className='header'>
        <svg
          className='card__svg'
          width='17'
          height='16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z'
            fill='#FC7614'
          />
        </svg>
        <h2 className='card__heading'>How did we do?</h2>
        <p className='card__p'>
          Please let us know how we did with your support request. All feedback is
          appreciated to help us improve our offering!
        </p>
      </header>
      <main>
        <form onSubmit={handleSubmit} className='card__form'>
          <fieldset className='form__fieldset'>
            <div className='form__radio-inputs-wrapper' role='radiogroup'>
              <div className='field'>
                <input
                  className='radio-input'
                  type='radio'
                  name='rating'
                  value='1'
                  id='1'
                  onClick={handleClick}
                />
                <label className='radio-label' htmlFor='1'>
                  1
                </label>
              </div>
              <div className='field'>
                <input
                  className='radio-input'
                  type='radio'
                  name='rating'
                  value='2'
                  id='2'
                  onClick={handleClick}
                />
                <label className='radio-label' htmlFor='2'>
                  2
                </label>
              </div>
              <div className='field'>
                <input
                  className='radio-input'
                  type='radio'
                  name='rating'
                  value='3'
                  id='3'
                  onClick={handleClick}
                />
                <label className='radio-label' htmlFor='3'>
                  3
                </label>
              </div>
              <div className='field'>
                <input
                  className='radio-input'
                  type='radio'
                  name='rating'
                  value='4'
                  id='4'
                  onClick={handleClick}
                />
                <label className='radio-label' htmlFor='4'>
                  4
                </label>
              </div>
              <div className='field'>
                <input
                  className='radio-input'
                  type='radio'
                  name='rating'
                  value='5'
                  id='5'
                  onClick={handleClick}
                />
                <label className='radio-label' htmlFor='5'>
                  5
                </label>
              </div>
            </div>
            <div>
              <button className='form__btn-submit' type='submit'>
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </main>
    </div>
  )
}

export default Card

/* <!-- Rating state start -->

  How did we do?

  Please let us know how we did with your support request. All feedback is appreciated
  to help us improve our offering!

  1 2 3 4 5

  Submit

  <!-- Rating state end -->

  <!-- Thank you state start -->

  You selected <!-- Add rating here --> out of 5

  Thank you!

  We appreciate you taking the time to give a rating. If you ever need more support,
  don’t hesitate to get in touch!

  <!-- Thank you state end -->

  */

/* https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20160317/examples/radio/radio.html */
