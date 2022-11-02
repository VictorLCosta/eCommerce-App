import { Grid } from "semantic-ui-react";
import { useParams } from "react-router-dom"
import { useStore } from './../stores/store';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import ProductGallery from "../features/products/details/ProductGallery";
import ProductInfo from '../features/products/details/ProductInfo';
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
            <Grid container stackable>

                <Grid.Column computer={7}>
                    <ProductGallery imageUrl={currentProduct?.pictureUrl} />
                </Grid.Column>
                <Grid.Column computer={9}>
                    <ProductInfo product={currentProduct} />
                </Grid.Column>

                <Grid.Column computer={16}>
                    <ProductBranchInfo branchId={currentProduct?.branchId} />
                </Grid.Column>


                <Grid.Column computer={13}>
                    <ProductDescription product={currentProduct} />
                </Grid.Column>
                <Grid.Column computer={3}>
                    <ProductsFromBranch />
                </Grid.Column>
                <Grid.Column computer={13}>
                    <ProductReviews />
                </Grid.Column>

            </Grid>
        </>
    )
}

export default observer(ProductDetails)