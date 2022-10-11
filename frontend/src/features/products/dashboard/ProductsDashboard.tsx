import { Grid } from "@mui/material"
import { useEffect } from "react";
import { useStore } from "../../../stores/store";
import ProductFilters from "./ProductFilters";
import ProductList from "./ProductList";

const ProductDashboard = () => {
    const { productStore: { loadProducts, productRegistry } } = useStore()

    useEffect(() => {
        if (productRegistry.size <= 1) loadProducts();
    }, [productRegistry.size, loadProducts])

    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <ProductFilters />
            </Grid>
            <Grid item xs={9}>
                <ProductList />
            </Grid>
        </Grid>
    )
}

export default ProductDashboard