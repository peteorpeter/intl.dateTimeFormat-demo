function Picker({label, value, options, onChange}) {
    return <div className="picker">
        <label htmlFor={label}>{label}</label>
        <select id={label} onChange={onChange} value={value}>
            {options.map((o) => <option value={o}>{o}</option>)}
        </select>
    </div>
}

export default Picker;
