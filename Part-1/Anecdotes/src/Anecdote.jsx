const Anecdote = ({text, votes}) => {
    return (
        <>
            <div> {text} </div>
            <div>has {votes} votes</div>
        </>
    )
}

export default Anecdote