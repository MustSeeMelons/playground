import React from 'react';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Content } from './components/content/content';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  })
);

const Root: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}

export default Root;
