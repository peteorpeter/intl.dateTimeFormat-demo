import './App.css';
import {useState} from "react";

const LOCALE_OPTIONS = ['en-US', 'en-UK', 'es', 'de', 'fr', 'ja-JP', 'zh-CN', 'ar', 'ru'];
const LOCALE_MATCHER_OPTIONS = ['best fit', 'lookup'];
const NUMERIC_OPTIONS = ['always', 'auto'];
const STYLE_OPTIONS = ['long', 'short', 'narrow'];
const UNIT_OPTIONS = ['second', 'minute', 'hour', 'day', 'month', 'quarter', 'year'];
const VALUE_OPTIONS = ['-10', '-1', '1', '10'];

function Picker({label, value, options, onChange}) {
    return <div className="picker">
        <label htmlFor={label}>{label}</label>
        <select id={label} onChange={onChange} value={value}>
            {options.map((o) => <option value={o}>{o}</option>)}
        </select>
    </div>
}

function App() {
    const [locale, setLocale] = useState('es');
    const [localeMatcher, setLocaleMatcher] = useState('best fit');
    const [numeric, setNumeric] = useState('always');
    const [style, setStyle] = useState('long');
    const [unit, setUnit] = useState('day');
    const [value, setValue] = useState('1');

    const rtf = new Intl.RelativeTimeFormat(locale, {localeMatcher, numeric, style});

    return (
        <div className="App">
            <header className="App-header">
                <h1>Intl.RelativeTimeFormat</h1>
                <h2>Options:</h2>
                <div className="pickers">
                    <Picker label="Locale" value={locale} options={LOCALE_OPTIONS}
                            onChange={(e) => setLocale(e.target.value)}/>
                    <Picker label="Locale Matcher" value={localeMatcher} options={LOCALE_MATCHER_OPTIONS}
                            onChange={(e) => setLocaleMatcher(e.target.value)}/>
                    <Picker label="Numeric" value={numeric} options={NUMERIC_OPTIONS}
                            onChange={(e) => setNumeric(e.target.value)}/>
                    <Picker label="Style" value={style} options={STYLE_OPTIONS} onChange={(e) => setStyle(e.target.value)}/>
                    <Picker label="Unit" value={unit} options={UNIT_OPTIONS} onChange={(e) => setUnit(e.target.value)}/>
                    <Picker label="Value" value={value} options={VALUE_OPTIONS} onChange={(e) => setValue(e.target.value)}/>
                </div>
                <h2>Display:</h2>
                <p className="display">{rtf.format(parseFloat(value), unit)}</p>
                <h2>Code:</h2>
                <pre lang="javascript">
          {
`const rtf = new Intl.RelativeTimeFormat("${locale}", { 
  localeMatcher: "${localeMatcher}", 
  numeric: "${numeric}", 
  style: "${style}",
});

rtf.format(${value}, ${unit}); // ${rtf.format(parseFloat(value), unit)}`}
                </pre>

            </header>
        </div>
    );
}

export default App;
