import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GetAllProduct } from "../../data/ProductData.Type.ts";

type Props = {
    getAllProductDataList: GetAllProduct[] | undefined;
}

export const ProductCard = ({getAllProductDataList}:Props) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {getAllProductDataList && getAllProductDataList.map((product, index) => (
                <Card key={index} sx={{ maxWidth: 359, backgroundColor: 'transparent' }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={product.imageUrl ? product.imageUrl : ''}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.productName}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-between' }}>
                        <Button size="small">
                            <img src="src/ui/icon/more.png"/>
                        </Button>
                        <Button size="small">
                            <img src="src/ui/icon/cart.png"/>
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
}
