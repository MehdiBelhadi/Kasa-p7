import React, { useEffect, useState } from "react";
import './ApartmentsGrid.scss'
import {Apartment} from '../../pages/apartment/Apartment.jsx'
import { useApartments } from "./../../hooks/useApartments.jsx";

export function ApartmentsGrid() {
  const apartments = useApartments();
  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <Apartment
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
          key={apartment.id}
        />
      ))}
    </div>
  )
} 