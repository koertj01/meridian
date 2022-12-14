import React, { useState, useEffect } from 'react'

export default function Carousel({ children, props }) {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    const delay = 2000

    setTimeout(async () => {
      try {
        const res = await fetch('http://localhost:8080')
        const data = await res.json()
        console.log(data.message)
        setImageUrl(data.message)
      } catch (e) {
        console.error('Problem loading image', e)
      }
    }, delay)
  }, [imageUrl])

  return (
    <div>
      <img src={'http://localhost:8080' + imageUrl}></img>
    </div>
  )
}
