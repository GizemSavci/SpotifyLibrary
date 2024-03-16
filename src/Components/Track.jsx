import TrackHeader from "./TrackHeader";
import TrackText from "./TrackText";
import "../assets/track.css";

function Track({name, artist}){
    return (
        <div className="track-container">
            <TrackHeader name={name} />
            <TrackText artist={artist} />
        </div>
    )
}

export default Track;