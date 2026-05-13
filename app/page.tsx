import AboutSection from "@/components/aboutSection"
import ProjectsSection from "@/components/projectsSection"
import SkillsSection from "@/components/skillsSection"
import ContactSection from "@/components/contactSection"
import HeroSection from "@/components/heroSection"
import Header from "@/components/header"
import Footer from "@/components/footer"


export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header/>
      <main className="flex-1">
        <HeroSection/>
        <AboutSection/>
        <ProjectsSection/>
        <SkillsSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </div>
  )
}
