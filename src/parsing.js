const cheerio = require('cheerio');

const parse = html => {
  const $ = cheerio.load(html);
  const $table = $('table[class="table"]');
  const $columns = $table.find('thead tr th');
  const $contents = $table.find('tbody tr');

  const columns = []; // reperesents names of each Data Fields such as Open, High, Low... in array
  const dataArr = []; // reperesents every data

  $columns.each(function(index, column){
    columns.push($(column).text())
  });

  $contents.each(function(index, content){
    const dataPerField = $(content).find('td');
    const data = {};
    columns.forEach((field, index) => {
      const content = $(dataPerField[index]).text();
      data[field] = field === 'Date' ? content : Number(content.replace(/,/g, ''));
    });
    dataArr.push(data);
  })

  return [columns, dataArr];
}

module.exports = parse;
