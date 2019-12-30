const data = require('../../../raw.json');

const processRaw = () => {
  let processed = [];
  data.forEach(entry => {
    const date = entry.date.split('-');
    let newEntry = {
      year: Number(date[0]),
      month: Number(date[1]),
      day: Number(date[2]),
      mood: entry.mood
    };
    processed.push(newEntry);
  })
  return processed;
}

export default processRaw;