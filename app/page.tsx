import { ArrowRight, ChevronDown, Github, Linkedin, Mail, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/50 backdrop-blur-lg">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-blue-500">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold">H</div>
            </div>
            <span className="text-lg font-bold">Horizon Labs</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium text-white/70 hover:text-white">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium text-white/70 hover:text-white">
              Services
            </Link>
            <Link href="#internships" className="text-sm font-medium text-white/70 hover:text-white">
              Internships
            </Link>
            <Link href="#projects" className="text-sm font-medium text-white/70 hover:text-white">
              Projects
            </Link>
            <Link href="#why-us" className="text-sm font-medium text-white/70 hover:text-white">
              Why Us
            </Link>
            <Link href="#contact" className="text-sm font-medium text-white/70 hover:text-white">
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(67,56,202,0.15),rgba(87,13,248,0.05))]"></div>
          <div className="absolute inset-0 -z-10 bg-[url('/grid.png')] bg-center [mask-image:radial-gradient(white,transparent_85%)]"></div>

          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-8 inline-block rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-md">
                Innovation Lab
              </div>
              <h1 className="mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                Building Future Tech with Bold Ideas
              </h1>
              <p className="mb-8 text-lg text-white/70">
                We transform visionary concepts into tangible products through cutting-edge technology and innovative
                design.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full sm:w-auto border-white/20 hover:bg-white/10">
                  Join Us
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50">
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">About Horizon Labs</h2>
              <div className="h-1 w-20 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <p className="mb-8 text-lg text-white/70">
                Horizon Labs is an innovation lab focused on building MVPs, Flutter apps, and IoT devices for
                early-stage startups. We partner with visionaries to transform ideas into market-ready products using
                cutting-edge technology and user-centered design. Our team of experts specializes in rapid prototyping,
                agile development, and creating scalable solutions that help startups gain traction and secure funding.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="relative py-16 md:py-24 bg-black/50">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(67,56,202,0.1),transparent_70%)]"></div>
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
              <div className="h-1 w-20 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <p className="text-lg text-white/70">
                We offer a comprehensive suite of development services to bring your ideas to life.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <ServiceCard
                title="Flutter App Dev"
                description="Cross-platform mobile applications with beautiful UI and seamless performance."
                icon="📱"
              />
              <ServiceCard
                title="Web Development"
                description="Responsive, modern web applications built with the latest technologies."
                icon="🌐"
              />
              <ServiceCard
                title="IoT Prototyping"
                description="Connected hardware solutions with custom firmware and cloud integration."
                icon="🔌"
              />
              <ServiceCard
                title="SaaS MVPs"
                description="Scalable software-as-a-service platforms to validate your business model."
                icon="🚀"
              />
            </div>
          </div>
        </section>

        {/* Internships Section */}
        <section id="internships" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Open Internships</h2>
              <div className="h-1 w-20 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <p className="text-lg text-white/70">
                Join our team and work on cutting-edge projects while developing your skills.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <InternshipCard
                title="Flutter Developer Intern"
                description="Build cross-platform mobile applications using Flutter and Firebase."
                requirements="Knowledge of Dart, Flutter basics, and mobile app development concepts."
              />
              <InternshipCard
                title="Frontend Developer Intern"
                description="Create responsive web interfaces using React, Next.js and modern CSS."
                requirements="HTML, CSS, JavaScript fundamentals and basic React knowledge."
              />
              <InternshipCard
                title="IoT Engineering Intern"
                description="Develop firmware for IoT devices and integrate with cloud platforms."
                requirements="Basic electronics knowledge, Arduino/ESP32 experience, and C/C++ programming."
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-16 md:py-24 bg-black/50">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(67,56,202,0.1),transparent_70%)]"></div>
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Live Projects</h2>
              <div className="h-1 w-20 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <p className="text-lg text-white/70">Explore some of our recent work and successful client projects.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="MediTrack"
                description="A healthcare tracking platform for patients to monitor medications and appointments."
                tech={["Flutter", "Firebase", "Node.js"]}
                image="/placeholder.svg?height=300&width=400"
              />
              <ProjectCard
                title="SmartHome Hub"
                description="IoT control center for managing connected devices with voice and app control."
                tech={["ESP32", "React", "MQTT", "AWS"]}
                image="/placeholder.svg?height=300&width=400"
              />
              <ProjectCard
                title="TaskFlow"
                description="Project management SaaS for remote teams with real-time collaboration features."
                tech={["Next.js", "Supabase", "WebRTC"]}
                image="/placeholder.svg?height=300&width=400"
              />
            </div>
          </div>
        </section>

        {/* Why Intern With Us Section */}
        <section id="why-us" className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Why Intern With Us?</h2>
              <div className="h-1 w-20 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <p className="text-lg text-white/70">
                We offer a unique learning experience that prepares you for a successful tech career.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="grid gap-6 md:grid-cols-2">
                <BenefitCard
                  title="Real-World Projects"
                  description="Work on actual client projects that will be used by real users."
                />
                <BenefitCard
                  title="Flexible Remote Work"
                  description="Work from anywhere with flexible hours to fit your schedule."
                />
                <BenefitCard
                  title="LOR + Certification"
                  description="Receive a letter of recommendation and official certification upon completion."
                />
                <BenefitCard
                  title="Mentorship"
                  description="Get guidance from experienced developers who will help you grow."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-16 md:py-24 bg-black/50">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(67,56,202,0.15),rgba(87,13,248,0.05))]"></div>
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
              <div className="h-1 w-20 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <p className="text-lg text-white/70">
                Have a question or want to work with us? Reach out and we'll get back to you soon.
              </p>
            </div>

            <div className="mx-auto max-w-2xl">
              <Card className="border-white/10 bg-black/40 backdrop-blur-md">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-white/70">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" className="border-white/10 bg-white/5" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-white/70">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          className="border-white/10 bg-white/5"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-white/70">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Subject" className="border-white/10 bg-white/5" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-white/70">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        className="min-h-32 border-white/10 bg-white/5"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Send Message
                    </Button>
                  </form>

                  <div className="mt-8 flex items-center justify-center gap-4">
                    <a href="mailto:contact@horizonlabs.com" className="text-white/70 hover:text-white">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-blue-500">
              <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">H</div>
            </div>
            <span className="text-sm font-medium">Horizon Labs</span>
          </div>
          <p className="text-sm text-white/50">© {new Date().getFullYear()} Horizon Labs. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-white/50 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-sm text-white/50 hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <Card className="overflow-hidden border-white/10 bg-black/40 backdrop-blur-md transition-all hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10">
      <CardHeader>
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-2xl">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-white/70">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function InternshipCard({
  title,
  description,
  requirements,
}: { title: string; description: string; requirements: string }) {
  return (
    <Card className="overflow-hidden border-white/10 bg-black/40 backdrop-blur-md transition-all hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-white/70">{description}</p>
        <div>
          <h4 className="mb-2 text-sm font-medium">Requirements:</h4>
          <p className="text-sm text-white/70">{requirements}</p>
        </div>
        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          Apply
        </Button>
      </CardContent>
    </Card>
  )
}

function ProjectCard({
  title,
  description,
  tech,
  image,
}: { title: string; description: string; tech: string[]; image: string }) {
  return (
    <Card className="overflow-hidden border-white/10 bg-black/40 backdrop-blur-md transition-all hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-white/70">{description}</p>
        <div>
          <h4 className="mb-2 text-sm font-medium">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/90">
                {item}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function BenefitCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-4 rounded-lg border border-white/10 bg-black/40 p-4 backdrop-blur-md transition-all hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-white"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{description}</p>
      </div>
    </div>
  )
}
