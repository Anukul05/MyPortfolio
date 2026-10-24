import Footer from './components/sections/Footer'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Navbar from './components/sections/Navbar'
import Projects from './components/sections/Projects'
import AiAssistant from './components/sections/AiAssistant'
import SkillsAndExperience from './components/sections/SkillsAndExperience'
import TickerBar from './components/sections/TickerBar'
import { MotionConfig, motion, useReducedMotion } from 'framer-motion'

const App = () => {
  const reduceMotion = useReducedMotion()
  const initial = reduceMotion ? false : { opacity: 0, y: 30 }

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-base text-primary">
        <Navbar />
        <main className="min-h-[calc(100svh-4rem)]">
          <motion.div
            initial={initial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <Hero />
          </motion.div>
          <TickerBar />
          <section id="about" aria-label="About" className="scroll-mt-16" />
          <motion.div
            initial={initial}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <SkillsAndExperience />
          </motion.div>
          <Projects />
          <AiAssistant />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
