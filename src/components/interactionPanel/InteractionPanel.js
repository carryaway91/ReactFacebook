import Button from './Button'
import Comment from './icons/Comment'
import Like from './icons/Like'
import Share from './icons/Share'


const InteractionPanel = () => {
    return (
        <div style={{ display: 'flex', justifyContent:'space-around'}}>
            <Button title="Like">
                <Like />
            </Button>
            <Button title="Comment">
                <Comment />
            </Button>
            <Button title="Share">
                <Share />
            </Button>
        </div>
    )
}

export default InteractionPanel