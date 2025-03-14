import React from "react";
import { Link } from "react-router-dom";
import {Navbar} from "../../components/navbar/navbar.jsx";
import {Main} from "../../components/main/Main.jsx";
import {Footer} from "../../components/footer/Footer.jsx";
import "./ErrorPageNotFound.scss";
export function ErrorPageNotFound() {
  return (
    <>
      <Navbar />
      <Main>
        <div className="error-page">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </Main>
      <Footer />
    </>
  );
}