
import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Radio, 
  FileText, 
  GraduationCap, 
  Scale, 
  Gavel, 
  AlertTriangle, 
  FileCode, 
  Shield,
  ArrowRight,
  Star,
  Users,
  BookOpen,
  MessageSquare
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const categoryCards = [
  {
    title: 'Basic Codes',
    description: 'Essential 10-codes and communication protocols for daily operations',
    icon: Radio,
    href: '/basic-codes/10-codes',
    color: 'from-blue-500 to-blue-600',
    popular: true
  },
  {
    title: 'Standard Operating Procedures',
    description: 'Comprehensive SOPs for training, MEU, SEU, and ASD operations',
    icon: FileText,
    href: '/sop/training',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Advanced SOPs',
    description: 'Advanced terminology and command ranking procedures',
    icon: GraduationCap,
    href: '/advanced-sop/terms',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Penal Codes',
    description: 'Complete breakdown of felonies, misdemeanors, and infractions',
    icon: Scale,
    href: '/penal-codes/types',
    color: 'from-red-500 to-red-600',
    popular: true
  },
  {
    title: 'Amendments',
    description: 'Constitutional amendments relevant to law enforcement',
    icon: Gavel,
    href: '/amendments',
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Case Laws',
    description: 'Important case law precedents and legal decisions',
    icon: Shield,
    href: '/case-laws',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    title: 'Situations & Topics',
    description: 'Common scenarios and frequently confusing topics explained',
    icon: AlertTriangle,
    href: '/situations-topics/situations',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    title: 'Short Forms',
    description: 'Abbreviations and acronyms used in law enforcement',
    icon: FileCode,
    href: '/short-forms',
    color: 'from-teal-500 to-teal-600'
  }
]

const stats = [
  { icon: BookOpen, label: 'Comprehensive Guides', value: '8+' },
  { icon: Users, label: 'Active Community', value: '1K+' },
  { icon: Star, label: 'User Rating', value: '4.9' }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
                ✨ Your Essential Law Enforcement Guide
              </Badge>
            </div>
            
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
              <span className="text-foreground">PD RP</span>{' '}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Guide
              </span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-8 mb-10">
              Master law enforcement roleplay with comprehensive guides covering 10-codes, 
              SOPs, penal codes, and everything you need for authentic GTA RP experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/basic-codes/10-codes">
                <Button size="lg" className="group px-8 py-3 text-lg font-medium">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold font-heading text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
              Explore Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Navigate through our comprehensive collection of law enforcement resources, 
              each designed to enhance your roleplay experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryCards.map((category, index) => (
              <Link key={index} to={category.href} className="group">
                <Card className="relative h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
                  {category.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                      Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors duration-200">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </CardDescription>
                    
                    <div className="mt-4 flex items-center text-sm text-primary font-medium group-hover:translate-x-1 transition-transform duration-200">
                      Explore <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-background border-t border-border">
        <div className="mx-auto max-w-4xl text-center px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
            Help Us Improve
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your feedback is invaluable in making this guide better for the entire community. 
            Share your thoughts, report issues, or suggest new features.
          </p>
          <a href="https://forms.gle/qRnadpZqkHahsq7U6" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="px-8 py-3">
              <MessageSquare className="mr-2 h-5 w-5" />
              Share Feedback
            </Button>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-background border-t border-border">
        <div className="mx-auto max-w-4xl text-center px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
            Ready to Master Law Enforcement RP?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of roleplayers who rely on our comprehensive guides for 
            authentic and immersive law enforcement experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/basic-codes/10-codes">
              <Button size="lg" className="px-8 py-3">
                Get Started Now
              </Button>
            </Link>
            <a href="https://forms.gle/qRnadpZqkHahsq7U6" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="px-8 py-3">
                Share Feedback
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
