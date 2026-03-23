import Part from './Part'

const Content = ({ parts }) => {
    return (
        <>
            <ul>
                {
                    parts.map(part => 
                    <li key={part.id}>
                        <Part part={part.name} exercises={part.exercises}/>
                    </li>)
                }
            </ul>
            <Part part={parts[0].name} exercises={parts[0].exercises} />
            <Part part={parts[1].name} exercises={parts[1].exercises} />
            <Part part={parts[2].name} exercises={parts[2].exercises} />
        </>
    )
}

export default Content