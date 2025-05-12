import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import ChatWidget from '../components/ChatWidget'
import ThemeToggle from '../components/ThemeToggle'


export default function Home() {
  return (
    <>
      <Head>
        <title>SoftSell - Sell Your Unused Software Licenses</title>
        <meta name="description" content="Easily sell unused software licenses online with SoftSell." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="container py-5">

        <Navbar />
        <ThemeToggle />
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <ChatWidget />
    </>
  )
}
