import React from 'react'

const button = (props) => {
  return (
    <>
        <a href="" className={`btn ${props.class}`}>{props.text}</a>
    </>
  )
}

export default button