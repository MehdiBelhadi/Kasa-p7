import React from 'react'
import './Apartment.scss'
import { Link } from 'react-router-dom';

export function Apartment(props) {
  return (
    <Link
      to="/apartments"
      state={{
        apartmentId: props.id
      }}
    >
      <div className="apartment">
        <img src={props.imageUrl} alt="" />
        <div className="apartment__subtitle">{props.title}</div>
      </div>
    </Link>
  )
}