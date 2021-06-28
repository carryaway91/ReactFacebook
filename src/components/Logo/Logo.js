import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = props => {
    return (
        <LogoContainer>
            <Link to="/" style={{ color: 'white', width: '100%', display: 'flex', 
                justifyContent: 'center', alignItems: 'center',
                position: 'relative',
                top: '2px'
                }}>
                f
            </Link>
        </LogoContainer>
    );
};

const LogoContainer = styled.div`
    width: 40px;
    height: 40px;
    color: white;
    margin: 0 1rem;
    position: relative;
    top: 7px;
    display: flex;
    justify-content: center;
    font-weight: bold;
    background: #0f92f3;
    font-size: 2.7rem;
    border-radius: 50%;
    color: white;
`
export default Logo;
