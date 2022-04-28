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
        return <Image src={"/placeholder.jpg"}  alt="placeholder" title="placeholder" width={1921} height={862} />
    }
    if (!data) {
        return <Image src={"/placeholder.jpg"}  alt="placeholder" title="placeholder" width={1921} height={862} />
    }

    return(
        <>
            <div className="home-section-four bg-image">
                <Image src={`https://admin.topazstone.ca${data.Image.formats.large.url}`} placeholder="blur" blurDataURL={"/placeholder.jpg"} alt={data.Title} width={1921} className='use bg image' height={619} />
                
                <div className="container">
                    <h2>{data.Title}</h2>
                    <p>{data.Description}</p>
                </div>
            </div>
        </>
    )
}

export default Homereliable;