import { Grid } from "@mui/material"
import { observer } from "mobx-react-lite"
import { useStore } from "../../../stores/store"
import ProductListCard from "./ProductListCard/ProductListCard"

const ProductList = () => {
    const { productStore: { productList } } = useStore()

    return (
        <Grid container spacing={2}>
            {productList.map((product, i) => (
                <Grid item xs={6} md={3} key={i}>
                    <ProductListCard product={product} />
                </Grid>
            ))}
        </Grid>
    )
}

export default observer(ProductList)