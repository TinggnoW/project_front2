import {useEffect, useState} from "react";
import {GetAllProduct} from "../../../data/getAllProductData.Type.ts";
import * as ProductApi from "../../../api/ProductApi.ts"
import LoadingContainer from "../../component/LoadingPage.tsx";
import {ProductCard} from "../../component/ProductCard.tsx";


export default function Index () {
    const [productDto, setProductsDto] = useState<GetAllProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await ProductApi.getAllProduct();
                setProductsDto(response);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

        return (
            <div>
                <h1>All Product</h1>
                { productDto
                        ? <ProductCard getAllProductDataList={productDto}/>
                        : <LoadingContainer/>
                }

            </div>
        )

}