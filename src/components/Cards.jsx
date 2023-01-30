import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Cardsdata from './CardsData'

const Cards = () => {
  const [data, setData] = useState(Cardsdata)
  console.log(data)

  return (
    <>
      <div className='container mt-3'>
        <h2 className='text-center'>Add to Cart Projects</h2>
        <div className='row d-flex justify-content-center align-items-center'>
          {data.map((element, id) => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant='top'
                  src={element.imgdata}
                  style={{ height: '16rem' }}
                />
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Cards
