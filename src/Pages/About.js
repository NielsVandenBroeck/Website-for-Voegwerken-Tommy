import React from 'react';
import "./About.css";
import { FaCheck } from 'react-icons/fa';

function About() {
    return (
        <section className="about-section">
            <h2 className="about-title">Wie we zijn</h2>
            <div className="about-content">
                <div className="about-checklist">
                    <h3 className="about-subtitle">Tommy Van den Broeck</h3>
                    <h4 className="checklist-title">Enkele weetjes</h4>
                    <ul className="checklist">
                        <li className="checklist-item">
                            <FaCheck className="check-icon" />
                            <p className="check-item-text">Voegwerken Tommy gelegen te Putte is vertrouwd in het voegen van uw nieuwbouw- en renovatieproject.</p>
                        </li>
                        <li className="checklist-item">
                            <FaCheck className="check-icon" />
                            <p className="check-item-text">Ook kleine laswerken worden aangeboden.</p>
                        </li>
                        <li className="checklist-item">
                            <FaCheck className="check-icon" />
                            <p className="check-item-text">Samen met Johan garanderen we een perfect afgewerkt project.</p>
                        </li>
                    </ul>
                </div>
                <div className="about-picture"></div>
            </div>
        </section>
    );
}

export default About;
