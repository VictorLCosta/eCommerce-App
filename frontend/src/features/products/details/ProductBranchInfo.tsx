import { Grid, Paper } from "@mui/material"
import { useStore } from './../../../stores/store';
import { useEffect } from 'react';
import ProductBranchInfoPlaceholder from "./placeholders/ProductBranchInfoPlaceholder";
import { observer } from "mobx-react-lite";

interface Props {
    branchId?: string
}

const ProductBranchInfo = ({ branchId }: Props) => {
    const { branchStore: { currentBranch, loading, clearCurrentBranch, loadBranch } } = useStore();

    useEffect(() => {
        if (branchId) loadBranch(branchId);
        return () => clearCurrentBranch();
    }, [branchId, currentBranch, clearCurrentBranch])

    return (
        <Paper 
            sx={{ 
                width: '100%', 
                padding: '1.5rem' 
            }}
        >
            {loading ? (
                <ProductBranchInfoPlaceholder />
            ) : (
                <Grid container spacing={2}>
                    <Grid container item>
                        
                    </Grid>
                    <Grid container item>

                    </Grid>
                </Grid> 
            )}
        </Paper>
    )
}

export default observer(ProductBranchInfo)