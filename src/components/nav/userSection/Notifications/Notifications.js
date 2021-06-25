import Notification from "./Notification/Notification"

const Notifications = () => {
    return (
        <div>

        <div style={{ padding: '1rem 1rem 0 1rem'}}>
            <h2 style={{ margin: '0 0 1rem 0'}}>Notifications</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h3 style={{ margin: '.5rem 0'}}>New</h3>
                <span style={{ color: '#1877f2', cursor: 'pointer'}}>See All</span>
            </div>
        </div>
            <div style={{ padding: '0rem .5rem'}}>
                <Notification /> 
                <Notification /> 
                <Notification /> 
                <Notification /> 
                <Notification /> 
                <Notification /> 
                <Notification /> 
                <Notification /> 
            </div>
        </div>
    )
}

export default Notifications