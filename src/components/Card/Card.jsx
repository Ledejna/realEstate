import React from "react";

const Card = (props) => {
    return ( 
        <div>
            <img src={props.image} alt="" />
            <h5 className="text-[18px] font-bold mt-[24px] mb-[8px]">{props.title}</h5>
            <p>
              {props.text}
            </p>
        </div>
     );
}
 
export default Card;