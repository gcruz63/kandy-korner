import React, { useEffect, useState } from "react"

export const ProductList = () =>{
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType")
                .then(res => res.json())
                .then(
                    (productsArray) => {
                        setProducts(productsArray)
                    }
                )
        },
        []
    )
    
    return (
        <>
            {
               products.slice(0, 7).map(
                   (productObj) => {
                       return <div key={`product--${productObj.id}`}>
                            <p> {productObj.productType.name}: {productObj.name}</p>
                          </div>
                   }
               ) 
            }
        </>
    )
}