const axios = require('axios');
const cheerio = require('cheerio');

async function getHackathons() {
  const res = await axios.get('https://dorahacks.io/hackathon');
  const $ = cheerio.load(res.data);

  const hackathons = [];

  $('.hackathon-card').each((i, el) => {
    const title = $(el).find('.hackathon-title').text().trim();
    const location = $(el).find('.hackathon-location').text().trim();
    const desc = $(el).find('.hackathon-description').text().trim();
    let image = $(el).find('img').attr('src');
    if (image && !image.startsWith('http')) {
      image = 'https://dorahacks.io' + image;
    }
    hackathons.push({ title, location, desc, image });
  });

  return hackathons;
}

getHackathons().then(console.log).catch(console.error);