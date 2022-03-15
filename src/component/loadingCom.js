import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function LoadingCom(props) {
  return (
    <>
      {Array.from(Array(props.nums)).map((_, index) => (
        <Grid item xs={4} sm={4} md={3} key={index}>
          <Stack spacing={1}>
            <Skeleton variant="text" />
            <Skeleton variant="text" width={100} />
            <Skeleton variant="rectangular" height={200} />
          </Stack>
        </Grid>
      ))}
    </>
  );
}
