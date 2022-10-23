import { Grid } from "@mui/material";
import { useParams } from "react-router-dom"
import { useStore } from './../stores/store';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import ProductGallery from "../features/products/details/ProductGallery";
import ProductInfo from './../features/products/details/ProductInfo';
import ProductBranchInfo from "../features/products/details/ProductBranchInfo";
import ProductDescription from "../features/products/details/ProductDescription";
import ProductsFromBranch from "../features/products/details/ProductsFromBranch";
import ProductReviews from './../features/products/details/ProductReviews';

const ProductDetails = () => {
    const {id} = useParams<{id: string}>();
    const { productStore: { loadProduct, clearCurrentProduct, currentProduct } } = useStore()

    useEffect(() => {
        if (id) loadProduct(id);
        return () => clearCurrentProduct();
    }, [id, loadProduct, clearCurrentProduct])

    return (
        <>
            <Grid container spacing={2}>
                <Grid item lg={12} spacing={1} container>
                    <Grid item xs={12} sm={12} md={12} lg={4}>
                        <ProductGallery />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={8}>
                        <ProductInfo />
                    </Grid>
                </Grid>
                <Grid item lg={12} container>
                    <ProductBranchInfo />
                </Grid>
                <Grid item lg={12} rowSpacing={1} columnSpacing={2} container>
                    <Grid item xs={12} sm={12} md={12} lg={10}>
                        <ProductDescription />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={2}>
                        <ProductsFromBranch />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={10}>
                        <ProductReviews />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default observer(ProductDetails)