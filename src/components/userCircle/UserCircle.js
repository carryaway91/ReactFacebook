import { useState, useEffect, useContext } from 'react'
import { PhotoContainer, Img, OnlineCircle } from './UserCircleStyles'
import { Link } from 'react-router-dom'
import { StoryContext } from '../../context/StoryContext'

const UserCircle = props => {
    const { usersWithStories, handleStoriesSeen } = useContext(StoryContext)

    const [wasSeen, setWasSeen] = useState(false)
    
    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem('seen')))
        let arrayOfSeen = JSON.parse(localStorage.getItem('seen'))
        if(arrayOfSeen == null) {
            arrayOfSeen = []
        } 

        let includes = arrayOfSeen.includes(props.storyID && props.storyID.id)
        if(  includes === null || !includes) {
            setWasSeen(false)
        
        } else {
            setWasSeen(true)
        }
    }, [props])

    const handleClicked = (e, id) => {
        e.stopPropagation()
        handleStoriesSeen(id)
    }


    return (
        <PhotoContainer>
            { 
                props.storyID ? (<Link to={`/story/${props.storyID.id}`}>
                    <Img size={props.size} onClick={(e) => handleClicked(e, props.storyID.id)} src={props.photo} width={props.w} height={props.w} seen={wasSeen} hasStory={props.storyID ? true : false} />
                </Link>
                ) 
                :
                <Img size={props.size} src={props.photo} width={props.w} height={props.w} seen={wasSeen} hasStory={props.storyID ? true : false} />
            }
            { props.online && <OnlineCircle withoutStory={props.withoutStory} size={props.size} online={props.storyID && props.storyID} />}
        </PhotoContainer>
    )
}


export default UserCircle