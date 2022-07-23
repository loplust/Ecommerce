import React from 'react'
import DATA from '../Data'
import CardItem from './CardItem'
const Product = () => {

  return (
    <div>
      <div className="container py-5">
      	<div className="row">
        <div className="col-12">
          <h1>Product</h1>
          <hr/>
        </div>
      	</div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {DATA.map((cardItem)=>
						<CardItem {...cardItem} key={cardItem.id}/>
					)}
        </div>
      </div>
    </div>
  )
}

export default Product