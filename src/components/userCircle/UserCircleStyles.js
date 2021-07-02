import styled from "styled-components"

export const Img = styled.img`
    object-fit: cover;
    border-radius: 50%;
    padding: ${props => props.size === 'xl' ? 0 : '2px'};
    border-style: solid;
    border-width: ${props => props.size === 'xs' && props.hasStory ? '2px' : props.size === 'md' && props.hasStory ? '4px' : props.hasStory && props.size === 'xl' ? '6px' : 0 };
    border-color: ${props => !props.seen && props.hasStory ? '#0f92f3' : 'lightgray' };
    position: ${props => props.size === 'xl'  ? 'relative' : 0};
    left: ${props => props.hasStory && props.size === 'xl' ? '-5px' : !props.hasStory ? 0 : '15px'};
    top: ${props => props.hasStory && props.size === 'xl' ? '-7px' : !props.hasStory ? 0 : '15px'}; 
`


export const PhotoContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 50%;

`

export const OnlineCircle = styled.div`
    width: ${props => props.size === 'xs' ? '7px' : props.size === 'md' ? '15px' : props.size === 'xl' ? '23px' : 0 };
    height: ${props => props.size === 'xs' ? '7px' : props.size === 'md' ? '15px' : props.size === 'xl' ? '23px' : 0 };
    background: green;
    border-radius: 50%;
    position: absolute;
    bottom: ${props => props.online && props.size === 'xs' ? '3px' : props.online && props.size === 'md' ? '8px' : !props.withoutStory && props.size === 'xl' ? '17px' : props.size === 'xl' && props.withoutStory ? '3px' : 0};
    right: ${props => props.online && props.size === 'xs' ? '3px' : props.online && props.size === 'md' ? '8px' :  !props.withoutStory && props.size === 'xl' ? '17px' : props.size === 'xl' && props.withoutStory ? '15px' : 0};
    border: 2px solid white
`