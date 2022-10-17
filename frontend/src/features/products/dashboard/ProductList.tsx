import { Grid } from "@mui/material"
import { observer } from "mobx-react-lite"
import { useStore } from "../../../stores/store"
import ProductListCard from "./ProductListCard/ProductListCard"

const ProductList = () => {
    const { productStore: { productList } } = useStore()

    return (
        <>
            {productList.map((product, i) => (
                <Grid item key={i} justifyContent="center">
                    <ProductListCard product={product} />
                </Grid>
            ))}
        </>
    )
}

export default observer(ProductList)