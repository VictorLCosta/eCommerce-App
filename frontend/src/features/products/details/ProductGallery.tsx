import { Placeholder } from "semantic-ui-react"

interface Props {
    imageUrl?: string
}

const ProductGallery = ({imageUrl}: Props) => {
    return (
        <div style={{width: '100%'}}>

            {imageUrl ? (
                <img style={{objectFit: 'cover', width: '100%', height: '50rem'}} src={imageUrl} />
            ) : (
                <Placeholder fluid>
                    <Placeholder.Image square />
                </Placeholder>
            )}

            

        </div>
    )
}

export default ProductGallery