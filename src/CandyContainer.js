/**  @format */
import CandyCard from "./CandyCard";
import candy from "./candyData";
const CandyContainer = () => {
    return (
        <div className="candy_container">
            {candy.map((candy, index) =>(
                <CandyCard key={index} candy={candy}/>
            ))}
        </div>
    );
};
export default CandyContainer;