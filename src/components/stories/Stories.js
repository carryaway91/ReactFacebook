import UserStoryIcon from '../userStoryIcon/UserStoryIcon'
import Story from './story/Story'
import Photo from '../../img/ja.jpg'
import { useState, useEffect, useContext } from 'react'
import { StoryContext } from '../../context/StoryContext'

import { data } from '../../api/api'
import { StoriesContainer } from './StoriesStyles'

const Stories = props => {

    const {handleStoriesSeen, usersWithStories} = useContext(StoryContext)

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