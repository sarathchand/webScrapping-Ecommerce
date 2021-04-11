const axios = require("axios")
const cheerio = require("cheerio")

async function test()
{


    async function fetchHTML(url) {
      const { data } = await axios.get(url)
      return cheerio.load(data)
    }
    const $ = await fetchHTML("https://www.amazon.in/s?k=iphone&i=electronics&ref=nb_sb_noss_1")
    
    
   

    //#search > div.s-desktop-width-max.s-opposite-dir > div > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(4) > div > span > div > div
    // console.log(`Site HTML: ${$.html()}\n\n`)
    //#search > div.s-desktop-width-max.s-opposite-dir > div > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row
    // // Print some specific page content
//    var links;
//     $('#search > div.s-desktop-width-max.s-opposite-dir > div > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(2) > div > span > div > div > div > div > div:nth-child(2) > div.sg-col-4-of-12.sg-col-4-of-16.sg-col.sg-col-4-of-20 > div > div > span > a > div').each( (index, value) => {
//      console.log(value);
//      });
//      console.log(links);

var b = $('#search > div.s-desktop-width-max.s-opposite-dir > div > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row').contents();
console.log(b);
    //console.log(`First h1 tag: ${$('#search > div.s-desktop-width-max.s-opposite-dir > div > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16').text()}`)
    //console.log(`First h1 tag: ${$('#search > div.s-desktop-width-max.s-opposite-dir > div > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row').attr('src')}`)
}



test();

