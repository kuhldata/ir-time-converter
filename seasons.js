const START_TIME = 1544486400000;
const START_YEAR = 2019;
const START_SEASON = 1;

const leepSeasons = [ 20203 ];

const WEEK_MS = 7*24*60*60*1000;
const SEASON_MS = WEEK_MS * 13;


module.exports.getSeason = (year, season) => {
  if(year < 2019) throw new Error('Years before 2019 are not supported yet.');
  if(season < 1 || season > 4) throw new Error(`Season Number ${season} is not valid. Only 1-4 are possible`);

  const leepCheck = year * 10 + season;
  const leepSeasonCount = leepSeasons.filter((v) => v < leepCheck).length;
  const leepSeasonEndCount = leepSeasons.filter((v) => v <= leepCheck).length;

  const startTime = START_TIME + (year - START_YEAR) * 4 * SEASON_MS + (season - START_SEASON) * SEASON_MS + leepSeasonCount * WEEK_MS;
  const endTime = START_TIME + (year - START_YEAR) * 4 * SEASON_MS + (season - START_SEASON) * SEASON_MS + leepSeasonEndCount * WEEK_MS + SEASON_MS - 1000 - WEEK_MS;
  
  const isLeepSeason = leepSeasonCount < leepSeasonEndCount;

  return {
    year,
    season,
    startTime,
    endTime,
    isLeepSeason,
  }


}