const Total = ({ parts }) => {
    const total = parts.reduce((acc, part) => acc + part.exercises, 0)
    return (
        <>
            <div>Total of {total} exercises</div>
        </>
    )
}

export default Total