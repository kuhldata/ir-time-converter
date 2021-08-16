# ir-time-converter

Small package translating JS Date objects to iRacing Season / Week / Day and the other way around.

## install

`npm i ir-time-converter`

## examples
Get iRacing Time for a specific Date object.
```js
const timeConverter = require('ir-time-converter');

const iRacingTime = timeConverter.dateToIRacingTime(new Date());
// {
//   year: 2021,
//   season: 3,
//   week: 9,
//   day: 6,
//   isLeapSeason: false,
//   isWeek13: false,
// }
```

Get time frame for a specific iRacing Time. (Example for season but it is possible down to a specific day)
```js
const timeConverter = require('ir-time-converter');

const timeFrame = timeConverter.iRacingSeasonToDates(2021, 3);
// {
//   start: [Object], JS Date representing the first second of the season
//   end: [Object] JS Date representing the last second of the season
// }
```

## docs

See `DOCS.md` :).

## Support
If you want to support me, I am happy to welcome you to the [kuhldata Discord](https://discord.gg/PTuZfQRWDj).