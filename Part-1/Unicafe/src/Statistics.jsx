import StatisticLine from "./StatisticLine"

const Statistics = ({ statistics }) => {
    let total = statistics.good + statistics.neutral + statistics.bad

    return total > 0 ? (
        <>
            <table>
                <tbody>
                    <tr>
                        <StatisticLine text='good' value={statistics.good} />
                    </tr>
                    <tr>

                        <StatisticLine text='neutral' value={statistics.neutral} />
                    </tr>
                    <tr>
                        <StatisticLine text='bad' value={statistics.bad} />
                    </tr>
                    <tr>
                        <StatisticLine text='all' value={total} />
                    </tr>
                    <tr>
                        <StatisticLine text='average' value={((total) / 3).toFixed(2)} />
                    </tr>
                    <tr>
                        <StatisticLine text='positive' value={((statistics.good * 100) / total).toFixed(2)} >%</StatisticLine>
                    </tr>
                </tbody>
            </table>
        </>
    ) : (<><div>No feedback given</div></>)
}

export default Statistics