import { Header, Placeholder, Segment } from "semantic-ui-react"
import { Product } from "../../../models/product"

interface Props {
    product?: Product 
}

const ProductDescription = ({ product }: Props) => {
    return (
        <Segment padded>
            <Header as={'h1'} block>
                Product Description
            </Header>
            
            {product ? (
                <p style={{fontSize: '1.5rem'}}>{product.description}</p>
            ) : (
                <Placeholder fluid>
                    <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Placeholder>
            )}
        </Segment>
    )
}

export default ProductDescription