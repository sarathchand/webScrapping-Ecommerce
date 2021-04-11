import React, { Fragment, useState } from "react";
export default function AllProducts(props)
{
    {console.log(props.list.title)};
    return(
        // <div>
        //     hi this is {props.list[0].id}
        // </div>
   

<div class="card" style={{ width: "20em" }}>
        <img
          class="card-img-top"
          src={props.list.url}
        ></img>
        <div class="card-body">
          <h5 class="card-title">{props.list.title}</h5>
          <p>Rating : {props.list.rating} ⭐</p>
          <p>Price : {props.list.price}</p>

        
      
        </div>
      </div>

    );
}