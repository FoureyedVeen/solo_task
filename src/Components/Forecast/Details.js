export default function Details(props) {
    // console.log(props)
    return (
        <div className="parameter-container">
            <div className="parameter-row">
                <image></image>
                <h3 >{props.value}</h3>
                <span >{props.parameter}</span>
            </div>
            
        </div>
    )
}