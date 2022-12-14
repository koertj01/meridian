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

/*
//Async Function
async function getImageNames() {
  try {
    const response = await fetch('/images');
    const images = await response.json();
    return images.map(image => image.name);
  } catch (error) {
    console.log(error);
  }
}

//Server Side Endpoint
const express = require('express');
const app = express();

app.get('/images', (req, res) => {
  const images = [
    {
      name: 'image1.jpg',
    },
    {
      name: 'image2.jpg',
    },
    {
      name: 'image3.jpg',
    },
  ];
  res.json(images);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
*/
