import React from 'react'

export default function TimerSection({ title, timer }) {
  return (
    <section className='challenge'>
      <div>TimerSection</div>
      <p>{ title }</p>
      <p>{ timer }</p>
    </section>
  )
}
