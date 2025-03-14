import React from "react";
import { DescriptionPanel } from "../../components/descriptionPanel/DescriptionPanel";
import { ImageBanner } from "../../components/imageBanner/ImageBanner";
import "./About.scss";
import { Banner } from "../../components";
import aboutPicture from '../../assets/aboutpicture.png';


export function About() {
  return (
    <>
      <Banner imageBackground={aboutPicture}/>
      <div className="about__container">
        <DescriptionPanel title="Fiabilité" content="Lorem ipsum integer." />
        <DescriptionPanel title="Respect" content="Lorem ipsum dolor sit aliquam." />
        <DescriptionPanel title="Service" content="Lorem ipsum dolor sitt." />
        <DescriptionPanel title="Responsabilité" content="Lorem ipsum dolor sit viverra." />
      </div>
    </>
  );
}

