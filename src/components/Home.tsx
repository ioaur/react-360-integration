import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

interface HomeProps {
  username: string;
  setUsername: (username: string) => void;
}

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <div className={classes.textContainer}>test test</div>
    </Container>
  );
};
