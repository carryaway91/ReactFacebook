import UserStoryIcon from '../userStoryIcon/UserStoryIcon'
import Story from './story/Story'
import Photo from '../../img/ja.jpg'
import { useState, useEffect } from 'react'
import { data } from '../../api/api'
import { StoriesContainer } from './StoriesStyles'

const Stories = props => {
    const [usersWithStories, setUsersWithStories] = useState()
    const [seen, setSeen] = useState()

    useEffect(() => {
        let stories = []
        stories = data.user.friends.filter(f => f.story)
        setUsersWithStories(stories)
        setSeen(JSON.parse(localStorage.getItem('seen')))
    }, [])

    const handleStoriesSeen = id => {
        let seenItems = JSON.parse(localStorage.getItem('seen'))
        let isSeen = seenItems.includes(id)
        
        if(!isSeen) {
            seenItems = [
                ...seenItems,
                id
            ]
            localStorage.setItem('seen', JSON.stringify(seenItems))
        }
    }


    return (
        <StoriesContainer>
            <Story photo={Photo} main={true} />
            {
                usersWithStories && usersWithStories.map(s => (
                <Story story={s} storiesSeen={(id) => handleStoriesSeen(id)}>
                    <UserStoryIcon storyID={s.story.id} seen={JSON.parse(localStorage.getItem('seen'))} face={s.photo} />
                </Story>

                ))
            }

        </StoriesContainer>
    )
}

export default Stories