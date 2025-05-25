import Home from "@/page/home/home.jsx";
import Product from "@/page/product/product.jsx";
import Production from "@/page/production/production.jsx";

export const HOME = "/"
export const PRODUCTION = "/production"
export const PRODUCT = "/product"

export const RoutersApp = [
    {
        Path:HOME,
        Component: Home
    },
    {
        Path: PRODUCT,
        Component: Product
    },
    {
        Path: PRODUCTION,
        Component: Production
    }
]