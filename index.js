const request = require('request');
const cheerio = require('cheerio');

var url = "https://www.reddit.com/top";

request(url, function(err,res,html){
  if(!err){
    var $ = cheerio.load(html);
    var allitems = $("#2x-container").text();
    console.log(allitems);
  }
});
