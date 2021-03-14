//Base Url
const base_url = "https://api.rawg.io/api/";

//Get current date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;

    if (month < 10) {
        return `0${month}`
    } else {
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();

    if (day < 10) {
        return `0${day}`
    } else {
        return day;
    }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?key=${process.env.REACT_APP_GAMES_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_GAMES_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${process.env.REACT_APP_GAMES_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//All games
export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;

//Single game details
export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}`;

//Searching 
export const searchGameUrl = (game_name) => `${base_url}games?search=${game_name}&page_size=9`;