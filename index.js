const { getDateOfTwoDayBefore } = require('./src/utils')
const crawl = require('./src/crawling');
const currencyData = [{
  name: 'bitcoin',
  start: 20130428,
  end: getDateOfTwoDayBefore(),
}, {
  name: 'ethereum',
  start: 20130428,
  end: getDateOfTwoDayBefore(),
}, {
  name: 'ripple',
  start: 20130428,
  end: getDateOfTwoDayBefore(),
}]

const main = () => {
  currencyData.forEach(currency => {
    const { name, start, end } = currency;
    const url = `https://coinmarketcap.com/currencies/${name}/historical-data/?start=${start}&end=${end}`;
    crawl(name, url, end);
  })
}

main();
