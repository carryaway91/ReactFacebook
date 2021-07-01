import { Container, ContactWrap, Img, Add } from './FriendsStyles'
import Teta from '../../img/teta.jpg'

const Friends = () => {
    return (
        <div style={{padding: '0 1rem'}}>
            <h2>People You May Know</h2>
            <Container>
                {
                    [...Array(10)].map((c, i) => (
                        <ContactWrap>
                            <Img src={Teta} />
                            <div>
                                Contact { i }
                                <span>1 mutual friend</span>
                                <Add>Add Friend</Add>
                            </div>
                        </ContactWrap>
                    ))
                }
            </Container>
        </div>
    );
};


export default Friends;
