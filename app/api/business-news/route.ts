import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
      params: {
        category: 'business', 
        lang: 'en',          
        token: process.env.G_NEWS_API_KEY,
      },
    });

    console.log('Business News API response:', response.data);

    const articles = response.data.articles || []; 
    return NextResponse.json({ articles });
  } catch (error) {
    console.error('Error fetching business news:', error);
    return NextResponse.json({ message: 'Error fetching business news' }, { status: 500 });
  }
}
