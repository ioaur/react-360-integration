import React from "react";
import { Container, MuiThemeProvider } from "@material-ui/core";
import { theme } from "./MuiTheme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTES } from "./common/constants";
import { Home } from "./components/Home";

const Root: React.FC = () => {
  const [username, setUsername] = React.useState<string>("");

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Container>
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <Home username={username} setUsername={setUsername} />
            </Route>
          </Switch>
        </Container>
      </Router>
    </MuiThemeProvider>
  );
};

export default Root;
