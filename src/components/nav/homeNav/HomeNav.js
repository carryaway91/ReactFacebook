import { useRef, useState } from 'react'
import Logo from '../../Logo/Logo'
import './Loader.css'
import { SearchBar, Search, Magnifier, InputMagnifier, MobileNav } from './HomeNavStyles'
import NavLink from '../UI/link/Link'

const HomeNav = () => {
    const [showPanel, setShowPanel] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const search = useRef()
    const leftArrow = useRef()
    const input = useRef()
    
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
        search.current.style.left = '-9px'  
        input.current.focus()
    }
    
    const handleInputBlur = () => {
        setShowPanel(false)
        search.current.style.opacity = 1
        search.current.style.left = '9px'  
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
                                        <Magnifier enableBackground="new 0 0 50 50" height="20px" viewBox="0 0 50 50" width="20px" strokeWidth="4"><rect fill="none" height="50" width="50"/><circle cx="21" cy="20" fill="none" r="16" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" /><line fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="4" x1="32.229" x2="45.5" y1="32.229" y2="45.5"/></Magnifier>
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
                <InputMagnifier ref={search} onClick={handleInputFocus} enableBackground="new 0 0 50 50" height="20px" viewBox="0 0 50 50" width="20px"><rect fill="none" height="50" width="50"/><circle cx="21" cy="20" fill="none" r="16" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" /><line fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="4" x1="32.229" x2="45.5" y1="32.229" y2="45.5"/></InputMagnifier>
                <Search ref={input} placeholder="Search Facebook" onFocus={handleInputFocus} onBlur={handleInputBlur} onChange={handleInput} value={inputValue}/>
            </div>
            <MobileNav>
                <NavLink to="/bookmarks">
                    <svg viewBox="0 0 28 28" height="28" width="28"><path d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"></path></svg>
                </NavLink>
            </MobileNav>
        </div>
    )
}

export default HomeNav