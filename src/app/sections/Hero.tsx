'use client';

import React, { useState } from 'react';
import './hero.css';
import HeroBtn from '../components/HeroBtn';
import SectionFadeIn from '../components/SectionFadeIn';

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  const handleClick = () => {
    console.log('Clique no vídeo detectado!');
    setVideoOpen(true);
  };

  return (
    <section id="hero" className="d-flex align-items-center">
      {/* Área do vídeo / botão de play */}
      <div
        className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        {!videoOpen ? (
          <div className="play-btn" onClick={handleClick}></div>
        ) : (
          <video
            src="/assets/movies/movie-1.mp4"
            autoPlay
            controls
            className="video-open hero-video"
          />
        )}
      </div>


      {/* Container principal */}
      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <SectionFadeIn duration={3200}>
          <div className="row">
            {/* Conteúdo comentado (logo, título, botão) permanece igual */}
            {/* <div className="col-lg-8 d-flex flex-column justify-content-center">
              <div className="mb-3">
                <img
                  src="/assets/images/logo_glauber.png"
                  alt="Logo Glauber"
                  className="hero-img"
                />
              </div>
              <h2>Transformando sua ideia na capinha perfeita!</h2>
              <div className="btns mt-3">
                <HeroBtn name="Agende uma Consulta" target="contato" />
              </div>
            </div> */}
          </div>
        </SectionFadeIn>
      </div>
    </section>
  );
}
