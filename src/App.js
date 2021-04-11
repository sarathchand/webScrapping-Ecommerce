import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {data} from "./Data.js";
import { Fragment, useState } from "react";
import AllProducts from './AllProducts';



function App() {

  const [product, Setprod ] = useState(data);

  console.log(product);

  return (
<Fragment>
<div className="container ">
      <div className="row">
        <div className="col-6 col-md-4">

          <button class="btn btn-primary">
            Home
        </button>
        </div>
        <div class="col-md-8">
            <div class="input-group mb-3"> <input type="text" class="form-control input-text" placeholder="Search products...." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div class="input-group-append"> <button class="btn btn-outline-warning btn-lg" type="button"><i class="fa fa-search"></i></button> </div>
            </div>
        </div>
     
      </div>
    </div>
    <div className="container">
      { product.map((col) => <AllProducts list = {col} ></AllProducts>)} 
    </div>

</Fragment>
    
  );
}

export default App;
