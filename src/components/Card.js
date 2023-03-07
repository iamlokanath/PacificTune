import React from 'react'
import cardimg from "./srk.jpg"
import './Card.css'
const Card = () => {
  return (
    <>


      <div className="pacificresponsive">
        <div className="pacificgallery">
          <a target="_blank" href="image/srk.jpg">
            <img src={cardimg} alt="Cinque Terre" style={{ width: "600", height : "400"}}/>
          </a>
          <div className="pacificdesc">Add a pacificdescription of the image here</div>
        </div>
      </div>
      
      <div className="pacificresponsive">
        <div className="pacificgallery">
          <a target="_blank" href="image/srk.jpg">
            <img src={cardimg} alt="Cinque Terre" style={{ width: "600", height : "400"}}/>
          </a>
          <div className="pacificdesc">Add a pacificdescription of the image here</div>
        </div>
      </div>
      
      <div className="pacificresponsive">
        <div className="pacificgallery">
          <a target="_blank" href="image/srk.jpg">
            <img src={cardimg} alt="Cinque Terre" style={{ width: "600", height : "400"}}/>
          </a>
          <div className="pacificdesc">Add a pacificdescription of the image here</div>
        </div>
      </div>
      
      <div className="pacificresponsive">
        <div className="pacificgallery">
          <a target="_blank" href="image/srk.jpg">
            <img src={cardimg} alt="Cinque Terre" style={{ width: "600", height : "400"}}/>
          </a>
          <div className="pacificdesc">Add a pacificdescription of the image here</div>
        </div>
      </div>


      <div className="clearfix"></div>

    </>
  )
}

export default Card
