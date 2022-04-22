import Choosetopaz from "../component/choosetopaz"
import Head from 'next/head'
import Footer from "../component/footer"
import Header from "../component/header"
import Homeabout from "../component/homeaboutsection"


 function AboutUs11({data}) {

  const aboutMeta = data.find( (item) =>  item.Page == 'About' ? item : null )


    return (
      // <div className={styles.container}>
      <div className='home-page'>
        <Head>
        <title>{aboutMeta.Title}</title>
        <meta name="description" content={aboutMeta.Description} />
          <link rel="icon" href="/fev.ico" />
        </Head>


        <Header/>
        <Homeabout/>
        <Choosetopaz/>

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
  
  export default AboutUs11