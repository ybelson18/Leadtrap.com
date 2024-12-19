import fs from 'fs';
import path from 'path';

const WAITLIST_FILE = path.join(process.cwd(), 'data', 'waitlist.json');

// Ensure the data directory exists
if (!fs.existsSync(path.dirname(WAITLIST_FILE))) {
  fs.mkdirSync(path.dirname(WAITLIST_FILE), { recursive: true });
}

// Initialize waitlist file if it doesn't exist
if (!fs.existsSync(WAITLIST_FILE)) {
  fs.writeFileSync(WAITLIST_FILE, JSON.stringify([], null, 2));
}

export async function addToWaitlist(email: string) {
  try {
    // Read existing entries
    const entries = JSON.parse(fs.readFileSync(WAITLIST_FILE, 'utf-8'));
    
    // Add new entry
    const newEntry = {
      email,
      timestamp: new Date().toISOString()
    };
    
    // Check if email already exists
    if (!entries.some((entry: any) => entry.email === email)) {
      entries.push(newEntry);
      // Write back to file
      fs.writeFileSync(WAITLIST_FILE, JSON.stringify(entries, null, 2));
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    throw new Error('Failed to add to waitlist');
  }
}
