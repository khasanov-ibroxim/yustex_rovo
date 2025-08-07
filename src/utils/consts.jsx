import Home from "@/page/home/home.jsx";
import Product from "@/page/product/product.jsx";
import Production from "@/page/production/production.jsx";
import Company from "@/page/compony/company.jsx";
import Akyus from "@/page/brands/akyus/akyus.jsx";

export const HOME = "/"
export const PRODUCTION = "/production"
export const PRODUCT = "/product"
export const COMPANY = "/company"
export const BRAND_AKYUS = "/akyus"
export const BRAND_LIBERTY = "/company"

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
    },
    {
        Path: COMPANY,
        Component: Company
    },
    {
        Path: BRAND_AKYUS,
        Component: Akyus
    }
]