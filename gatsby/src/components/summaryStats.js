import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./layout.css";
import 'typeface-roboto';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const getAverages = data => {
  console.log("Getting avgs for ", data)
  const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
  let all = [];
  let byDay = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: []
  };
  let byDayAvgs = [];
  data.forEach(entry => {
    if (typeof(entry[0]) !== 'string') {
      let date = new Date(entry[0], entry[1]-1, entry[2]);
      let day = date.getDay(); // Sunday is 0
      let mood = entry[3];
      all.push(mood);
      byDay[day].push(mood);
    }
  })
  for (let day in byDay) {
    if (byDay[day].length > 0) {
      byDayAvgs.push(arrAvg(byDay[day]));
    } else {
      byDayAvgs.push(null);
    }
  }
  return {
    overallAvg: arrAvg(all),
    byDay: byDayAvgs
  };
}

const findMinMax = (arr, min) => {
  let bestMatch;
  let ind;
  let day;
  arr.forEach(function (v, i) {
    if (!bestMatch) {
      bestMatch = v;
      ind = i;
    } else if (min && v < bestMatch) {
      bestMatch = v;
      ind = i;
    } else if (!min && v > bestMatch) {
      bestMatch = v;
      ind = i;
    }
  })
  const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  }
  return [bestMatch, days[ind]]
}

const SummaryStats = ({ data }) => {
  const classes = useStyles();
  const { overallAvg, byDay } = getAverages(data);
  const minimum = findMinMax(byDay, true);
  const maximum = findMinMax(byDay, false);

  return (
    <>
      <CardContent>
        <Typography color="textPrimary" variant="h2" component="h2">
          {overallAvg.toFixed(2)}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Avg. Mood
        </Typography>
        <Typography color="textPrimary" variant="h2" component="h2">
          {maximum[0].toFixed(2)}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`Avg. on Best Day (${maximum[1]})`}
        </Typography>
        <Typography color="textPrimary" variant="h2" component="h2">
          {minimum[0].toFixed(2)}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`Avg. on Worst Day (${minimum[1]})`}
        </Typography>
      </CardContent>
      </>
  )
}

export default SummaryStats
