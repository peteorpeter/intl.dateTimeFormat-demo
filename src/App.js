import './App.css';
import Nav from "./Nav";
import RelativeTimeFormat from "./RelativeTimeFormat";
import DateTimeFormat from "./DateTimeFormat";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Nav />
            <div className="content">
                <Routes>
                    <Route path="/" element={<DateTimeFormat />} />
                    <Route path="date-time-format" element={<DateTimeFormat />} />
                    <Route path="relative-time-format" element={<RelativeTimeFormat />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
