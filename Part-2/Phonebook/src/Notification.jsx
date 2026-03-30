import './Notification.css'

const Notification = ({ messageNotification }) => {
    return (
        <>
            <div className='notification'>{messageNotification}</div>
        </>
    )
}

export default Notification