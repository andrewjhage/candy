/** @format */
import React, {useState} from "react";
import "./App.css";

const CandyCard = ({candy}) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {    
        setShowModal(false);
    };

    return (
        <div className="candy-card">
            <img
                src={candy.image}
                alt={candy.name}
                style={{
                    padding: '10px 20px',
                    textAlign: 'center',
                    color: 'goldenrod',
                    background: 'beige',
                    width: '50px',
                }}
            />
            <h3>{candy.name}</h3>

            <button onClick={handleOpenModal}>Calories</button>
            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h4>Candy Information</h4>
                        <p>{candy.chocolate}</p>
                        <p>{candy.ingredients}</p>
                        <p>{candy.calories}</p>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
            </div>
    );
};

export default CandyCard;