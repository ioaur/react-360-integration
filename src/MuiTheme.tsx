import { createMuiTheme, Theme } from "@material-ui/core/styles";

export const theme: Theme = createMuiTheme({
    palette: {
        primary: { main: "#1d1732" },
        secondary: { main: "#04b074" },
    },
    typography: {
        button: {
            textTransform: "none",
        },
    },
});
