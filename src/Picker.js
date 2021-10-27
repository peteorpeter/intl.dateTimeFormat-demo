function Picker({label, value, options, onChange}) {
    return <div className="picker">
        <label htmlFor={label}>{label}</label>
        <select id={label} onChange={(e) => onChange(e.target.value || undefined)} value={value}>
            {options.map((o) => <option key={o} value={o}>{o || undefined}</option>)}
        </select>
    </div>
}

export default Picker;
