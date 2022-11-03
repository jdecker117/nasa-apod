

export default function Image(props){
    const{apod} = props;

    return(
        <div className="data-container">
            <div className="apod-container">
                <img
                alt= 'photo-of-the-day'
                id='photo'
                src={apod.hdurl}
                />
            </div>
            <div id="words">
            <p>{apod.explanation}</p>
            </div>
        </div>
    )
}