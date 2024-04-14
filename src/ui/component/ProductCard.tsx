import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { GetAllProduct } from "../../data/getAllProductData.Type.ts";
import {ProductDialog} from "./ProductDialog.tsx";
import {useState} from "react";

type Props = {
    getAllProductDataList: GetAllProduct[] | undefined;
}

export const ProductCard = ({getAllProductDataList}:Props) => {
    const [selectedPid, setSelectedPid] = useState<string | null>(null);

    const handleOpenDialog = (pid: string) => {
        setSelectedPid(pid);
    };

    const handleCloseDialog = () => {
        setSelectedPid(null);
    };
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {getAllProductDataList && getAllProductDataList.map((product, index) => (
                <Card className="ProductCard" key={index} sx={{ maxWidth: 500, backgroundColor: 'transparent' }} onClick={() => handleOpenDialog(product.pid.toString())}>
                    <CardMedia
                        sx={{ height: 310}}
                        image={product.imageUrl ? product.imageUrl : ''}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.productName}
                        </Typography>
                    </CardContent>
                    <ProductDialog open={selectedPid !== null} product={product} handleClose={handleCloseDialog} />
                </Card>

            ))}
        </div>
    );
}
