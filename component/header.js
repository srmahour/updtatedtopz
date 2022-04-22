
import Link from 'next/link'
import {useState, useEffect} from 'react'
import { useRouter } from "next/router";
import Image from 'next/image'





function Header() {
    const [toggleState, setToggleState] = useState(true);
    useEffect(()=>{
        
        if( toggleState === false) {
            document.getElementById('navigationSectionw').classList.add('show');
        } else {
            document.getElementById('navigationSectionw').classList.remove('show');
        }

    })
    
    const router = useRouter();

    return (
        <>
            <header className="header-main " id='openmenu'>
                <div className="container">
                    <div className="header-logo">
                        <Link href="/"><a> <Image src="/logo.png" alt="Topaz" width={203} height={52} /></a></Link>
                    </div>
                    <div className="navigation-section" id='navigationSectionw'>
                        <ul>
                            <li className={router.pathname == "/" ? "active" : ""}><Link href="/"><a>Home</a></Link></li>
                            <li className={router.pathname == "/" ? "" : ""}><Link href="/about"><a>About</a></Link></li>
                            <li><Link href="/product"><a>Products</a></Link></li>
                            <li><Link href="/gallery"><a>Gallery</a></Link></li>
                            <li><Link href="/contact"><a>Contact</a></Link></li>
                        </ul>
                    </div>
                    <button className='toggle-btn-menu' onClick={ () => { setToggleState(!toggleState) } }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="tel-mobile-section">
                        <p><a href="tel:(204) 694-8318"><Image src="/call.png" alt="images" width={24} height={24}  /> (204) 694-8318</a></p>
                        <p><a href="mailto:info@winnipegstonetops.ca"><Image src="/mail.png" alt="images" width={24} height={24}/> info@winnipegstonetops.ca</a></p>
                    </div>
                </div>
            </header>
        </>
    )
  }
  
  export default Header;