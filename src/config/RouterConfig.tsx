import {createBrowserRouter} from "react-router-dom";
import ProductListing from "../ui/page/ProductListing";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductListing/>
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

