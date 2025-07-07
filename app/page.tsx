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
            href="/pepe.pdf"
            download="pepe.pdf"
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
                    Full-Stack and Machine Learning Developer.
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
                  <Link href="https://github.com/arielpincayy" className="text-muted-foreground hover:text-foreground">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="www.linkedin.com/in/ariel-pincay-08a307191" className="text-muted-foreground hover:text-foreground">
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
                  I'm a passionate developer interested in web development, specialized in Next.js. I also have strong knowledge in Data Science, Machine Learning, Evolutionary Algorithms, Numerical Analysis, and more.
                </p>
              </div>
              <div className="w-full max-w-full space-y-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Education</h3>
                    <p className="text-muted-foreground">
                      Currently Studying Computer Science at <br />YachayTech University
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Experience</h3>
                    <p className="text-muted-foreground">
                      Research Assistant
                      <br />
                      May,2025 - Present
                    </p>
                    <p className="text-muted-foreground">
                      Member of Tuto-U Startup
                      <br />
                      2024 - Present
                    </p>
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
              link="https://tutou.app"
              state={true}
              />

              <ProjectCard 
              title="Blog Page Frontend"
              description="A full-stack blog manager"
              tags={["Next.js","TypeScript","Tailwind CSS","MDX"]}
              link="https://github.com/arielpincayy/frontend_blogpage"
              state={false}
              />

              <ProjectCard 
              title="Blog Page Bckend"
              description="A full-stack blog manager"
              tags={["Flask","Python","SQLAlchemy","Postgres","Docker"]}
              link="https://github.com/arielpincayy/backend_blogpage"
              state={false}
              />

              <ProjectCard 
              title="'Carrera de Educación Básica en Línea' University Page"
              description="A full-stack informative Page"
              tags={["Next.js", "TypeScript", "Tailwind CSS", "Firebase"]}
              link="https://ei-unemi-dvv9evzlv-arielpincays-projects.vercel.app/"
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
                  title="Frontend Development"
                  skills={[
                    "React.js",
                    "Next.js",
                    "JavaScript",
                    "TypeScript",
                    "HTML",
                    "CSS",
                    "Responsive Design",
                  ]}
                />
                <SkillCard
                  title="Backend Development"
                  skills={[
                    "Node.js",
                    "Flask",
                    "Python",
                    "C",
                    "C++",
                    "RESTful APIs",
                  ]}
                />
                <SkillCard
                  title="Databases & DevOps"
                  skills={[
                    "SQL",
                    "NoSQL",
                    "MongoDB",
                    "PostgreSQL",
                    "Docker",
                    "Nginx",
                    "Bash",
                  ]}
                />
                <SkillCard
                  title="Scientific & ML"
                  skills={[
                    "MATLAB",
                    "Numerical Analysis",
                    "Machine Learning",
                    "Evolutionary Algorithms",
                    "Data Science",
                  ]}
                />
                <SkillCard
                  title="Tools & Collaboration"
                  skills={[
                    "Git",
                    "GitHub",
                    "Jira",
                    "Notion",
                    "Agile/Scrum",
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
                      <p className="text-sm text-muted-foreground">linkedin.com/in/ariel-pincay-08a307191</p>
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
          <p className="text-sm text-muted-foreground">© 2025 Ariel Pincay. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="https://github.com/arielpincayy" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="www.linkedin.com/in/ariel-pincay-08a307191" className="text-muted-foreground hover:text-foreground">
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
        <p><span className="font-bold">Satate: </span>{state?"Finished":"In progress"}</p>
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
