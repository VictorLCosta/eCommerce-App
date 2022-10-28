import { Box, Divider, Rating, Skeleton, Typography } from "@mui/material"
import { Product } from "../../../models/product"

interface Props {
    product?: Product
}

const ProductInfo = ({product}: Props) => {
    return (
        <div>
            <Typography variant='h4' color={'var(--onyx)'} fontWeight={600}>
                {product ? <>{product.name}</> : <Skeleton />}
            </Typography>
            <Box display={'flex'}>
                <Box display={'flex'}>
                    <Rating readOnly />
                    <Divider orientation="vertical" />
                </Box>
                <Box>

                </Box>
            </Box>
            <Box mt={2} p={'1.5rem'} fontSize={'2rem'} fontWeight={600} bgcolor='var(--sonic-silver)' color={'var(--black_12)'}>
                {`${product?.defaultPrice?.currency?.symbol} ${product?.defaultPrice?.amount}`}
            </Box>            
        </div>
    )
}

export default ProductInfo