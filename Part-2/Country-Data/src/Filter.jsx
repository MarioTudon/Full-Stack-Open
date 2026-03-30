const Filter = ({ filter, setFilter }) => {
    return (
        <>
            <div className="filter-container">
                <label>Find countries</label>
                <input type="text" value={filter} onChange={e => setFilter(e.target.value)} placeholder="Type a country name..." />
            </div>
        </>
    )
}

export default Filter