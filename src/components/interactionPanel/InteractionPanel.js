import { useState } from 'react'
import styled from 'styled-components'
import Emojies from '../emojies/Emojies'
import ShareContext from '../shareContext/ShareContext'
import Button from './Button'
import Comment from './icons/Comment'
import FullLike from './icons/FullLike'
import Heart from './icons/Heart'
import Laugh from './icons/Laugh'
import Like from './icons/Like'
import Share from './icons/Share'


const InteractionPanel = props => {
    const [emojiPanel, setShowEmojiPanel] = useState(false)
    const [chosenEmoji, setChosenEmoji] = useState('like')
    const [shareContext, setShareContext] = useState(false)

    const handleChosenEmoji = e => {
        setChosenEmoji(e)
    }

    const handleTriggerLike = () => {
        if(chosenEmoji !== 'like') {
            setChosenEmoji('like')
        } else if (chosenEmoji == 'like') {
            setChosenEmoji('fullLike')
        }
    }

    const triggerShare = e => {
        setShareContext(!shareContext)
        e.stopPropagation()
    }


    let currentEmoji = <Like />
    let eColor = 'black'
    let eText = 'Like'

    switch(chosenEmoji) {
        case 'like':
            currentEmoji = <Like />
            eColor = 'black'
            eText = 'Like'
            props.emoji('')
            break
        case 'fullLike':
            currentEmoji = <FullLike w="20" />
            eColor = 'blue'
            eText = 'Like'
            props.emoji('fullLike')
            break
        case 'heart':
            currentEmoji = <Heart w="20" />
            eColor = 'red'
            eText = 'Love'
            props.emoji('heart')
            break
        case 'laugh':
            currentEmoji = <Laugh w="20" />
            eColor = 'orange'
            eText = 'Haha'
            props.emoji('laugh')
            break
    }

    return (
        <div style={{ display: 'flex', justifyContent:'space-around'}}>
            <Button title={eText} color={eColor} over={() => setShowEmojiPanel(true)} hide={() => setShowEmojiPanel(false)} clicked={handleTriggerLike}>
                { currentEmoji }
                { emojiPanel && <Emojies choose={(e) => handleChosenEmoji(e)} w="30" /> }
            </Button>
            <Button title="Comment" clicked={props.clicked}>
                <Comment />
            </Button>
            <Button title="Share" clicked={(e) => triggerShare(e)}>
                <Share />
                { shareContext && <ShareContext /> }
            </Button>
        </div>
    )
}


export default InteractionPanel