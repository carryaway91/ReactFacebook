import UserStoryIcon from '../userStoryIcon/UserStoryIcon'
import Story from './story/Story'
import Photo from '../../img/ja.jpg'

const Stories = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '1rem'}}>
            <Story photo={Photo} main={true} />
            
            {
                [...Array(4)].map(s => (
                <Story>
                    <UserStoryIcon />
                </Story>

                ))
            }

        </div>
    )
}

export default Stories