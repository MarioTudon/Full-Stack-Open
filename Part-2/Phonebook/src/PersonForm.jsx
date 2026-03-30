
const PersonForm = ({ addName, newPerson, setNewPerson }) => {
    return (
        <>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newPerson.name} onChange={e => setNewPerson(prev => ({ ...prev, name: e.target.value }))} />
                </div>
                <div>
                    number: <input value={newPerson.number} onChange={e => setNewPerson(prev => ({ ...prev, number: e.target.value }))} />
                </div>
                <button type="submit">add</button>
            </form>
        </>
    )
}

export default PersonForm