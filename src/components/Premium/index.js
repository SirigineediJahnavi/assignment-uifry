import './index.css'

const Premium=(props)=>{
    const {content}=props
    const {head,imageUrl,text}=content
    return(
        <div>
            <div className="rowalignment">
                <img src={imageUrl} alt="star" className="image"/>
                <h3>{head}</h3>
            </div>
            <p>{text}</p>
        </div>
    )
}
export default Premium