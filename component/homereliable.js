import Image from 'next/image'
import { useEffect, useState } from "react";



function Homereliable() {

    const [ data, setData ] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://admin.topazstone.ca/be-reliable')
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
            <div className="home-section-four bg-image">
                <Image src={`https://admin.topazstone.ca${data.Image.url}`} placeholder="blur" blurDataURL={`https://admin.topazstone.ca${data.Image.formats.thumbnail.url}`} alt={data.Title} width={1921} className='use bg image' height={619} />
                
                <div className="container">
                    <h2>{data.Title}</h2>
                    <p>{data.Description}</p>
                </div>
            </div>
        </>
    )
}

export default Homereliable;