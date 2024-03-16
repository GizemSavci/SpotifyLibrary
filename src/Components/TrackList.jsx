import Track from "./Track";

function TrackList(props){
    return (
        <div className="track-list">
            {props.tracks.map(track => (
                <Track key={track.id} name={track.name} artist={track.artist} />
            ))}
        </div>
    )
}

export default TrackList;