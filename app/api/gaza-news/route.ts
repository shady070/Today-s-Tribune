import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'Gaza', // Search query for news about Gaza
        apiKey: process.env.NEWS_API_KEY, // Ensure this is set in your environment variables
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json({ message: 'Error fetching news' }, { status: 500 });
  }
}