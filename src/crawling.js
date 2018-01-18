const json2csv = require('json2csv');
const request = require('request');
const fs = require('fs');
const path = require('path');
const parse = require('./parsing.js');

const crawl = (currency, url, end) => {
  request(url, (err, response, html) => {
    if (err) {
      console.log('Error while fetching html data');
      return;
    }

    console.log(`Fetching ${currency} data of ${end}...`);
    const [columns, dataArr] = parse(html);
    const csv = json2csv({ data: dataArr, fields: columns });

    fs.writeFile(path.join(__dirname, `../data/${currency}.csv`), csv, { flag: 'wx' }, (err) => {
      if (err) throw err;
      console.log(`${currency} file saved well`);
    });
  })
}

module.exports = crawl;
