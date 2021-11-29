import React from "react"
import { Route } from "react-router-dom"
import { ProductList } from "./products/product"
import { LocationList } from "./locations/location"
import { EmployeeForm } from "./employees/employeeForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/products">
                <ProductList />
            </Route>
            <Route exact path="/locations">
                <LocationList />
            </Route>
            <Route exact path="/employees">
                <EmployeeForm />
            </Route>
            
        </>
    )
}