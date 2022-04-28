import { useEffect, useState } from "react";
import Image from 'next/image'


function Choosetopaz() {

    const [ choose, setChoose ] = useState()
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch('https://admin.topazstone.ca/why-choose-topazs')
            .then(response => response.json())
            .then(data => {
                setChoose(data)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) {
        return <Image src={"/placeholder.jpg"}  alt="placeholder" title="placeholder" width={1921} height={862} />
    }
    if (!choose) {
        return <Image src={"/placeholder.jpg"}  alt="placeholder" title="placeholder" width={1921} height={862} />
    }

    return (
        <>
            <div className='why-choose-two'>
                <div className='container'>
                    <h2>Why Choose Topaz?</h2>

                    <div className='text-section'>
                        { choose.map( item => 
                            <div className='text-box' key={item.id}>
                                <h3>{item.Title}</h3>
                                <p>{item.Content}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
  }
  
  export default Choosetopaz;