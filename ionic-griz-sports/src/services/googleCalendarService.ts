
import { gapi } from "gapi-script";

const API_KEY = "AIzaSyCOWaNZbYVaPXqXHa-aAQ-lLUNjhxAg1HE"; // Replace with your actual API key
const CALENDAR_ID = "grizsportsproject25@gmail.com"; // Replace with your public calendar ID

export const loadPublicCalendarEvents = async () => {
    try {
        const response = await fetch(
            `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
        );
        const data = await response.json();

        console.log("Fetched events:", data); // Debugging log

        return data.items || [];
    } catch (error) {
        console.error("Error fetching calendar events:", error);
        return [];
    }
};
