import Hero from '../components/Hero'
import About from '../components/About'
import Vision from '../components/Vision'
import SolutionsGrid from '../components/SolutionsGrid'
import Contact from '../components/Contact'

export default function Home(){
  return (
    <>
      <Hero />
      <div className="container">
        <About />
        <Vision />
        <SolutionsGrid />
        <Contact />
      </div>
    </>
  )
}
