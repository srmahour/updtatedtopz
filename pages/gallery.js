import Head from 'next/head'
import Footer from "../component/footer"
import Header from "../component/header"
import Gallery from "../component/gallery"


 function GalleryPage({data}) {

  const galleryMeta = data.find( (item) =>  item.Page == 'Gallery' ? item : null )

    return (
      // <div className={styles.container}>
      <div className='home-page'>
        <Head>
          <title>{galleryMeta.Title}</title>
          <meta name="description" content={galleryMeta.Description} />
          <link rel="icon" href="/fev.ico" />
        </Head>


        <Header/>
            <Gallery/>
        <Footer />
      </div>
    )
  }

  export async function getStaticProps(context) {
    const res = await fetch('https://admin.topazstone.ca/meta-tags')
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }

  export default GalleryPage

  
  