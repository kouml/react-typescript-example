import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {}
    }
  })
);

export function CardAlt() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="h3">Input</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h3">Output</Typography>
        </CardContent>{" "}
      </Card>
    </Box>
  );
}
