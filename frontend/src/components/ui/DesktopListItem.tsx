import { ListItemButton, ListItemText } from "@mui/material"

interface Props {
    text: string,
    divider?: boolean,
    padding: string,
    fontSize: string,
    fontWeight: 500 | 600 | 700
}

const DesktopListItem = ({ text, divider, padding, fontSize, fontWeight }: Props) => {
    return (
        <ListItemButton divider={divider} style={{padding: padding, cursor: 'pointer'}}>
            <ListItemText primary={text} primaryTypographyProps={{ fontSize: fontSize, fontWeight: fontWeight }} />
        </ListItemButton>
    )
}

export default DesktopListItem