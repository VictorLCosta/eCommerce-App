import { FilterAltOutlined } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Divider, ListItemText, MenuItem, MenuList, Typography } from '@mui/material';
import { styled } from '@mui/material/styles'

const Main = styled("div")(props => ({
    position: 'sticky',
    display: 'block',
    width: '100%',
    background: 'var(--white)',
    border: '1px solid var(--white)',
    borderRadius: 'var(--border-radius-sm)',
    padding: '1.5rem',
    [props.theme.breakpoints.down(768)]: {
        display: 'none'
    },
    [props.theme.breakpoints.down(1024)]: {
        display: 'none'
    }
}));

const ProductFilters = () => {
    return (
        <Main>

            <Typography variant='h4' mb={2}>
                <FilterAltOutlined /> Filters
            </Typography>

            <MenuList>
                Ainda não sei o que colocar aqui :)
            </MenuList>

            <Divider sx={{ marginBottom: '2rem' }} />

            <LoadingButton
                loadingPosition="start"
                variant="outlined"
                sx={{ width: '100%', fontSize: '1.2rem' }}
            >
                Clear filters
            </LoadingButton>

        </Main>
    )
}

export default ProductFilters