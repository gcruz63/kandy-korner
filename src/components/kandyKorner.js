import { LocationList } from "./locations/location"
import { ProductList } from "./products/product"

export const KandyKorner = () => {
    return(
        <>
           <h1>KandyKorner</h1> 
            <div>
                <h1>Locations</h1>
                <LocationList/>
            </div>
            <div>
                <h1>Products</h1>
                <ProductList/>
            </div>
        </>
    )
}