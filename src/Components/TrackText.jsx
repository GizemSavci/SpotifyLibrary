import "../assets/tracktext.css"

function TrackText(props){
    return (
        <div className="track-text">
            <p>{props.artist}</p>
        </div>
    )
}

export default TrackText;