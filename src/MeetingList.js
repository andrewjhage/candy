/**  @format */
import MeetingCard from "./MeetingCard";
import meetings from "./meetingData";
const MeetingList = () => {
    return (
        <div className="meetings_container">
            {meetings.map((meeting, index) =>(
                <MeetingCard key={index} meeting={meeting}/>
            ))}
        </div>
    );
};
export default MeetingList;