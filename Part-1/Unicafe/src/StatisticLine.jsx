const StatisticLine = ({ text, value, children }) => {
    return (
        <>
            <td>{text}</td>
            <td>{value} {children}</td>
        </>
    )
}

export default StatisticLine