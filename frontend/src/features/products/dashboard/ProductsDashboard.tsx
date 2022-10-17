import { Grid } from "@mui/material"
import { useEffect } from "react";
import { useStore } from "../../../stores/store";
import ProductFilters from "./ProductFilters";
import ProductList from "./ProductList";

const ProductDashboard = () => {
    const { productStore: { loadProducts, productRegistry } } = useStore();

    useEffect(() => {
        if (productRegistry.size <= 1) loadProducts();
    }, [productRegistry.size, loadProducts])

    return (
        <Grid container spacing={2}>
            <Grid item sm={0} md={2} lg={3}>
                <ProductFilters />
            </Grid>
            <Grid container item justifyContent={'center'} sm={12} md={10} lg={9} spacing={2}>
                <ProductList />
            </Grid>
        </Grid>
    )
}

export default ProductDashboard