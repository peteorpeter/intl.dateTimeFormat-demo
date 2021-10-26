import './Nav.css';

function Nav({onChange, view}) {
    return (
        <nav>
            <button type="button" onClick={() => onChange('relative-time-format')}
                    className={view === 'relative-time-format' ? 'active' : ''}>RelativeTimeFormat
            </button>
            <button type="button" onClick={() => onChange('date-time-format')}
                    className={view === 'date-time-format' ? 'active' : ''}>DateTimeFormat
            </button>
        </nav>
    )
}

export default Nav
