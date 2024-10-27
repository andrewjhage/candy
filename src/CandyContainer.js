// Imports CandyCard component and candy data
/**  @format */
import CandyCard from "./CandyCard";
import candy from "./candyData";
/* Creates a CandyContainer component that maps through 
the candy data and renders a CandyCard component for each candy object */
const CandyContainer = () => {
    return (
        // JSX code for rendering the candy container
        <div className="candy_container">
            {candy.map((candy, index) =>(
                <CandyCard key={index} candy={candy}/>
            ))}
        </div>
    );
};
// Exports the CandyContainer component to be imported in other files
export default CandyContainer;
