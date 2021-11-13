'use strict'

const axios = require(`axios`);
const BASE_URL = `http://www.google.com/transliterate`;

const options = {
    params: {
      langpair: 'ja-Hira|ja',
      text: 'えび'
    },
    method: "GET",
    url: BASE_URL,
    headers: {
      'Content-Type': `application/json`,
    }
};

axios(options)
.then((res) => {
    console.log(res.data[0][1]);
})
.catch((err) => {
    console.log(err);
});