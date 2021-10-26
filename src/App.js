import './App.css';
import {useState} from "react";
import Nav from "./Nav";
import RelativeTimeFormat from "./RelativeTimeFormat";
import DateTimeFormat from "./DateTimeFormat";

function App() {
    const [view, setView] = useState('relative-time-format');

    return (
        <div className="App">
            <Nav view={view} onChange={(view)=> setView(view)} />
            {view === 'relative-time-format' && <RelativeTimeFormat />}
            {view === 'date-time-format' && <DateTimeFormat />}
        </div>
    );
}

export default App;
