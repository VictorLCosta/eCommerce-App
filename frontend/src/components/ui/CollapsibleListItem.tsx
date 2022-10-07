import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, Divider, List, ListItem, ListItemText } from "@mui/material"
import { useState } from "react";

interface Props {
    itemText: string,
    fontSize: string,
    divider?: boolean,
    children: any
}

const CollapsibleListItem = ({ itemText, fontSize, divider, children }: Props) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <>
            <ListItem disablePadding onClick={handleClick} style={{cursor: 'pointer'}}>
                <ListItemText primary={itemText} primaryTypographyProps={{fontSize: fontSize, fontWeight: 600}} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} unmountOnExit>
                <List component="div" disablePadding>
                    {children}
                </List>
            </Collapse>
            {divider ? <Divider /> : null}
        </>
    )
}

export default CollapsibleListItem