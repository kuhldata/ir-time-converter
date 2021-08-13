const seasons = require('./seasons.js');

const WEEK_MS = 7*24*60*60*1000;
const DAY_MS = 24*60*60*1000;

/**
 * @typedef {Object} IRacingTime
 * @property {number} year year in iRacing
 * @property {number} season iRacing season number of this year
 * @property {number} week week number within the season Starts with 1
 * @property {number} day day within a week of the iRacing season. Carful 0 = Tuesday to 6 = Monday as the iRacing week starts on Tuesday.
 * @property {boolean} isLeepSeason Indicates if the given season is a leap season
 * @property {boolean} isWeek13 indicated if the given week is "week13" of the given season
 */

/**
 * 
 * @param {Object} date JS date for which the IRacingTime should be calculated.
 * @returns {IRacingTime} The IRacingTime for given date
 * @throws Will throw an error if the given date does not belong to any of the seasons known by the module
 */
const dateToIRacingTime = (date) => {
  throw new Error('Not yet implemented :D');
}

/**
 * @typedef {Object} TimeFrame
 * @property {Object} start - JS date of the first second of the timeframe
 * @property {Object} end - JS date of the last second of the timeframe
 */

const  getTimeFrame = ({
  year,
  season,
  week,
  weekCount = 1,
  day,
  includeWeek13 = false,
}) => {
  const seasonObject = seasons.getSeason(year, season);

  if (!seasonObject) throw new Error('Could not find data.');

  if (day && (day < 0 || day > 6)) throw new Error(`Day ${day} is not a valid number for a day.`);

  if (!week) {
    return {
      start: new Date(seasonObject.startTime),
      end: includeWeek13 ? new Date(seasonObject.endTime + WEEK_MS) : new Date(seasonObject.endTime),
    }
  }

  if(typeof day !== 'number') {
    const startTime = seasonObject.startTime + (week - 1) * WEEK_MS;
    const endTime = seasonObject.startTime + (week + weekCount - 1) * WEEK_MS - 1000;
    if(!includeWeek13 && endTime > seasonObject.endTime) throw new Error('Week 13 was excluded, but the timeframe reaches week13.');
    if(includeWeek13 && endTime > seasonObject.endTime + WEEK_MS) throw new Error('Timespan exceeds the end of the season.');
    return {
      start: new Date(startTime),
      end: new Date(endTime),
    }
  }

  const dayStartTime = seasonObject.startTime + (week - 1) * WEEK_MS + day * DAY_MS;
  const dayEndTime = seasonObject.startTime + (week - 1) * WEEK_MS + (day + 1) * DAY_MS - 1000;
  if(!includeWeek13 && dayEndTime > seasonObject.endTime) throw new Error('Week 13 was excluded, but the timeframe reaches week13.');
  if(includeWeek13 && dayEndTime > seasonObject.endTime + WEEK_MS) throw new Error('Timespan exceeds the end of the season.');
    
  return {
    start: new Date(dayStartTime),
    end: new Date(dayEndTime),
  }
};

/**
 * Returns the start and the end date of the iRacing season. It uses the regular iRacing seasons.
 * @param {number} year year of the iRacing season
 * @param {number} season season of the iRacing season
 * @param {boolean} [includeWeek13=false] should week 13 be included within the resulting timeframe?
 * @returns {TimeFrame} Timeframe spanning the given iRacing season
 * @throws Will throw an error if the given combination does not exist.
 */
const iRacingSeasonToDates = (year, season, includeWeek13 = false) => {
  return getTimeFrame({
    year,
    season,
    includeWeek13,
  });
};

/**
 * Returns the start and the end date of the iRacing week. It uses the regular iRacing seasons.
 * @param {number} year year of the iRacing season
 * @param {number} season season of the iRacing season
 * @param {number} week week of within a iRacing season
 * @param {number} [weekCount=1] how many weeks long, including the given week, should the timeframe be?
 * @param {boolean} [includeWeek13=false] should week 13 be included within the resulting timeframe?
 * @returns {TimeFrame} Timeframe spanning the given iRacing week
 * @throws Will throw an error if the given combination does not exist. Will also throw an error if timeframe reaches "week 13" without including it or when it reaches the end of the season.
 */
const iRacingWeekToDates = (year, season, week, weekCount = 1, includeWeek13 = false) => {
  return getTimeFrame({
    year,
    season,
    week,
    weekCount,
    includeWeek13,
  });
}

/**
 * Returns the start and the end date of the iRacing day. It uses the regular iRacing seasons.
 * @param {number} year year of the iRacing season
 * @param {number} season season of the iRacing season
 * @param {number} week week of within a iRacing season
 * @param {number} day day within a week of the iRacing season. Carful 0 = Tuesday to 6 = Monday as the iRacing week starts on Tuesday.
 * @param {boolean} [includeWeek13=false] should week 13 be included within the resulting timeframe?
 * @returns {TimeFrame} Timeframe spanning the given iRacing day
 * @throws Will throw an error if the given combination does not exist. Will also throw an error if timeframe reaches "week 13" without including it or when it reaches the end of the season.
 */
const iRacingDayToDates = (year, season, week, day, includeWeek13 = false) => {
  return getTimeFrame({
    year,
    season,
    week,
    day,
    includeWeek13,
  })
}

/**
 * 
 * @param {number} year the iRacing year of the season
 * @param {number} season season number with the given year
 * @param {number} includeWeek13 should "week 13" be included?
 * @returns {number} The number of weeks within the given season
 */
const getSeasonWeekCount = (year, season, includeWeek13 = false) => {
  const seasonObject = seasons.getSeason(year, season);
  if(!seasonObject)  throw new Error('Could not find data.');
  let weekCount = (seasonObject.endTime - seasonObject.startTime + 1000) / WEEK_MS;
  if (includeWeek13) weekCount++;
  return weekCount;
}

module.exports = {
  // dateToIRacingTime,
  iRacingDayToDates,
  iRacingSeasonToDates,
  iRacingWeekToDates,
  getSeasonWeekCount,
};
