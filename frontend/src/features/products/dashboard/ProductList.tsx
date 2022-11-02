import { Grid } from "semantic-ui-react"
import { observer } from "mobx-react-lite"
import { useStore } from "../../../stores/store"
import ProductListCard from "./ProductListCard/ProductListCard"

const ProductList = () => {
    const { productStore: { productList } } = useStore()

    return (
        <Grid relaxed>
            {productList.map((product, i) => (
                <Grid.Column key={i} mobile={16} tablet={8} computer={4}>
                    <ProductListCard product={product} />
                </Grid.Column>
            ))}
        </Grid>
    )
}

export default observer(ProductList)