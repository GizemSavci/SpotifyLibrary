import "../assets/trackheader.css";

function TrackHeader(props){
    return (
        <div className="track-header">
            <h3>{props.name}</h3>
        </div>
    )
}

export default TrackHeader;