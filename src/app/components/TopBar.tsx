'use client';

import React, { useState, useEffect } from 'react';
import './topBar.css';

export default function TopBar() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Limpeza do event listener ao desmontar o componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scroll]);

    return (
        <div
            id="topbar"
            className={`d-flex align-items-center fixed-top ${scroll > 100 ? 'topbar-scrolled' : undefined
                }`}
        >
            <div className="container d-flex justify-content-center justify-content-md-between">
                {/* <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-phone me-2"></i>
                    <span>(41) 99573-1633</span>
                    <span className="ms-2">| Curitiba, Paraná</span> 
                </div> */}

                <div className="languages d-md-flex align-items-center ms-4">
                    <ul style={{ display: "flex", gap: "5px", padding: 0, margin: 0, listStyle: "none" }}>
                            <a href="#">
                                <img
                                    src="/assets/images/idioma/brasil.png"
                                    alt="Logo Glauber"
                                    style={{ width: "20px", height: "13px" }}
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="/assets/images/idioma/eua.jpg"
                                    alt="Logo Glauber"
                                    style={{ width: "20px", height: "13px" }}
                                />
                            </a>
                    </ul>
                </div>
            </div>
        </div>
    );

}
