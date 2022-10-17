import { styled } from '@mui/material/styles'

const Div = styled("div")(props => ({
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
        <Div>
            Menu
        </Div>
    )
}

export default ProductFilters