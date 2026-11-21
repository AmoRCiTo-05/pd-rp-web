
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
      {/* Hero Section - Optimized for mobile */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 border-b border-border min-h-[70vh] sm:min-h-[85vh] flex items-center">
        {/* Decorative backgrounds only on desktop */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          <AnimatedBackground />
          <ParticleField />
          <FloatingElements />
        </div>
        <div className="relative container max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16 z-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 sm:mb-6 flex justify-center">
              <Badge variant="secondary" className="mb-2 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-primary/10 hover:bg-primary/20 transition-colors border-primary/20 touch-manipulation">
                <Sparkles className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 motion-safe:animate-pulse" />
                Your Essential Law Enforcement Guide
                <Zap className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 animate-bounce" />
              </Badge>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-3 sm:mb-6 animate-fade-in text-center">
              <span className="text-foreground">PD RP</span>{' '}
              <span className="gradient-text">
                Guide
              </span>
            </h1>
            
            <p className="mx-auto max-w-3xl text-sm sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-10 text-center px-2">
              Master law enforcement roleplay with comprehensive guides covering 10-codes, 
              SOPs, penal codes, and everything you need for authentic GTA RP experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-12 px-4 sm:px-0">
              <GlowCard>
                <Button 
                  size="lg" 
                  className="group w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 transition-all duration-300 active:scale-95 touch-manipulation"
                  onClick={() => setIsLearningModalOpen(true)}
                >
                  <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5 motion-safe:animate-pulse" />
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </GlowCard>
              <Link to="/about" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base glass-effect active:scale-95 touch-manipulation">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Quick Access Grid - Optimized for mobile touch */}
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 max-w-4xl mx-auto px-2 sm:px-0">

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
                    <div className="glass-effect border border-border/50 rounded-lg p-3 sm:p-5 hover:border-primary/50 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-primary/10 active:scale-95 touch-manipulation">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-1.5 sm:mb-2 mx-auto group-hover:scale-110 transition-transform duration-200`}>
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <p className="text-[10px] sm:text-sm font-medium text-center leading-tight min-h-[2.5em] flex items-center justify-center group-hover:text-primary transition-colors">
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



      {/* Categories Grid */}
      <section className="py-6 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-5 sm:mb-10">
            <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4 text-center">
              Explore Categories
            </h2>
            <p className="text-xs sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto text-center px-2">
              Navigate through our comprehensive collection of law enforcement resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">

            {categoryCards.map((category, index) => {
              const glowColors = ['blue', 'green', 'red', 'purple', 'blue', 'green', 'red', 'purple', 'blue'] as const
              return (
                <Link key={index} to={category.href} className="group">
                  <GlowCard glowColor={glowColors[index % glowColors.length]}>
                    <Card className="relative h-full glass-effect group-hover:shadow-lg group-hover:shadow-primary/10 overflow-hidden transition-all duration-200 md:group-hover:scale-[1.02] active:scale-[0.98] touch-manipulation">
                      {category.popular && (
                        <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground text-[10px] sm:text-xs z-20">
                          Popular
                        </Badge>
                      )}
                      
                      <CardHeader className="pb-2 sm:pb-4 text-center relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg"></div>
                        
                        <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-2 sm:mb-4 mx-auto md:group-hover:scale-110 md:group-hover:rotate-3 transition-all duration-200 shadow-lg relative z-10`}>
                          <category.icon className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
                        </div>
                        <CardTitle className="font-heading text-sm sm:text-lg group-hover:text-primary transition-colors duration-200 relative z-10 text-center">
                          {category.title}
                        </CardTitle>
                      </CardHeader>
                    
                      <CardContent className="text-center px-3 sm:px-6 pb-4 sm:pb-6">
                        <CardDescription className="text-muted-foreground leading-relaxed mb-2 sm:mb-4 text-xs sm:text-sm text-center line-clamp-2">
                          {category.description}
                        </CardDescription>
                        
                        <div className="flex items-center justify-center text-xs sm:text-sm text-primary font-medium group-hover:translate-x-1 transition-transform duration-200">
                          Explore <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </GlowCard>
                </Link>
              )
            })}

          </div>

          {/* Interactive Highlights Section */}
          <div className="mt-8 sm:mt-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-6">
              {[
                { title: 'Codes', subtitle: 'Reference', icon: Radio },
                { title: 'Case Laws', subtitle: 'Precedents', icon: Scale },
                { title: 'SOPs', subtitle: 'Procedures', icon: FileText },
                { title: 'Available', subtitle: 'Anytime', icon: Shield }
              ].map((stat, index) => (
                <GlowCard key={index} glowColor="blue">
                  <div className="glass-effect border border-border/50 rounded-lg p-3 sm:p-6 text-center group hover:border-primary/50 transition-all duration-200 hover:shadow-lg hover:shadow-primary/10 active:scale-95 touch-manipulation">
                    <stat.icon className="h-5 w-5 sm:h-8 sm:w-8 text-primary mx-auto mb-2 sm:mb-3 motion-safe:animate-pulse" />
                    <div className="text-sm sm:text-xl font-semibold text-primary mb-0.5 sm:mb-1">
                      {stat.title}
                    </div>
                    <div className="text-[10px] sm:text-sm text-muted-foreground">
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
      <section className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-primary/5 to-background border border-border rounded-lg p-5 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-semibold">Confident about your rank?</h3>
              <p className="text-sm sm:text-base text-muted-foreground mt-1.5">Take a Rank Evaluation Test to confirm your knowledge and get tailored recommendations.</p>
            </div>
            <div className="w-full sm:w-auto sm:ml-auto flex-shrink-0">
              <Link to="/rank-based-questions">
                <Button size="lg" className="w-full sm:w-auto px-6 py-3">
                  <BookOpen className="mr-2 h-4 w-4" aria-hidden="true" />
                  <span>Take the Rank Evaluation</span>
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
