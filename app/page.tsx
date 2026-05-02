import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 m-auto items-center justify-between px-3 md:px-0">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl">
              Portfolio
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
            <a
            href="/Curriculum.pdf"
            download="Curriculum.pdf"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
            Download CV
            </a>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-8 md:py-24 lg:py-32">
          <div className="container m-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm Ariel Pincay
                  </h1>
                  <p className="text-xs md:text-xl text-muted-foreground">
                    Computer Engineering Student | Full-Stack & ML Developer
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button asChild>
                    <Link href="https://github.com/arielpincayy" target="_blank" rel="noopener noreferrer">
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    </Button>
                  <Button
                    variant="outline"
                    asChild
                  >
                    <a href="mailto:arielpincay812@gmail.com">
                      Contact Me
                    </a>
                  </Button>
                </div>
                <div className="flex gap-4">
                  <Link href="https://github.com/arielpincayy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="https://linkedin.com/in/ariel-pincay-perez" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/imgs/yo.jpeg?height=600&width=600"
                  alt="Profile"
                  width={600}
                  height={600}
                  className="rounded-full aspect-square object-cover border-4 border-border"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container m-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Computer Engineering student at Yachay Tech University (9th semester), with hands-on experience in machine learning, evolutionary algorithms, numerical analysis, and full-stack web development. Passionate about bridging theoretical computation with real-world scientific and engineering applications.
                </p>
              </div>
              <div className="w-full max-w-full space-y-4 pt-10">
                <div className="flex flex-col md:flex-row gap-4 justify-around">
                  <div className="space-y-2 w-full md:w-1/4">
                    <h3 className="text-xl font-bold text-center">Education</h3>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Bachelor of Science in Computer Engineering (9th Semester)</span><br />
                      Yachay Tech University
                      <br />
                      <span className="text-sm mt-2 block">Relevant coursework: Machine and Deep Learning, Numerical Analysis, Parallel Computing, Algorithms, Data Structures</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-center">Experience</h3>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Research Assistant – Protein Design Project</span>
                        <br />
                        Yachay Tech University (Sep 2025 - Nov 2025)
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Frontend Developer</span>
                        <br />
                        Tuto-U Startup (Jun 2024 - Dec 2024)
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">Web Developer</span>
                        <br />
                        Compufest YachayTech (Feb 2025 - May 2025)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container m-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pb-4">
                  Main projects I have participated in
                </p>
              </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard 
              title="Tuto-U"
              description="A full-stack e-learning solution for managing tutoring services within universities."
              tags={["Next.js","TypeScript","Tailwind CSS"]}
              link="https://www.tutou.app/"
              state={true}
              />

              <ProjectCard 
              title="'Carrera de Educación Básica en Línea' University Page"
              description="A full-stack informative Page"
              tags={["Next.js", "TypeScript", "Tailwind CSS", "Firebase"]}
              link="https://ei-unemi-dvv9evzlv-arielpincays-projects.vercel.app/"
              state={true}
              />

              <ProjectCard 
              title="Compufest"
              description="A full-stack informative Page for Compufest YachayTech"
              tags={["Next.js", "TypeScript", "Tailwind CSS", "PostgreSql", "Docker", "NGINX"]}
              link="https://compufest.yachaytech.edu.ec/"
              state={true}
              />

            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container m-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills & Expertise</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I've worked with a variety of technologies and frameworks to create exceptional digital experiences.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <SkillCard
                  title="Languages & Frameworks"
                  skills={[
                    "Python",
                    "C/C++",
                    "JavaScript",
                    "TypeScript",
                    "React.js",
                    "Next.js",
                    "Node.js",
                    "Flask",
                    "LangChain",
                    "LangGraph",
                    "Ollama",
                    "PyTorch",
                    "TensorFlow",
                    "deap"
                  ]}
                />
                <SkillCard
                  title="Web & DevOps"
                  skills={[
                    "HTML5 / CSS3",
                    "Git",
                    "Docker",
                    "CUDA",
                  ]}
                />
                <SkillCard
                  title="Research Interests"
                  skills={[
                    "Machine Learning",
                    "Evolutionary Algorithms",
                    "High Performance Computing",
                    "Scientific Computing",
                    "Numerical Analysis",
                    "Natural Language Processing",
                  ]}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container m-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or want to collaborate? Feel free to reach out!
                </p>
              </div>
              <div className="w-full max-w-md space-y-8">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6" />
                    <div className="text-left">
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">arielpincay812@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Linkedin className="h-6 w-6" />
                    <div className="text-left">
                      <h3 className="font-medium">LinkedIn</h3>
                      <p className="text-sm text-muted-foreground">linkedin.com/in/ariel-pincay-perez</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Github className="h-6 w-6" />
                    <div className="text-left">
                      <h3 className="font-medium">GitHub</h3>
                      <p className="text-sm text-muted-foreground">github.com/arielpincayy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 m-auto px-4 md:px-6 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">© 2026 Ariel Pincay. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://github.com/arielpincayy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/ariel-pincay-perez" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ title, description, tags, link, state }:{ title:string, description:string, tags:string[], link:string, state:boolean}) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="overflow-hidden cursor-pointer transition-shadow hover:shadow-lg">
      <CardContent className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <p><span className="font-bold">State: </span>{state?"Finished":"In progress"}</p>
        <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag) => (
          <span key={tag} className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
          {tag}
          </span>
        ))}
        </div>
      </CardContent>
      </Card>
    </Link>
  )
}

function SkillCard({ title, skills }:{ title:string, skills:string[]}) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
