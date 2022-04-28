import Image from 'next/image'
import React, { useEffect } from 'react';


function Productbanner({productData}) {
  
  useEffect(()=>{

    var fullsection = document.getElementById('hover-class-effect');
        fullsection.addEventListener('mouseenter', function(){
            this.classList.add('active');
        });
        fullsection.classList.remove('active');

    var targetImg = document.querySelectorAll('.product-grid');
    targetImg.forEach((currentItem, index, arr) => {
        currentItem.addEventListener('mouseenter', function(){
            targetImg.forEach((item)=>{
                item.classList.remove('active');
            });
            currentItem.classList.add('active');  
        });
    });
  })




    return (
        <>
            <div className='banner-section product' id='hover-class-effect'>
                <ul>

                    { productData.Images.map( item => 
                        <li className='product-grid' key={item.id}><Image src={`https://admin.topazstone.ca${item.url}`} placeholder="blur" blurDataURL={"/placeholder.jpg"} alt="Topaz" title="Topaz" width={1921} height={775} /></li>    
                    )}
                    
                </ul>
                <div className="container banner">
                    <h3>{productData.Title}</h3>
                </div>            
            </div>
        </>
    )
  }
  
  export default Productbanner;