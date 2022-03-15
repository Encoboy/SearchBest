import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingCom from "../component/loadingCom";
import { makeStyles } from "@material-ui/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ReactApexChart from "react-apexcharts";
import { handelDateRate, handelProdTrendData } from "../Utils/utils";

export default function ProductTrends() {
  const classes = useStyles();
  const dispatch = useDispatch();
  let data = useSelector((state) => state.product_trends);
  let newData = useMemo(() => handelProdTrendData(data), [data]);
  useEffect(() => {
    dispatch({ type: "isShowHdSearchInput", isShowHdSeInput: true });
  });
  return (
    <div className={classes.box}>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "#faf5e9", flexGrow: 1 }}>
          <div className={classes.prod_title}>Related product trends</div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {newData.length > 0 ? (
                newData.map((item, index) => {
                  return (
                    <Grid item xs={4} sm={4} md={3} key={index}>
                      <div
                        className={classes.prod_item}
                        key={index}
                        onClick={() => {}}
                      >
                        <div className={classes.name}>{item.name}</div>
                        <div className={classes.growth}>
                          Growth {item.growth}%
                        </div>
                        <ReactApexChart
                          options={item.dataChat.options}
                          series={item.dataChat.series}
                          type="area"
                          height={150}
                        />
                        <div className={classes.date_rage}>
                          {handelDateRate(item.dateRage)}
                        </div>
                      </div>
                    </Grid>
                  );
                })
              ) : (
                <LoadingCom nums={4} />
              )}
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

const useStyles = makeStyles({
  box: {
    backgroundColor: "#faf5e9",
  },
  cente_box: {
    backgroundColor: "red",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  prod_title: {
    fontSize: "18px",
    fontWeight: 200,
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  prod_box: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  prod_item: {
    backgroundColor: "white",
    height: "250px",
    border: "1px solid lightgray",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  name: {
    fontSize: "20px",
    fontWeight: 400,
    marginLeft: "15px",
    height: "35px",
  },
  growth: { fontSize: "14px", fontWeight: 100, marginLeft: "15px" },
  date_rage: {
    height: "30px",
    fontSize: "14px",
    fontWeight: 100,
    lineHeight: "30px",
    textAlign: "center",
  },
});
