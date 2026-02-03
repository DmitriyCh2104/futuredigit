"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users, Target, Calendar, BarChart3, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function GestionProjetPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const services = [
    {
      icon: Target,
      title: "Pilotage de projet",
      description: "Direction et coordination de projets complexes",
    },
    {
      icon: Users,
      title: "Management d'equipe",
      description: "Animation et motivation des equipes projet",
    },
    {
      icon: Calendar,
      title: "Planification",
      description: "Gestion des delais et des ressources",
    },
    {
      icon: BarChart3,
      title: "Reporting & KPIs",
      description: "Tableaux de bord et indicateurs de performance",
    },
  ]

  const benefits = [
    "Methodologies Agile/Scrum",
    "Certification PMP/Prince2",
    "Gestion des risques",
    "Communication efficace",
    "Budget maitrise",
    "Qualite garantie",
  ]

  return (
    <div className="min-h-screen bg-background">
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
                  <NavigationMenuTrigger className="bg-foreground text-background hover:bg-foreground/90 hover:text-background data-[state=open]:bg-foreground/90 data-[state=open]:text-background">
                    Conseil
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[300px]">
                      <NavigationMenuLink asChild>
                        <a href="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
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
                  <NavigationMenuTrigger className="bg-foreground text-background hover:bg-foreground/90 hover:text-background data-[state=open]:bg-foreground/90 data-[state=open]:text-background">
                    Regie
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[300px]">
                      <NavigationMenuLink asChild>
                        <a href="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
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
                  <NavigationMenuTrigger className="bg-foreground text-background hover:bg-foreground/90 hover:text-background data-[state=open]:bg-foreground/90 data-[state=open]:text-background">
                    Renfort des equipes
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-[300px]">
                      <NavigationMenuLink asChild>
                        <a href="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
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
                        <a href="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Banque Finance</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Solutions pour le secteur bancaire et financier
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="/" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
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
                        <a href="/expertises/software-engineering" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Software Engineering</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Developpement logiciel sur mesure
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="/expertises/cloud" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Cloud</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Infrastructure cloud scalable et securisee
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="/expertises/infrastructure-devops" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Infrastructure & DevOps</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Automatisation et gestion d'infrastructure
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="/expertises/gestion-projet" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Gestion de projet</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Pilotage et coordination de projets IT
                          </p>
                        </a>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <a href="/expertises/sap" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
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
            <Link href="/#contact">
              <Button className="bg-foreground text-background hover:bg-foreground/90">Contact</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/expertise-gestion.jpg"
            alt="Gestion de projet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Nos Expertises
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Gestion de Projet
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Nos chefs de projet certifies pilotent vos initiatives IT avec rigueur 
              et methodologie pour garantir le succes de vos projets.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Discutons de votre projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#020817]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un accompagnement complet pour mener vos projets a bien
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="p-6 rounded-2xl bg-[#0a101f]/60 border border-gray-800/50 hover:bg-[#0a101f]/80 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-[#020817] to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pourquoi nous choisir?</h2>
              <p className="text-muted-foreground mb-8">
                Nos chefs de projet combinent expertise technique et competences 
                manageriales pour delivrer vos projets dans les temps et le budget.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/images/expertise-gestion-2.jpg"
                alt="Project management"
                className="rounded-2xl w-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#020817]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Besoin d'un chef de projet experimente?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous pour discuter de vos besoins en gestion de projet et 
              decouvrir comment nous pouvons vous accompagner.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                Contactez-nous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="text-xl font-bold">
              Madison
            </Link>
            <p className="text-sm text-muted-foreground">
              © 2026 Madison. Tous droits reserves.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
