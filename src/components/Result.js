import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Result() {
    const location = useLocation()
    console.log("location",location)
  return (
    <>
    <div>
        {location.state.email}
    </div>
    </>
  )
}
