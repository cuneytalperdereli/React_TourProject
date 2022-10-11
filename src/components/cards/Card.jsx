import "./Card.scss"
import {data} from "../../helper/data"
import Card from "../cards/Card1"
const card = () => {
  return (
    <div className="card-container">
        {data.map((item,index)=>
       <Card {...item} key={index}/>

          )}

    </div>
  )
}

export default card