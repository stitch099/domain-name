const { parse } = require('node-html-parser');
const axios = require('axios');

let domainNameUrl = 'https://alter.com/blog/top-domain-name-sales'
const main = async () => {
    axios.get('https://alter.com/blog/top-domain-name-sales').then(response=>{
        // console.log(response.data)
        let htmlText =  response.data;
        
        // TODO parse logic 
        let document = parse(htmlText);
        let arr = [...document.querySelectorAll('table.table > tbody > tr')].map(e=>e.children[1]).map(s=>s.replaceAll(/\.\w+/g,""));
        console.log(arr);
    });

    //  try {
    //   let response = await fetch("https://alter.com/blog/top-domain-name-sales", requestOptions) 
    //   let result = await response.json()
    //   console.log(`result.value is ${result.USD.last}`)
    // } catch (error) {
    //   console.log('error', error)
    // }
};

main();