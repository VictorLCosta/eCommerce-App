import { Paper, Skeleton, Typography } from "@mui/material"
import { Product } from "../../../models/product"

interface Props {
    product?: Product 
}

const ProductDescription = ({ product }: Props) => {
    const style = {
        width: '100%',
        padding: '1.5rem',
        fontSize: '1.5rem'
    }

    return (
        <Paper sx={style}>
            <Typography variant="h4" marginBottom='1.5rem'>
                Product Description
            </Typography>
            
            {product ? (
                    <p>{product.description}</p>
            ) : (
                    <Skeleton />
            )}
        </Paper>
    )
}

export default ProductDescription