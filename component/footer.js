import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from "react";

function Footer() {


    const [ data, setData ] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://admin.topazstone.ca/contact-info')
            .then(response => response.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
    }, [])
    
    if (isLoading) {
        return <p></p>
    }
    if (!data) {
        return <p>No List to show</p>
    }

    return(
        <footer className="footer-main">
            <div className="anvagation-section">
                <ul>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/product"><a>Products</a></Link></li>
                    <li><Link href="/gallery"><a>Gallery</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                </ul>
            </div>

            <div className="footer-logo">
                <Link href="/"><a><Image src={`https://admin.topazstone.ca${data.Logo.url}`} alt="Topaz" width={203} height={52} /> </a></Link>
            </div>

            <div className="contact-numbers">
                <p>{data.Address}</p>
                <p><a href={`tel:${data.Phone}`}>{data.Phone}</a></p>
                <p><a href={`mailto:${data.Email}`}>{data.Email}</a></p>
            </div>

            <div className="copyrights-sections">
                <div className="container flex-class">
                    <p>© Copyright 2022 Winnipeg Stonetops. All Rights Reserved. Designed And Developed By <a href="https://ogrelogic.com/" rel="noreferrer" target="_blank">Ogrelogic</a>. Privacy Policy</p>
                    <p><a href={`https://admin.topazstone.ca${data.pdf1.url}`} target="_blank">Limited Lifetime Warranty </a> | <a href={`https://admin.topazstone.ca${data.pdf2.url}`} target="_blank">Care & Maintenence Instructions</a></p>
                </div>
            </div>
        </footer>
    )
  }
  
  export default Footer;