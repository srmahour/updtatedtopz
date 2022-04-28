import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from "react";

function ContactUs(){

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

    return (
        <>
            <div className="banner-section contact">
                <div className="container">
                    <h2>Contact</h2>
                </div>
            </div>

            <div className="fomr-main-section">
                <div className="container">
                    <div className="left-side">
                        <div className="full-width text">
                            <h3>Contact Information</h3>
                        </div>

                        <div className="address-details">
                            <ul>
                                <li>
                                    <div className="icons">
                                        <Image src="/eva_pin-fill.png" alt="images" width={30} height={30} />
                                    </div>
                                    <div>
                                        <h4>Address</h4>
                                        <p>{data.Address}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icons">
                                        <Image src="/ic_round-business-center (1).png" alt="images" width={30} height={30} />
                                    </div>
                                    <div>
                                        <h4>Business</h4>
                                        <p>
                                            <span>Mon – Fri : 8 am to 5 pm</span>
                                            <span>Sat : 10 am to 3 pm</span>
                                            <span>Sun : Closed</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icons">
                                        <Image src="/mail-white.png" alt="images" width={30} height={22} />
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <p><a href={`mailto:${data.Email}`}>{data.Email}</a></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icons">
                                        <Image src="/tel.png" alt="images" width={30} height={30} />
                                    </div>
                                    <div>
                                        <h4>Phone</h4>
                                        <p><a href={`tel:${data.Phone}`}>{data.Phone}</a></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="right-side">
                        <h3>Want to carry  <Link href="/"><a> <Image src={`https://admin.topazstone.ca${data.Logo.url}`} alt="Topaz" width={203} height={52} /></a></Link> ?</h3>
                        <form>
                            <p className="full-width"><input type="text" placeholder="Name*"/> </p>
                            <p className="half-width"><input type="email" placeholder="Email*"/> </p>
                            <p className="half-width"><input type="number" placeholder="Phone Number"/> </p>
                            <p className="full-width"><input type="text" placeholder="Subject*"/> </p>
                            <p className="full-width"><textarea placeholder="Massage"></textarea></p>
                            <p className="full-width"><input type="submit" value="submit"/></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs;