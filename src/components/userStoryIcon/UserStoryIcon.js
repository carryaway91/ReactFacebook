import { Icon, Img } from "./UserStoryIconStyles"
import { useState, useEffect } from "react"

const UserStoryIcon = props => {
    const [wasSeen, setWasSeen] = useState(false)

    useEffect(() => {
        let includes = props.seen.includes(props.storyID)
        if(!includes) {
            setWasSeen(false)
        } else {
            setWasSeen(true)
        }
    }, [props])
    
    return (
        <Icon seen={wasSeen}>
            <Img src={props.face && props.face} />
        </Icon>
    )
}



export default UserStoryIcon