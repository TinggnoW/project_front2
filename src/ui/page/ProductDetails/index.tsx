import {useEffect, useState} from "react";
import * as ProductApi from "../../../api/ProductApi.ts"
import {GetProductbyId} from "../../../data/getProductbyIdData.Type.ts";


export default function ProductDetails () {
    const [getProductbyIdDto, setProductsDto] = useState<GetProductbyId>();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await ProductApi.getProductbyId("4");
                setProductsDto(response);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            { getProductbyIdDto
                // ? <ProductDialog open={true} handleClose={() => {}} getReproducibility={getProductbyIdDto} product={}/>
                // : <LoadingContainer/>
            }
        </>
    )

}