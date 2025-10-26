
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Radio, 
  FileText, 
  GraduationCap, 
  Scale, 
  Gavel, 
  FileCode, 
  Shield,
  ArrowRight,
  MessageSquare,
  BookOpen,
  HelpCircle,
  AlertTriangle,
  Sparkles,
  Zap
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { LearningModal } from '@/components/LearningModal'
import { ParticleField } from '@/components/ParticleField'
import { FloatingElements } from '@/components/FloatingElements'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import { GlowCard } from '@/components/GlowCard'

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
    title: 'Short Forms',
    description: 'Abbreviations and acronyms used in law enforcement',
    icon: FileCode,
    href: '/short-forms',
    color: 'from-teal-500 to-teal-600'
  },
  {
    title: 'Amendments',
    description: 'Constitutional amendments relevant to law enforcement',
    icon: Gavel,
    href: '/amendments',
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Standard Operating Procedures',
    description: 'Comprehensive SOPs for training, MEU, SEU, and ASD operations',
    icon: FileText,
    href: '/sop/training',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Case Laws',
    description: 'Important case law precedents and legal decisions',
    icon: Shield,
    href: '/case-laws',
    color: 'from-indigo-500 to-indigo-600'
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
    title: 'Situation Based Questions',
    description: 'Scenario-based questions to test practical law enforcement knowledge',
    icon: HelpCircle,
    href: '/situation-questions',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    title: 'Confusing Topics',
    description: 'Clarification on commonly misunderstood law enforcement concepts',
    icon: AlertTriangle,
    href: '/confusing-topics',
    color: 'from-pink-500 to-pink-600'
  }
]

export default function Home() {
  const [isLearningModalOpen, setIsLearningModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 border-b border-border min-h-[85vh] flex items-center">
        {/* Decorative backgrounds only on desktop */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <AnimatedBackground />
          <ParticleField />
          <FloatingElements />
        </div>
        <div className="relative container max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 z-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-4 sm:mb-6 flex justify-center">
              <Badge variant="secondary" className="mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-primary/10 hover:bg-primary/20 transition-colors border-primary/20">
                <Sparkles className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:motion-safe:animate-pulse" />
                Your Essential Law Enforcement Guide
                <Zap className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 animate-bounce" />
              </Badge>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 animate-fade-in text-center">
              <span className="text-foreground">PD RP</span>{' '}
              <span className="gradient-text">
                Guide
              </span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-10 text-center">
              Master law enforcement roleplay with comprehensive guides covering 10-codes, 
              SOPs, penal codes, and everything you need for authentic GTA RP experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
              <GlowCard>
                <Button 
                  size="lg" 
                  className="group w-full sm:w-auto px-8 py-3 text-base font-medium interactive-hover shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 transition-all duration-300"
                  onClick={() => setIsLearningModalOpen(true)}
                >
                  <BookOpen className="mr-2 h-5 w-5 md:motion-safe:animate-pulse" />
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </GlowCard>
              <Link to="/about" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-3 text-base interactive-hover glass-effect">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Quick Access Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {[
                { icon: Radio, label: '10-Codes', href: '/basic-codes/10-codes', color: 'from-blue-500 to-blue-600' },
                { icon: Scale, label: 'Penal Codes', href: '/penal-codes/types', color: 'from-red-500 to-red-600' },
                { icon: FileText, label: 'SOPs', href: '/sop/training', color: 'from-green-500 to-green-600' },
                { icon: Shield, label: 'Case Laws', href: '/case-laws', color: 'from-indigo-500 to-indigo-600' },
                { icon: FileCode, label: 'Short Forms', href: '/short-forms', color: 'from-teal-500 to-teal-600' },
                { icon: Gavel, label: 'Amendments', href: '/amendments', color: 'from-orange-500 to-orange-600' }
              ].map((item, index) => (
                <Link key={index} to={item.href} className="group">
                  <GlowCard glowColor="blue">
                    <div className="glass-effect border border-border/50 rounded-lg p-4 sm:p-5 hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-center group-hover:text-primary transition-colors">
                        {item.label}
                      </p>
                    </div>
                  </GlowCard>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rank Evaluation CTA */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-primary/5 to-background border border-border rounded-lg p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-full sm:w-auto">
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-left">Confident about your rank?</h3>
              <p className="text-sm text-muted-foreground mt-1 text-left">Take a Rank Evaluation Test to confirm your knowledge and get tailored recommendations.</p>
            </div>
            <div className="w-full sm:w-auto sm:ml-auto">
              <Link to="/rank-based-questions">
                <Button size="lg" className="w-full sm:w-auto px-4 py-3 flex items-center justify-center">
                  <BookOpen className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span>Take the Rank Evaluation</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-center">
              Explore Categories
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto text-center">
              Navigate through our comprehensive collection of law enforcement resources, 
              each designed to enhance your roleplay experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categoryCards.map((category, index) => {
              const glowColors = ['blue', 'green', 'red', 'purple', 'blue', 'green', 'red', 'purple', 'blue'] as const
              return (
                <Link key={index} to={category.href} className="group">
                  <GlowCard glowColor={glowColors[index % glowColors.length]}>
                    <Card className="relative h-full immersive-card glass-effect group-hover:shadow-lg group-hover:shadow-primary/10 overflow-hidden transform transition-all duration-300 group-hover:scale-[1.02]">
                      {category.popular && (
                        <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs z-20">
                          Popular
                        </Badge>
                      )}
                      
                      <CardHeader className="pb-3 sm:pb-4 text-center relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-lg"></div>
                        
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl relative z-10`}>
                          <category.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white md:motion-safe:animate-pulse" />
                        </div>
                        <CardTitle className="font-heading text-base sm:text-lg group-hover:text-primary transition-colors duration-200 relative z-10 text-center">
                          {category.title}
                        </CardTitle>
                      </CardHeader>
                    
                      <CardContent className="text-center px-4 sm:px-6 pb-6">
                        <CardDescription className="text-muted-foreground leading-relaxed mb-4 text-sm text-center">
                          {category.description}
                        </CardDescription>
                        
                        <div className="flex items-center justify-center text-sm text-primary font-medium group-hover:translate-x-1 transition-transform duration-200">
                          Explore <ArrowRight className="ml-1 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </GlowCard>
                </Link>
              )
            })}
          </div>

          {/* Interactive Highlights Section (descriptive, no unverified numeric claims) */}
          <div className="mt-12 sm:mt-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {[
                { title: 'Codes & Procedures', subtitle: 'Comprehensive reference', icon: Radio },
                { title: 'Case Laws', subtitle: 'Key legal precedents', icon: Scale },
                { title: 'SOPs', subtitle: 'Operational procedures', icon: FileText },
                { title: 'Always Available', subtitle: 'Access anytime', icon: Shield }
              ].map((stat, index) => (
                <GlowCard key={index} glowColor="blue">
                  <div className="glass-effect border border-border/50 rounded-lg p-4 sm:p-6 text-center group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-3 md:motion-safe:animate-pulse" />
                    <div className="text-lg sm:text-xl lg:text-xl font-semibold text-primary mb-1">
                      {stat.title}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {stat.subtitle}
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-10 sm:py-14 bg-gradient-to-br from-primary/5 to-background border-t border-border">
        <div className="mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="p-2 sm:p-2.5 bg-primary/10 rounded-lg">
              <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
            Help Us Improve
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
            Your feedback is invaluable in making this guide better for the entire community. 
            Share your thoughts, report issues, or suggest new features.
          </p>
          <a href="https://forms.gle/qRnadpZqkHahsq7U6" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
              <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Share Feedback
            </Button>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 to-background border-t border-border">
        <div className="mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
            Ready to Master Law Enforcement RP?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
            Join thousands of roleplayers who rely on our comprehensive guides for 
            authentic and immersive law enforcement experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
              onClick={() => setIsLearningModalOpen(true)}
            >
              <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Get Started Now
            </Button>
            <a href="https://forms.gle/qRnadpZqkHahsq7U6" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
                <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Share Feedback
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Rank Evaluation CTA */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-primary/5 to-background border border-border rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="text-left sm:text-left">
              <h3 className="font-heading text-lg sm:text-xl font-semibold">Confident about your rank?</h3>
              <p className="text-sm text-muted-foreground mt-1">Take a Rank Evaluation Test to confirm your knowledge and get tailored recommendations.</p>
            </div>
            <div className="ml-auto">
              <Link to="/rank-based-questions">
                <Button size="default" className="px-4 py-2">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Take the Rank Evaluation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LearningModal 
        isOpen={isLearningModalOpen} 
        onClose={() => setIsLearningModalOpen(false)} 
      />
    </div>
  )
}
