
import Image from 'next/image'
import { useEffect, useState } from "react";
import { LightBox } from 'react-lightbox-pack'; // <--- Importing LightBox Pack
import "react-lightbox-pack/dist/index.css";

function Productimage() {

    const [ data, setData ] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const [toggle, setToggle] =  useState(false);
	const [sIndex, setSIndex] =  useState(0);

	// Handler
	const  lightBoxHandler  = (state, sIndex) => {
		setToggle(state);
		setSIndex(sIndex);
	};

    useEffect(() => {
        setIsLoading(true)
        fetch('https://admin.topazstone.ca/tiles-galleries')
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

    const imageData = data.map((item, index) =>  {
        
        return { id: item.id, image: `https://admin.topazstone.ca${item.Back.url}`, title: item.Name, mediumImg: `https://admin.topazstone.ca${item.Front.formats.medium.url}`, smallImg: `https://admin.topazstone.ca${item.Front.formats.thumbnail.url}`, description: item.Description}

    });

    return (
        <>
            <div className="highlight-points">
                <div className="container">
                    <div className="logos">
                        <Image src="/logo.png" alt='topaz' width={220} height={52} />
                    </div>

                    <div className="points">
                        <ul>
                            <li><Image src="/tick-point.png" alt='tick' width={25} height={25} />   <label>One-Stop Shop</label></li>
                            <li><Image src="/tick-point.png" alt='tick' width={25} height={25} />  <label>High Quality</label></li>
                            <li><Image src="/tick-point.png" alt='tick' width={25} height={25} />  <label>Uniqueness</label></li>
                            <li><Image src="/tick-point.png" alt='tick' width={25} height={25} />  <label>Simplicity</label></li>
                            <li><Image src="/tick-point.png" alt='tick' width={25} height={25} />  <label>Quick Lead Time</label></li>
                            <li><Image src="/tick-point.png" alt='tick' width={25} height={25} />  <label>Limited Lifetime Warranty</label></li>
                        </ul>
                    </div>

                    <div className="product-gallerys">
                        <ul>

                            {imageData.map((item, index) => 

                            <li key={item.id} onClick={() => {
                                lightBoxHandler(true, index);
                                }}>

                                <div className="image">
                                    <Image src={item.mediumImg} placeholder="blur" blurDataURL={item.smallImg} alt={item.title} title={item.title} width={582} height={322} />
                                </div>
                                <div className="text">
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </li>    

                            )}
                            
                            
                        </ul>
                    </div>
                </div>
            </div>

            <LightBox
				state={toggle}
                event={lightBoxHandler}
                data={imageData}
                imageWidth="80vw"
                imageHeight="80vh"
                thumbnailHeight={50}
                thumbnailWidth={50}
                setImageIndex={setSIndex}
                imageIndex={sIndex}
            />
        </>
    )
  }
  
  export default Productimage;