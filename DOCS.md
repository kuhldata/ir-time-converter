## Functions

<dl>
<dt><a href="#iRacingSeasonToDates">iRacingSeasonToDates(year, season, [includeWeek13])</a> ⇒ <code><a href="#TimeFrame">TimeFrame</a></code></dt>
<dd><p>Returns the start and the end date of the iRacing season. It uses the regular iRacing seasons.</p>
</dd>
<dt><a href="#iRacingWeekToDates">iRacingWeekToDates(year, season, week, [weekCount], [includeWeek13])</a> ⇒ <code><a href="#TimeFrame">TimeFrame</a></code></dt>
<dd><p>Returns the start and the end date of the iRacing week. It uses the regular iRacing seasons.</p>
</dd>
<dt><a href="#iRacingDayToDates">iRacingDayToDates(year, season, week, day, [includeWeek13])</a> ⇒ <code><a href="#TimeFrame">TimeFrame</a></code></dt>
<dd><p>Returns the start and the end date of the iRacing day. It uses the regular iRacing seasons.</p>
</dd>
<dt><a href="#getSeasonWeekCount">getSeasonWeekCount(year, season, includeWeek13)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#dateToIRacingTime">dateToIRacingTime(date)</a> ⇒ <code><a href="#IRacingTime">IRacingTime</a></code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#IRacingTime">IRacingTime</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TimeFrame">TimeFrame</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="iRacingSeasonToDates"></a>

## iRacingSeasonToDates(year, season, [includeWeek13]) ⇒ [<code>TimeFrame</code>](#TimeFrame)
Returns the start and the end date of the iRacing season. It uses the regular iRacing seasons.

**Kind**: global function
**Returns**: [<code>TimeFrame</code>](#TimeFrame) - Timeframe spanning the given iRacing season
**Throws**:

- Will throw an error if the given combination does not exist.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| year | <code>number</code> |  | year of the iRacing season |
| season | <code>number</code> |  | season of the iRacing season |
| [includeWeek13] | <code>boolean</code> | <code>false</code> | should week 13 be included within the resulting timeframe? |

<a name="iRacingWeekToDates"></a>

## iRacingWeekToDates(year, season, week, [weekCount], [includeWeek13]) ⇒ [<code>TimeFrame</code>](#TimeFrame)
Returns the start and the end date of the iRacing week. It uses the regular iRacing seasons.

**Kind**: global function
**Returns**: [<code>TimeFrame</code>](#TimeFrame) - Timeframe spanning the given iRacing week
**Throws**:

- Will throw an error if the given combination does not exist. Will also throw an error if timeframe reaches "week 13" without including it or when it reaches the end of the season.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| year | <code>number</code> |  | year of the iRacing season |
| season | <code>number</code> |  | season of the iRacing season |
| week | <code>number</code> |  | week of within a iRacing season |
| [weekCount] | <code>number</code> | <code>1</code> | how many weeks long, including the given week, should the timeframe be? |
| [includeWeek13] | <code>boolean</code> | <code>false</code> | should week 13 be included within the resulting timeframe? |

<a name="iRacingDayToDates"></a>

## iRacingDayToDates(year, season, week, day, [includeWeek13]) ⇒ [<code>TimeFrame</code>](#TimeFrame)
Returns the start and the end date of the iRacing day. It uses the regular iRacing seasons.

**Kind**: global function
**Returns**: [<code>TimeFrame</code>](#TimeFrame) - Timeframe spanning the given iRacing day
**Throws**:

- Will throw an error if the given combination does not exist. Will also throw an error if timeframe reaches "week 13" without including it or when it reaches the end of the season.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| year | <code>number</code> |  | year of the iRacing season |
| season | <code>number</code> |  | season of the iRacing season |
| week | <code>number</code> |  | week of within a iRacing season |
| day | <code>number</code> |  | day within a week of the iRacing season. Carful 0 = Tuesday to 6 = Monday as the iRacing week starts on Tuesday. |
| [includeWeek13] | <code>boolean</code> | <code>false</code> | should week 13 be included within the resulting timeframe? |

<a name="getSeasonWeekCount"></a>

## getSeasonWeekCount(year, season, includeWeek13) ⇒ <code>number</code>
**Kind**: global function
**Returns**: <code>number</code> - The number of weeks within the given season

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| year | <code>number</code> |  | the iRacing year of the season |
| season | <code>number</code> |  | season number with the given year |
| includeWeek13 | <code>number</code> | <code>false</code> | should "week 13" be included? |

<a name="dateToIRacingTime"></a>

## dateToIRacingTime(date) ⇒ [<code>IRacingTime</code>](#IRacingTime)
**Kind**: global function
**Returns**: [<code>IRacingTime</code>](#IRacingTime) - The IRacingTime for given date
**Throws**:

- Will throw an error if the given date does not belong to any of the seasons known by the module


| Param | Type | Description |
| --- | --- | --- |
| date | <code>Object</code> | JS date for which the IRacingTime should be calculated. |

<a name="IRacingTime"></a>

## IRacingTime : <code>Object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| year | <code>number</code> | year in iRacing |
| season | <code>number</code> | iRacing season number of this year |
| week | <code>number</code> | week number within the season Starts with 1 |
| day | <code>number</code> | day within a week of the iRacing season. Carful 0 = Tuesday to 6 = Monday as the iRacing week starts on Tuesday. |
| isLeepSeason | <code>boolean</code> | Indicates if the given season is a leap season |
| isWeek13 | <code>boolean</code> | indicated if the given week is "week13" of the given season |

<a name="TimeFrame"></a>

## TimeFrame : <code>Object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| start | <code>Object</code> | JS date of the first second of the timeframe |
| end | <code>Object</code> | JS date of the last second of the timeframe |