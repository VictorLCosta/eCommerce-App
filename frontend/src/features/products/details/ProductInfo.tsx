import { Button, Header, Placeholder, Rating, Segment } from "semantic-ui-react"
import { Product } from "../../../models/product"

interface Props {
    product?: Product
}

const ProductInfo = ({product}: Props) => {
    const segmentStyle = {
        border: 'none', 
        boxShadow: 'none'
    };

    return (
        <Segment.Group style={segmentStyle}>
            <Segment basic secondary>
                {product ? (
                    <Header as={'h1'} style={{ color: 'var(--onyx)' }}>{product.name}</Header>
                ) : (
                    <Placeholder fluid>
                        <Placeholder.Header>
                            <Placeholder.Line />
                        </Placeholder.Header>
                    </Placeholder>
                )}
            </Segment>
            <Segment.Group horizontal size="big" style={segmentStyle}>
                {product ? (
                    <>
                        <Segment compact>
                            <Rating defaultRating={2} maxRating={5} />
                        </Segment>
                        <Segment compact>
                            {Math.floor(Math.random() * (500 - 9 + 1) + 9)} avaliações
                        </Segment>
                        <Segment compact>
                            {Math.floor(Math.random() * (2000 - 100 + 1) + 100)} vendidos
                        </Segment>
                    </>
                ) : (
                    <Placeholder>

                    </Placeholder>
                )}
            </Segment.Group>

            <Segment.Group horizontal style={segmentStyle}>
                <Segment.Inline>
                    <Button size="massive" basic color="pink" icon="cart plus" content="Add to cart" />
                </Segment.Inline>
                <Segment.Inline>
                    <Button size="massive" className="buy-now-btn" content="Buy now" />
                </Segment.Inline>
            </Segment.Group>
        </Segment.Group>
    )
}

export default ProductInfo