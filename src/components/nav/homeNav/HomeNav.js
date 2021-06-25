import { Fragment, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../Logo/Logo'
import './Loader.css'


const HomeNav = () => {
    const [showPanel, setShowPanel] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const search = useRef()
    const leftArrow = useRef()
    
    const handleInput = e => {
        setInputValue(e.target.value)
        setShowSpinner(true)
        setInterval(() => {
            setShowSpinner(false)
        }, 500)
    }
    const handleInputFocus = () => {
        setShowPanel(true)
        search.current.style.transitionProperty = 'all'  
        search.current.style.transitionDuration = '0.3s'  
        search.current.style.opacity = 0  
        search.current.style.left = '-6px'  
    }
    
    const handleInputBlur = () => {
        setShowPanel(false)
        search.current.style.opacity = 1
        search.current.style.left = '6px'  
    }
    
    const handleOnMouseEnter = () => {
        leftArrow.current.style.backgroundColor = '#ddd'
        leftArrow.current.style.borderRadius = '50%'
        leftArrow.current.style.cursor = 'pointer'
    }
    
    const handleOnMouseLeave = () => {
        leftArrow.current.style.backgroundColor = 'transparent'

    }


    return (
        <div style={{ position: 'relative', display: 'flex'}}>
            
            {
                showPanel && (
                    <SearchBar>
                        <div style={{ marginTop: '56px'}}>
                            <div style={{ display: 'flex', justifyContent: 'space-between'}} onClick={handleInputFocus}>
                                <h2 style={{ margin: 0, fontSize: '1.2rem'}}>Recent Searches</h2>
                                <a href="#" style={{ alignSelf: 'center'}}>Edit</a>
                            </div>
                    {
                        inputValue && (
                            <div>
                                <div style={{ display: 'flex', overflow: 'hidden'}}>
                                    <div style={{ width: '50px', }}>
                                        <svg style={{ background: '#0f92f3', padding: '.5rem', borderRadius: '50%', position: 'relative', top: '10px' }} enableBackground="new 0 0 50 50" height="20px" viewBox="0 0 50 50" width="20px" strokeWidth="4"><rect fill="none" height="50" width="50"/><circle cx="21" cy="20" fill="none" r="16" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" /><line fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4" x1="32.229" x2="45.5" y1="32.229" y2="45.5"/></svg>
                                    </div>
                                    <p style={{ color: '#0f92f3', float: 'right', overflow: 'hidden'}}>Search for &nbsp;<strong style={{ overflow: 'hidden'}}>{ inputValue }</strong></p>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center'}}>
                                    { showSpinner && <div className="lds-ring"><div></div><div></div><div></div><div></div></div> }
                                </div>
                            </div>
                        )
                    }
                        </div>
                    </SearchBar>
                )
            }
            <Logo />
            <div style={{ position: 'relative', display: 'flex'}}>
                {
                    showPanel && <svg ref={leftArrow} onMouseLeave={handleOnMouseLeave} onMouseEnter={handleOnMouseEnter} style={{ zIndex: 102, position: 'absolute', left: '-65px', top: '10px', padding: '.4rem', borderRadius: '50%'}} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="12" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                }
                <svg ref={search} style={{ position: 'absolute', zIndex: 102, top: '19px', left: '9px' }} enableBackground="new 0 0 50 50" height="20px" viewBox="0 0 50 50" width="20px"><rect fill="none" height="50" width="50"/><circle cx="21" cy="20" fill="none" r="16" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" /><line fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="4" x1="32.229" x2="45.5" y1="32.229" y2="45.5"/></svg>
                <Search placeholder="Search Facebook" onFocus={handleInputFocus} onBlur={handleInputBlur} onChange={handleInput} value={inputValue}/>
            </div>
        </div>
    )
}

const SearchBar = styled.div`
    padding: 0 1rem 1rem 1rem;
    position: absolute;
    background: white; 
    top: 0; 
    left: 0; 
    width: 320px;
    max-height: 500px;
    zIndex: 0;
    border-radius: 0 0 .5rem 0;
    box-shadow: 1px 10px 15px 1px #aaa;
    z-index: 100
`

const Search = styled.input`
    position: absolute;
    align-self: center;
    background: #efefef;
    padding: .6rem 1rem;
    border-radius: 50rem;
    border: none;
    outline: none;
    font-size: 1.02rem;
    padding-left: 2rem; 
    width: 180px;
    left: 0;
    transition: all .2s ease-in-out;
    z-index: 101;

    &:focus {
        padding-left: 1rem;
        left: -20px;
        width: 216px
    }
`

export default HomeNav