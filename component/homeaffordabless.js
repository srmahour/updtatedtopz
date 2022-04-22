import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from "react";


function Homaffordabless() {

    const [ data, setData ] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://admin.topazstone.ca/be-affordable')
            .then(response => response.json())
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) {
        return <p>Loading....</p>
    }
    if (!data) {
        return <p>No List to show</p>
    }

    return(
        <>
            <div className='home-section-six'>
                <Image src={`https://admin.topazstone.ca${data.Image.url}`} placeholder="blur" blurDataURL={`https://admin.topazstone.ca${data.Image.formats.thumbnail.url}`} alt="Affordable" width={1921} className='usebgimages' height={900} />
                <div className='container'>
                    <div className='titles'>
                        <h3>{data.Title}</h3>
                        <p>{data.Description}</p>
                    </div>
                    <div className='btns'>
                    <p><Link href='/contact'><a>Contact Us <Image src='/green-arrow.png' alt='images'  width={51} height={14} /></a></Link></p>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default Homaffordabless