import React from 'react';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Container } from '@material-ui/core';
import { Router, Route } from 'react-router-dom';
import { LandingPage } from './components/browse/browse';
import { CategoryAdd } from './components/categoryAdd/categoryAdd';
import { CategoryBrowser } from './components/categoryBrowser/categoryBrowser';
import { history } from './util/history';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%"
        },
        container: {
            flexGrow: 1,
            padding: "20px"
        }
    })
);

const Root: React.FC = () => {
    const classes = useStyles();

    return (
        <Container id="rootContainer" className={classes.root}>
            <Router history={history}>
                <Header />
                <Container id="contnet" className={classes.container}>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/add" component={CategoryAdd} />
                    <Route path="/browser" component={CategoryBrowser} />
                </Container>
                <Footer />
            </Router>
        </Container >
    );
}

export default Root;
