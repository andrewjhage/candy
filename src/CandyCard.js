// Imports the React Library and useState hook from React and the App.css file
/** @format */
import React, {useState} from "react";
import "./App.css";
// Creates a CandyCard component that takes the candy object as a prop
const CandyCard = ({candy}) => {
    //Declares a state variable `showModal` to handle if the modal is open or closed
    const [showModal, setShowModal] = useState(false);
    // Function that opens the modal when "Calories" button is clicked
    const handleOpenModal = () => {
        setShowModal(true);
    };
    // Function that closes the modal when "Calories" button is clicked
    const handleCloseModal = () => {    
        setShowModal(false);
    };

    return (
        // JSX code for rendering the candy card
        <div className="candy-card">
            <img
                src={candy.image} // Uses the image property from the candy object
                alt={candy.name} // Uses the name property from the candy object
                style={{
                    padding: '10px 20px',
                    textAlign: 'center',
                    color: 'goldenrod',
                    background: 'beige',
                    width: '50px',
                }}
                // LINE 35 - Displays the name of the candy object
                // LINE 37 - Button that opens the modal when clicked 
                // LINE 38 - Conditional rendering of the modal that renders when true
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
// Exports the CandyCard component to be imported in other files
export default CandyCard;
