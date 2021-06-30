import UserStoryIcon from '../userStoryIcon/UserStoryIcon'
import Story from './story/Story'
import Photo from '../../img/ja.jpg'
import { useState, useEffect } from 'react'
import { data } from '../../api/api'
import { StoriesContainer } from './StoriesStyles'

const Stories = props => {
    const [usersWithStories, setUsersWithStories] = useState()

    useEffect(() => {
        let stories = []
        stories = data.user.friends.filter(f => f.story)
        setUsersWithStories(stories)
    }, [])

    return (
        <StoriesContainer>
            <Story photo={Photo} main={true} />
            {
                usersWithStories && usersWithStories.map(s => (
                <Story story={s}>
                    <UserStoryIcon face={s.photo} />
                </Story>

                ))
            }

        </StoriesContainer>
    )
}

export default Stories