import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {GetAllProduct} from "../../data/product/getAllProductData.Type.ts";
import Box from "@mui/material/Box";

type Props = {
    getAllProductDataList: GetAllProduct[] | undefined;

}

export const ProductCard = ({getAllProductDataList}: Props) => {

    return (
        <div>
            {getAllProductDataList && getAllProductDataList.slice(0, 1).map((product, index) => (
                <Card
                    className="ProductCard"
                    key={index}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'flex',
                        boxShadow: 'none',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}

                >
                    <Box sx={{flex: 1}}>
                        <img
                            src={product.imageUrl ? product.imageUrl : ''}
                            style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        />
                    </Box>

                    <Box sx={{
                        flex: 1,
                        padding: '0 30px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'left'
                    }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.productName}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" sx={{whiteSpace: "pre-line"}}>
                            {product.description}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.productPrice}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.stock}
                        </Typography>
                    </Box>
                </Card>
            ))}
        </div>
    );
}
