import React from "react"
import { Route } from "react-router-dom"
import { ProductList } from "./products/product"
import { LocationList } from "./locations/location"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/products">
                <ProductList />
            </Route>
            <Route exact path="/locations">
                <LocationList />
            </Route>
            
        </>
    )
}