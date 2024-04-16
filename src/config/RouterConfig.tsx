import {createBrowserRouter} from "react-router-dom";
import Product from "../ui/page/ProductListingPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Product/>
    },
    // {
    //     path: "/product/:pid/",
    //     element: <ProductDetails/>
    // }
    // {
    //     path: "/shoppingcart",
    //     element: <ShoppingCart/>
    // },
    // {
    //     path: "/login",
    //     element: <LoginPage/>
    // },
    // {
    //     path: "/checkout/:transactionId",
    //     element: <Checkout/>
    // },
    // {
    //     path: "/thankyou",
    //     element: <ThankYou/>
    // }
])

