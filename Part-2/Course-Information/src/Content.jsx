import Part from './Part'

const Content = ({ parts }) => {
    return (
        <>
            <ul>
                {
                    parts.map(part => <li key={part.id}><Part part={part} /></li>)
                }
            </ul>
        </>
    )
}

export default Content