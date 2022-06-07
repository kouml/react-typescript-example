import { Box, Card, CardContent, TextField } from "@material-ui/core";

export function AnswerCard() {
  return (
    <Box>
      <Card>
        <CardContent>
          <TextField
            id="outlined-uncontrolled"
            label="Your Answer"
            defaultValue=""
            inputProps={{ style: { fontSize: 40 } }}
            InputLabelProps={{ style: { fontSize: 40 } }}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                console.log(e.target.value);
              }
            }}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
