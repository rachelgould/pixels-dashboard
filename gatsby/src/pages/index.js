import React from "react"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo";
import 'typeface-roboto';
import processRaw from '../utils/data';
import Timeline from "../components/timelineChart";
import SummaryStats from "../components/summaryStats";
import BarChart from "../components/barChart";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const IndexPage = () => {
  const { separatedDates, combinedDates } = processRaw();
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Home" />
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              {combinedDates ? <Timeline data={combinedDates} /> : <p>Loading...</p>}
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              {separatedDates ? <SummaryStats data={separatedDates} /> : <p>Loading...</p>}
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs>
            <Paper className={classes.paper}>
              {separatedDates ? <BarChart data={separatedDates} /> : <p>Loading...</p>}
            </Paper>
          </Grid>
          {/* <Grid item xs={6}>
            <Paper className={classes.paper}></Paper>
          </Grid> */}
        </Grid>
      </div>
    </Layout>
  )
}

export default IndexPage
