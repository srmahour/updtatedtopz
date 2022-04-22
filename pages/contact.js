import Head from 'next/head'
import Footer from "../component/footer"
import Header from "../component/header"
import ContactUs from "../component/contact"


 function Contactus({data}) {

  const contactMeta = data.find( (item) =>  item.Page == 'Contact' ? item : null )

    return (
      // <div className={styles.container}>
      <div className='home-page'>
        <Head>
          <title>{contactMeta.Title}</title>
          <meta name="description" content={contactMeta.Description} />
          <link rel="icon" href="/fev.ico" />
        </Head>


        <Header/>

        <ContactUs/>

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

  export default Contactus