import React from 'react'
import { NavLink } from 'react-router-dom'
const CardItem = (props) => {
  return (
    <>
    <div className="card my-5 py-4" style={{width: '18rem'}}>
				<img src={props.img} className="card-img-top" alt={props.title}/>
				<div className="card-body text-center">
					<h5 className="card-title">{props.title}</h5>
					<p className="lead">${props.price}</p>
					<NavLink to={`/products/${props.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
				</div>
			</div>
    </>
  )
}

export default CardItem