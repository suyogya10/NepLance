import React from "react";
import { useState,useEffect } from "react";

export function Product(id){
    const [data, setData] = useState([]);
    const ApiHandler = async () => {
        let result = await fetch("http://localhost:8000/api/getProducts");
        result = await result.json();
        setData(result);
      };
      useEffect(() => {
        ApiHandler();
      }, []);
      const d1 = data.filter((item) => item.id === id);
      return (
            <div>
                <h1>{d1.title}</h1>
                <p>{d1.description}</p>
                <p>{d1.price}</p>
            </div>
        )

}

export default Product;