import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import { Icon } from "@mdi/react";
import { mdiCow } from '@mdi/js'
import blue from '@material-ui/core/colors/lightBlue';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { store } from "../../store/store";
import { addCategoryActionCreator } from "../../actions/categoryActions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            flexGrow: 1,
            marginLeft: theme.spacing(2)
        }
    }),
);

const onClickTemp = () => {
    store.dispatch(addCategoryActionCreator({ id: "", title: "yes" }))
}

const Header: React.FC = () => {
    const classes = useStyles();

    return (<AppBar position="static">
        <Toolbar>
            <Icon
                path={mdiCow} title="Beefy Icon"
                size={3}
                color={blue.A100}
            />
            <Typography variant="h4" className={classes.title}>
                Beef CMS
            </Typography>
            <Button onClick={onClickTemp} color="inherit" >Login</Button>
        </Toolbar>
    </AppBar>);
}

export { Header }