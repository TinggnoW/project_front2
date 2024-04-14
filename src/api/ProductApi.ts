import axios from "axios";
import {GetAllProduct} from "../data/ProductData.Type.ts";

// export const getAllProduct = (handleGetAllProductData:(responseData:GetAllProduct[])=>void):void => {
//     axios.get<GetAllProduct[]>("http://localhost:8080/public/product")
//         .then((response)=>{
//             handleGetAllProductData(response.data);
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
// }

export const getAllProduct = async (): Promise<GetAllProduct[]> => {
    try {
        const apiUrl = "http://localhost:8080/public/product";
        const response = await axios.get<GetAllProduct[]>(apiUrl);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}