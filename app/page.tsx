"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, ChevronDown, ArrowUpRight, MapPin, Phone, Mail, Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import "./styles/animations.css"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold">
              Madison
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-black text-white hover:bg-black/90 hover:text-white data-[state=open]:bg-black/90 data-[state=open]:text-white">
                    Conseil
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[300px]">
                      <NavigationMenuLink asChild>
                        <a
                          href="/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Conseil</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Accompagnement strategique et conseil en transformation digitale
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-black text-white hover:bg-black/90 hover:text-white data-[state=open]:bg-black/90 data-[state=open]:text-white">
                    Regie
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[300px]">
                      <NavigationMenuLink asChild>
                        <a
                          href="/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Regie</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Mise a disposition de consultants experts sur site
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-black text-white hover:bg-black/90 hover:text-white data-[state=open]:bg-black/90 data-[state=open]:text-white">
                    Renfort des equipes
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[300px]">
                      <NavigationMenuLink asChild>
                        <a
                          href="/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Renfort des equipes</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Augmentation temporaire de vos equipes IT avec nos talents
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Business Units</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <NavigationMenuLink asChild>
                        <a
                          href="/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Banque Finance</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Solutions pour le secteur bancaire et financier
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a
                          href="/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Ingenierie</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Expertise technique et solutions d'ingenierie
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Nos Expertises</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] lg:grid-cols-2">
                      <NavigationMenuLink asChild>
                        <a
                          href="/expertises/software-engineering"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Software Engineering</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Developpement logiciel sur mesure
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a
                          href="/expertises/cloud"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Cloud</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Infrastructure cloud scalable et securisee
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a
                          href="/expertises/infrastructure-devops"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Infrastructure & DevOps</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Automatisation et gestion d'infrastructure
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a
                          href="/expertises/gestion-projet"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Gestion de projet</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Pilotage et coordination de projets IT
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a
                          href="/expertises/sap"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Expertise SAP</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Integration et conseil SAP
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button>Contact Us</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-black">
        <motion.div style={{ opacity, scale }} className="container mx-auto px-4 pt-32 pb-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Empowering Business Through Technology
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              We specialize in AI consulting, custom software development, and comprehensive technology solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 bg-transparent">
                View Case Studies
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="Technology Team Collaboration"
              width={1200}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
          <ChevronDown className="w-6 h-6 text-white animate-bounce mx-auto" />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gradient-to-b from-background via-background/50 to-[#020817]/50 relative overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-center text-lg font-medium text-muted-foreground mb-12 px-4">
            Trusted by Leading Nigerian Companies
          </h2>
          <div className="relative w-full overflow-hidden gradient-mask">
            <div className="flex space-x-16 animate-scroll">
              {/* First set of logos */}
              {[...companies, ...companies].map((company, index) => (
                <div key={`${company.name}-${index}`} className="flex items-center justify-center min-w-[160px] group">
                  <div className="relative w-32 h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-[#020817] via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive technology solutions tailored to drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-lg bg-card hover:bg-card/80 transition-all border"
              >
                <div className="mb-6">
                  <service.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <ArrowRight className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="group-hover:translate-x-2 transition-transform">
                  Learn More
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-b from-background via-[#020817] to-[#020817] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/screenshot-202025-02-18-20at-209.png')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white bg-clip-text">Industries We Serve</h2>
            <p className="text-lg text-gray-400">Delivering innovative solutions across various sectors</p>
          </div>
          <div className="flex justify-center gap-3">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex-1 max-w-[200px]"
              >
                <div className="relative rounded-2xl bg-[#0a101f]/60 border border-gray-800/50 backdrop-blur-sm hover:bg-[#0a101f]/80 transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="h-[200px] overflow-hidden relative">
                    <img
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a101f]/90" />
                  </div>
                  <div className="p-4 flex flex-col">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#1a1f2e] flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <industry.icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-white group-hover:text-primary transition-colors duration-300">
                        {industry.name}
                      </span>
                    </div>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300">
                      <div className="overflow-hidden">
                        <p className="text-xs text-gray-400 leading-relaxed pt-3">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-b from-[#020817] via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-lg text-muted-foreground">See how we've helped businesses transform with technology</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Card>
                  <CardContent className="p-0">
                    <div className="relative h-64 mb-6">
                      <Image
                        src={study.image || "/placeholder.svg"}
                        alt={study.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {study.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{study.description}</p>
                      <Button variant="ghost" className="group-hover:translate-x-2 transition-transform">
                        Read Case Study
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-background via-[#020817] to-[#020817] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/screenshot-202025-02-18-20at-209.png')] opacity-5 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">What people say</h2>
            <p className="text-lg text-gray-400">
              Discover what our satisfied customers have to say about their experiences with our solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl bg-[#0a101f]/40 border border-gray-800/50 backdrop-blur-sm hover:bg-[#0a101f]/60 transition-all duration-300">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-800/50">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-300 leading-relaxed">"{testimonial.quote}"</blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#020817] via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our technology solutions can help you achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-[#020817] to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/screenshot-202025-02-18-20at-209.png')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Contactez-nous</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Discutons de votre projet et decouvrez comment nous pouvons vous accompagner
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-8 rounded-2xl bg-[#0a101f]/60 border border-gray-800/50 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-6 text-white">Envoyez-nous un message</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        Prenom
                      </label>
                      <Input
                        id="firstName"
                        placeholder="Votre prenom"
                        className="bg-[#0a101f]/80 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Nom
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Votre nom"
                        className="bg-[#0a101f]/80 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      className="bg-[#0a101f]/80 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Entreprise
                    </label>
                    <Input
                      id="company"
                      placeholder="Nom de votre entreprise"
                      className="bg-[#0a101f]/80 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Decrivez votre projet..."
                      rows={4}
                      className="bg-[#0a101f]/80 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary resize-none"
                    />
                  </div>
                  <Button size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90">
                    Envoyer le message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map and Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-gray-800/50 h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1635764821936!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Notre localisation"
                />
              </div>

              {/* Contact Info Cards */}
              <div className="grid gap-4">
                <div className="p-6 rounded-xl bg-[#0a101f]/60 border border-gray-800/50 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Adresse</h4>
                    <p className="text-sm text-gray-400">
                      123 Avenue des Champs-Elysees<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl bg-[#0a101f]/60 border border-gray-800/50 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Telephone</h4>
                      <p className="text-sm text-gray-400">+33 1 23 45 67 89</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-[#0a101f]/60 border border-gray-800/50 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <p className="text-sm text-gray-400">contact@madison.fr</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Madison</h3>
              <p className="text-sm text-muted-foreground">
                Empowering businesses with innovative technology solutions
              </p>
              <div className="flex space-x-4">{/* Social Media Icons */}</div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Custom Software
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Cybersecurity
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">Lagos, Nigeria</li>
                <li>
                  <Link href="mailto:contact@madison.com" className="text-sm text-muted-foreground hover:text-primary">
                    contact@madison.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+2341234567890" className="text-sm text-muted-foreground hover:text-primary">
                    +234 123 456 7890
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Madison. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const companies = [
  { name: "Afrinvest", logo: "/logos/afrinvest.svg" },
  { name: "GTBank", logo: "/logos/gtbank.svg" },
  { name: "Access Bank", logo: "/logos/access-bank.svg" },
  { name: "Dangote", logo: "/logos/dangote.svg" },
  { name: "Paystack", logo: "/logos/paystack.svg" },
  { name: "PiggyVest", logo: "/logos/piggyvest.svg" },
]

const services = [
  {
    title: "AI Strategy & Consulting",
    description: "Transform your business with cutting-edge AI solutions tailored to your needs.",
    features: ["AI Readiness Assessment", "Custom AI Strategy Development", "Implementation Roadmap", "ROI Analysis"],
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
        <path d="M12 12 2.5 2.5" />
        <path d="m2 2 20 20" />
      </svg>
    ),
  },
  {
    title: "Custom Software Development",
    description: "Build scalable and efficient software solutions that drive your business forward.",
    features: ["Web & Mobile Applications", "Enterprise Software", "API Development", "Legacy System Modernization"],
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="m7 8-4 4 4 4" />
        <path d="m17 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing for enhanced scalability and performance.",
    features: ["Cloud Migration", "Infrastructure Optimization", "Cloud Security", "24/7 Monitoring"],
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
]

const industries = [
  {
    name: "Banque",
    description: "Solutions securisees pour le secteur bancaire et financier",
    image: "/images/industry-banque.jpg",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M2 17a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V8.32a5 5 0 0 0-2.64-4.4L12 0 4.64 3.92A5 5 0 0 0 2 8.32Z" />
        <path d="m6 12 6-3 6 3" />
        <path d="M12 9v8" />
      </svg>
    ),
  },
  {
    name: "Assurance",
    description: "Transformation digitale pour les compagnies d'assurance",
    image: "/images/industry-assurance.jpg",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
  },
  {
    name: "Energie",
    description: "Innovation technologique pour le secteur energetique",
    image: "/images/industry-energie.jpg",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    name: "Industrie",
    description: "Digitalisation des processus industriels et manufacturiers",
    image: "/images/industry-industrie.jpg",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      </svg>
    ),
  },
  {
    name: "Telecom",
    description: "Solutions pour les operateurs et fournisseurs de services",
    image: "/images/industry-telecom.jpg",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" x2="12.01" y1="20" y2="20" />
      </svg>
    ),
  },
]

const caseStudies = [
  {
    title: "AI-Powered Customer Service Transformation",
    description:
      "How we helped a leading Nigerian bank reduce response time by 70% and improve customer satisfaction scores by 35% using AI chatbots.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["AI", "Banking", "Customer Service"],
  },
  {
    title: "Cloud Migration Success Story",
    description:
      "Modernizing legacy systems for a major telecommunications provider, resulting in 40% cost reduction and 99.99% uptime.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["Cloud", "Telecom", "Digital Transformation"],
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Small Business Owner",
    quote:
      "Since integrating this solution into our workflow, we've experienced a significant improvement in efficiency and collaboration.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "David Patel",
    title: "Project Manager",
    quote:
      "I've tested numerous options in this category, but one stands out for its intuitive design and comprehensive functionality.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Emily Carter",
    title: "Operations Manager",
    quote:
      "The tool we've adopted has surpassed our expectations, providing invaluable insights and support as our business continues to grow.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q80",
  },
]
