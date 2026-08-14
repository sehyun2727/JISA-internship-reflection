import { Bridge } from '../components/Bridge'
import { StoryBand } from '../components/StoryBand'
import { LanguageProvider, useTranslation } from '../i18n/LanguageProvider'
import { Header } from '../sections/Header'
import { Hero } from '../sections/Hero'
import { Experience } from '../sections/Experience'
import { WebsiteRenewal } from '../sections/WebsiteRenewal'
import { FieldInsight } from '../sections/FieldInsight'
import { SignageSimulator } from '../sections/SignageSimulator'
import { Growth } from '../sections/Growth'
import { Footer } from '../sections/Footer'

function AppShell() {
  const t = useTranslation()

  return (
    <>
      <a href="#main" className="skip-link">
        {t.common.skipLink}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <StoryBand />
        <Bridge>{t.bridges.heroToExperience}</Bridge>
        <Experience />
        <Bridge>{t.bridges.experienceToRenewal}</Bridge>
        <WebsiteRenewal />
        <Bridge>{t.bridges.renewalToFieldInsight}</Bridge>
        <FieldInsight />
        <Bridge>{t.bridges.fieldInsightToSimulator}</Bridge>
        <SignageSimulator />
        <Bridge>{t.bridges.simulatorToGrowth}</Bridge>
        <Growth />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  )
}

export default App
