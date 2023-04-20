function Details(props) {
    // console.log(props)
    return (
        <div className="parameter-details">
            <div className="parameter-row">
                <div className="label">{props.label}</div>
                <div className="value">{props.value}</div>
            </div>
            
        </div>
    )
}
export default Details;