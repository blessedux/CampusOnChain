// frontend/app/api/dorahacks/route.ts
import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import * as cheerio from 'cheerio';

export async function GET(req: NextRequest) {
  try {
    const response = await axios.get('https://dorahacks.io/hackathon');
    const $ = cheerio.load(response.data);

    const hackathons: any[] = [];

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

    return NextResponse.json({ hackathons });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}