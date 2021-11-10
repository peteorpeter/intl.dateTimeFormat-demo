import './App.css';
import {useState} from "react";
import Picker from "./Picker";

function simpleNumericOptions() {
    return ["numeric", "2-digit"]
}

function longShortNarrow() {
    return ["long", "short", "narrow"]
}

const LOCALE_OPTIONS = ['default', 'en-US', 'en-UK', 'es', 'de', 'fr', 'ja-JP', 'zh-CN', 'ar', 'ru'];
const LOCALE_MATCHER_OPTIONS = ['best fit', 'lookup'];
const DATE_STYLE_OPTIONS = ['full', 'long', 'medium', 'short', undefined];
const TIME_STYLE_OPTIONS = ['full', 'long', 'medium', 'short', undefined];
const CALENDAR_OPTIONS = ["buddhist", "chinese", "coptic", "ethiopia", "ethiopic", "gregory", " hebrew", "indian", "islamic", "iso8601", " japanese", "persian", "roc"];
const NUMBERING_SYSTEM_OPTIONS = ["arab", "arabext", " bali", "beng", "deva", "fullwide", " gujr", "guru", "hanidec", "khmr", " knda", "laoo", "latn", "limb", "mlym", " mong", "mymr", "orya", "tamldec", " telu", "thai", "tibt"];
const TIMEZONE_OPTIONS = ["Asia/Shanghai", "Asia/Kolkata", "America/New_York", "America/Chicago"]
const WEEKDAY_OPTIONS = longShortNarrow().concat([undefined]);
const ERA_OPTIONS = longShortNarrow().concat([undefined]);
const YEAR_OPTIONS = simpleNumericOptions().concat([undefined]);
const MONTH_OPTIONS = longShortNarrow().concat(simpleNumericOptions()).concat([undefined]);
const DAY_OPTIONS = simpleNumericOptions().concat([undefined]);
const DAY_PERIOD_OPTIONS = longShortNarrow().concat([undefined]);;
const HOUR_OPTIONS = simpleNumericOptions().concat([undefined]);
const MINUTE_OPTIONS = simpleNumericOptions().concat([undefined]);
const SECOND_OPTIONS = simpleNumericOptions().concat([undefined]);
const FRACTIONAL_SECOND_OPTIONS = ['0', '1', '2', '3', undefined];
const TIMEZONE_NAME_OPTIONS = ['long', 'short', 'shortOffset', 'longOffset', 'shortGeneric', 'longGeneric', undefined];

function DateTimeFormat() {
    const [locale, setLocale] = useState('es');
    const [localeMatcher, setLocaleMatcher] = useState('best fit');
    const [dateStyle, setDateStyle] = useState('long');
    const [timeStyle, setTimeStyle] = useState('long');
    const [calendar, setCalendar] = useState('iso8601');
    const [numberingSystem, setNumberingSystem] = useState('latn');
    const [timeZone, setTimeZone] = useState('America/Chicago');
    const [hour12, setHour12] = useState(false);

    const [weekday, setWeekday] = useState('');
    const [era, setEra] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [dayPeriod, setDayPeriod] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [second, setSecond] = useState('');
    const [fractionalSecond, setFractionalSecond] = useState('');
    const [timeZoneName, setTimeZoneName] = useState('');

    const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
    const options = {
        localeMatcher,
        dateStyle,
        timeStyle,
        calendar,
        dayPeriod,
        numberingSystem,
        timeZone,
        hour12,
        weekday,
        era,
        year,
        month,
        day,
        hour,
        minute,
        second,
        fractionalSecond,
        timeZoneName,
    }

    Object.entries(options).forEach(entry => {
        const [key, value] = entry;
        if (value === ''){
            delete options[key];
        }
    });

    let display = '';
    let errorMessage = '';
    try {
        display = new Intl.DateTimeFormat(locale, options).format(date);
    } catch(err) {
        errorMessage = err.message;
    }

    return (
        <div className="DateTimeFormat">
            <h1>Intl.DateTimeFormat</h1>
            <h2>Options:</h2>
            <div className="pickers">
                <Picker label="Locale" value={locale} options={LOCALE_OPTIONS} onChange={setLocale}/>
                <Picker label="Locale Matcher" value={localeMatcher} options={LOCALE_MATCHER_OPTIONS} onChange={setLocaleMatcher}/>
                <Picker label="Calendar" value={calendar} options={CALENDAR_OPTIONS} onChange={setCalendar}/>
                <Picker label="Numbering System" value={numberingSystem} options={NUMBERING_SYSTEM_OPTIONS} onChange={setNumberingSystem}/>
                <Picker label="Timezone" value={timeZone} options={TIMEZONE_OPTIONS} onChange={setTimeZone}/>
                <div className="picker"><label>Hour 12</label>
                    <button type="button" onClick={() => setHour12(!hour12)}>
                        {String(hour12)}
                    </button>
                </div>
                <Picker label="Date Style" value={dateStyle} options={DATE_STYLE_OPTIONS} onChange={setDateStyle}/>
                <Picker label="Time Style" value={timeStyle} options={TIME_STYLE_OPTIONS} onChange={setTimeStyle}/>
                <hr />
                <Picker label="Weekday" value={weekday} options={WEEKDAY_OPTIONS} onChange={setWeekday}/>
                <Picker label="Era" value={era} options={ERA_OPTIONS} onChange={setEra}/>
                <Picker label="Year" value={year} options={YEAR_OPTIONS} onChange={setYear}/>
                <Picker label="Month" value={month} options={MONTH_OPTIONS} onChange={setMonth}/>
                <Picker label="Day" value={day} options={DAY_OPTIONS} onChange={setDay}/>
                <Picker label="Day Period" value={dayPeriod} options={DAY_PERIOD_OPTIONS} onChange={setDayPeriod}/>
                <Picker label="Hour" value={hour} options={HOUR_OPTIONS} onChange={setHour}/>
                <Picker label="Minute" value={minute} options={MINUTE_OPTIONS} onChange={setMinute}/>
                <Picker label="Second" value={second} options={SECOND_OPTIONS} onChange={setSecond}/>
                <Picker label="Fractional Second" value={fractionalSecond} options={FRACTIONAL_SECOND_OPTIONS} onChange={setFractionalSecond}/>
                <Picker label="Timezone Name" value={timeZoneName} options={TIMEZONE_NAME_OPTIONS} onChange={setTimeZoneName}/>
            </div>
            <h2>Display:</h2>
            {display &&  <p className="display">{display}</p>}
            {errorMessage &&  <p className="error">{errorMessage}</p>}
            <h2>Code:</h2>
            <pre lang="javascript">
{`const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
const options = ${JSON.stringify(options, null, 2)};
new Intl.DateTimeFormat(locale, options).format(date); // ${display}`}
            </pre>
        </div>
    );
}

export default DateTimeFormat;
