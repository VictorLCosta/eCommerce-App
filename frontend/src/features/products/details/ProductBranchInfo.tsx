import { useStore } from './../../../stores/store';
import { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { Placeholder, Segment, Grid } from "semantic-ui-react";

interface Props {
    branchId?: string
}

const ProductBranchInfo = ({ branchId }: Props) => {
    const { branchStore: { currentBranch, loading, clearCurrentBranch, loadBranch } } = useStore();

    useEffect(() => {
        if (branchId) loadBranch(branchId);
        return () => clearCurrentBranch();
    }, [branchId, loadBranch, clearCurrentBranch])

    return (
        <Segment 
            sx={{ 
                width: '100%', 
                padding: '1.5rem' 
            }}
        >
            {loading ? (
                <Placeholder>
                    <Placeholder.Header image>

                    </Placeholder.Header>
                </Placeholder>
            ) : (
                <Grid container>
                    <Grid.Row>
                        {currentBranch?.name}
                    </Grid.Row>
                </Grid> 
            )}
        </Segment>
    )
}

export default observer(ProductBranchInfo)