import { useStore } from '../../../../stores/store';
import { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { Placeholder, Segment, Grid, Button } from "semantic-ui-react";
import './ProductBranchInfo.css'

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
        <Segment padded>
            {loading ? (
                <Placeholder>
                    <Placeholder.Header image>
                        
                    </Placeholder.Header>
                </Placeholder>
            ) : (
                <Grid divided>
                    <Grid.Column computer={6}>
                        <div className='branch-info'>
                            <div className='branch-image-showcase'>
                                <img src={'/assets/placeholder.png'} alt={currentBranch?.name} />
                            </div>
                            <div className='branch-main-info'>
                                <h2>{currentBranch?.name}</h2>
                                <div className="actions">
                                    <Button
                                        color='orange'
                                        content="Chat now"
                                        size='big'
                                        icon="talk"
                                        basic 
                                    />
                                    <Button 
                                        content="View store page"
                                        size='big'
                                        icon="home"
                                        basic
                                    />
                                </div>
                            </div>
                        </div>
                    </Grid.Column>

                    <Grid.Column computer={10}>
                        <div className='branch-statistics'>
                            flembas
                        </div>
                    </Grid.Column>
                </Grid>
            )}
        </Segment>
    )
}

export default observer(ProductBranchInfo)