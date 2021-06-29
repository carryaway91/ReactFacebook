import UserStoryIcon from '../userStoryIcon/UserStoryIcon'
import Story from './story/Story'
import Photo from '../../img/ja.jpg'
import { useState, useEffect } from 'react'
import { data } from '../../api/api'

const Stories = props => {
    const [usersWithStories, setUsersWithStories] = useState()

    useEffect(() => {
        let stories = []
        stories = data.user.friends.filter(f => f.story)
        setUsersWithStories(stories)
    }, [])

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem', marginBottom: '1rem'}}>
            <Story photo={Photo} main={true} />
            {
                usersWithStories && usersWithStories.map(s => (
                <Story story={s}>
                    <UserStoryIcon face={s.photo} />
                </Story>

                ))
            }

        </div>
    )
}

export default Stories