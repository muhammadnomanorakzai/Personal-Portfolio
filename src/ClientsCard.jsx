import React, { useEffect, useRef } from 'react';
import "./assets/clientCard.css";

const ClientsCard = (props) => {
    const clientCardRef = useRef(null);

    useEffect(() => {
        function checkClientCard() {
            if (!clientCardRef.current) return;
            const triggerPoint = (window.innerHeight / 5) * 4;
            const clientCardTop = clientCardRef.current.getBoundingClientRect().top;

            if (clientCardTop < triggerPoint) {
                clientCardRef.current.classList.add('showClientsCard');
            } else {
                clientCardRef.current.classList.remove('showClientsCard');
            }
        }

        window.addEventListener('scroll', checkClientCard);
        checkClientCard(); // Run initially

        return () => {
            window.removeEventListener('scroll', checkClientCard);
        };
    }, []);

    return (
        <div className="clientsCard" ref={clientCardRef}>
            <div className="client-info">
                <img src="./images/clientImage.png" alt="Client" className="clientImage" />
                <div className="clientCardHead">
                    <h3 className="client-name">{props.clientName}</h3>
                    <p className="client-title">{props.post}</p>
                </div>
            </div>

            <p className="clients-message">{props.message}</p>

            <div className="rating-container">
                <span className="rating-number">{props.starNumber}</span>
                <div className="stars">
                    <span className="star">{props.starIcon}</span>
                </div>
            </div>
        </div>
    );
};

export default ClientsCard;
