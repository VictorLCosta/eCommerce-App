import { Box, Skeleton } from "@mui/material"

interface Props {
    imageUrl?: string
}

const ProductGallery = ({imageUrl}: Props) => {
    return (
        <div style={{width: '100%'}}>

            {imageUrl ? (
                <img style={{objectFit: 'cover', width: '100%', height: '50rem'}} src={imageUrl} />
            ) : (
                <Skeleton variant="rectangular" width='100%' height='50rem' />
            )}

            <Box>
                
            </Box>

        </div>
    )
}

export default ProductGallery