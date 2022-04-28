import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from "react";

function Homeabout() {

    const [ about, setAbout ] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://admin.topazstone.ca/about')
            .then(response => response.json())
            .then(data => {
                setAbout(data)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) {
        return <Image src={"/placeholder.jpg"}  alt="placeholder" title="placeholder" width={1921} height={862} />
    }
    if (!about) {
        return <Image src={"/placeholder.jpg"}  alt="placeholder" title="placeholder" width={1921} height={862} />
    }


    return(
        <>
            <div className="home-section-two">
                <div className="container flex-class">
                    <div className="image-section">
                        <Image src={`https://admin.topazstone.ca${about.About.image[0].formats.medium.url}`} priority={true} alt="About Topaz" width={750} height={750} />
                    </div>

                    <div className="text-section">
                        <div>
                            <h2>{about.About.Title}</h2>
                            <p>{about.About.Description}</p>
                            <div className="btn-groups">
                                <button>
                                    <Link href="/about"><a>Read More <Image src="/Union.png" alt='union' width={51} height={14} /></a></Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homeabout;