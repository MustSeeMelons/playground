import React from "react";
import { Browse } from "../browse/browse";
import { BrowserRouter, Route } from "react-router-dom";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { CategoryAdd } from "../categoryAdd/categoryAdd";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            flexGrow: 1,
            margin: "10px"
        }
    })
);

const Content: React.FC = (props) => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <BrowserRouter>
                <Route path="/" exact component={Browse} />
                <Route path="/add" component={CategoryAdd} />
            </BrowserRouter>
        </Container>
    );
}

export { Content };