import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import {DialogTitle} from "@mui/material";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {GetAllProduct} from "../../data/getAllProductData.Type.ts";

type Props = {
    open: boolean,
    handleClose: () => void,
    product: GetAllProduct,
}

export const ProductDialog = ({open, handleClose, product}: Props) => {
    // if (!getReproducibility) {
    //     return null;
    // }

    // const { pid, productName, imageUrl, productPrice, stock, description } = getReproducibility[0];

    // const [productById, setProductById] = useState<GetProductbyId | undefined>(undefined);
    //
    // const fetchProducts = async () => {
    //     try {
    //         if (open){
    //             const response = await ProductApi.getProductbyId(product.pid.toString());
    //             // setProductById(response);
    //             open=false;
    //             return response
    //         }
    //     } catch (error) {
    //         console.error('Error fetching products:', error);
    //         throw error;
    //     }
    // };

    return (

        <Dialog open={open} onClose={handleClose}>

            <DialogTitle>
                <CancelOutlinedIcon onClick={handleClose} color="inherit"
                                    sx={{position: 'absolute', right: 20, top: 10}}
                />
            </DialogTitle>
            {product &&
                <DialogContent>

                    <img src={product.imageUrl} alt={product.productName} style={{width: '100%', marginBottom: '10px'}}/>
                    <Typography variant="body1">{product.pid}</Typography>
                    <Typography variant="body1">{product.productName}</Typography>
                    <Typography variant="body2">{product.productPrice}</Typography>
                    {/*<Typography variant="body2">{product.stock}</Typography>*/}
                    {/*<Typography variant="body2">{product.description}</Typography>*/}

                 </DialogContent>
            }
        </Dialog>
);
}




