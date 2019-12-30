const data = require('../../../raw.json');

const processRaw = () => {
  let processed = [["Year", "Month", "Day", "Mood"]];
  let combinedDates = [["Date", "Mood"]]
  data.forEach(function (entry, i) {
    combinedDates.push([entry.date, entry.mood])
    const date = entry.date.split('-');
    let newEntry = [Number(date[0]), Number(date[1]), Number(date[2]), entry.mood];
    processed.push(newEntry);
  })
  console.log(processed, combinedDates)
  return {
    separatedDates: processed,
    combinedDates: combinedDates
  };
}

export default processRaw;