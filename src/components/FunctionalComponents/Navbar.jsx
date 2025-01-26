import { Link } from 'react-router-dom'
import '../../css/Navbar.css'
import { useState } from 'react'
const Navbar = (onLogout) => {
    var [dropdown, showDropdown] = useState(false)
    const toggleDropdown=()=>{
 showDropdown(dropdown=> !dropdown)
    }
    return (<header>
        <nav>
            <ol>

                <li><Link to='/' className="link">Home</Link></li>
                <li><Link to='/About' className="link">About</Link></li>
                <li><Link to='/Gallery' className="link" >Gallery</Link></li>
                <li><Link to='/Contact' className="link">Contact</Link></li>
                <div>
                    <span onMouseEnter={() => { showDropdown(true) }} onMouseLeav={() => { showDropdown(false) }}>Hooks</span>
                    {dropdown &&
                        (
                            <ul >
                                  { <li><Link to='/react-lm'>React-LifeCycle</Link></li> }
                                { <li><Link to='/useState'>useState</Link></li> }
                                {<li><Link to='/useEffect'>useEffect</Link></li>}
                                {<li><Link to='/useEffectAPI' >useEffectAPI</Link></li>}
                                {<li><Link to='/use-ref' >useRef</Link></li>}
                                {<li><Link to='/use-memo' >useMemo</Link></li>}
                                {<li><Link to='/use-callback' >usecallback</Link></li>}
                                {<li><Link to='/student' >usecontext</Link></li>}
                                {<li><Link to='/use-cust' >UseLocalStorage</Link></li>}

                            </ul>
                        )
                    }
                </div>
                
                <div onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} class="dropdown">
                    <span >Memoization</span>
                    {dropdown &&
                        ( <ul>
                            <li><Link to='/memo' class="link">React.Memo</Link></li>
                            <li><Link to='/lazy' class="link">LazyLoadingWithSuspense</Link></li>
                            <li><Link to='/hoc' class="link">HOC</Link></li>
                          </ul>  )}
                </div> 

                
                <li><Link to='/UseEffectImageAPI' class="link">UseEffectImageAPI</Link></li>
                <li><Link to='/memo' className="link" >Memo</Link></li>
                <li><Link to='/' className="link" onClick={onLogout}>Logout</Link></li>
            </ol>
        </nav>
    </header>)

}
export default Navbar;
