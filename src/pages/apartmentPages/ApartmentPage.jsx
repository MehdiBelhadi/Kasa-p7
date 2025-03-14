import React, { useEffect, useState } from "react";
import { DescriptionPanel } from "../../components/descriptionPanel/DescriptionPanel.jsx";
import "./ApartmentPage.scss";
import { ImageBanner } from "../../components/imageBanner/ImageBanner.jsx";
import { ApartmentHeader } from "../../components/apartmentsHeader/ApartmentHeader.jsx";
import { useApartment } from "../../hooks/useApartment.jsx";

export function ApartmentPage() {
  const flat = useApartment();

  if (flat == null) return <div>Loading...</div>;
  return (
    <div className="apartment-page">
      <ImageBanner pictures={flat.pictures} />
      <ApartmentHeader flat={flat} />
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel
          title="Equipements"
          content={flat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}