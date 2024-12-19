import { google } from 'googleapis';

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const API_KEY = process.env.GOOGLE_API_KEY;

export async function addToWaitlist(email: string) {
  // Log environment variables (but mask most of the API key)
  const maskedApiKey = API_KEY ? `${API_KEY.slice(0, 6)}...${API_KEY.slice(-4)}` : 'undefined';
  console.log('Environment check:', {
    email,
    sheetId: SHEET_ID,
    apiKeyPresent: !!API_KEY,
    maskedApiKey
  });

  if (!SHEET_ID || !API_KEY) {
    console.error('Missing credentials:', { 
      hasSheetId: !!SHEET_ID, 
      hasApiKey: !!API_KEY 
    });
    throw new Error('Missing required Google credentials');
  }

  try {
    console.log('Initializing Google Sheets API');
    const sheets = google.sheets({ 
      version: 'v4', 
      auth: API_KEY
    });

    console.log('Preparing request to append to sheet');
    const request = {
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A:B',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[email, new Date().toISOString()]]
      }
    };
    console.log('Request details:', request);

    console.log('Sending request to Google Sheets API');
    const response = await sheets.spreadsheets.values.append(request);

    console.log('Response received:', response.data);
    return response.data;
  } catch (error) {
    console.error('Detailed Google Sheets API error:', {
      name: error.name,
      message: error.message,
      stack: error.stack,
      response: error.response?.data,
      status: error.response?.status,
      config: error.config
    });
    throw error;
  }
}
