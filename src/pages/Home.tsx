
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
  AlertTriangle
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { LearningModal } from '@/components/LearningModal'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { ImmersiveButton } from '@/components/ImmersiveButton'
import { ImmersiveTooltip } from '@/components/ImmersiveTooltip'

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
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 sm:mb-6">
              <Badge variant="secondary" className="mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium">
                <BookOpen className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Your Essential Law Enforcement Guide
              </Badge>
            </div>
            
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-3 sm:mb-4">
              <span className="text-foreground">PD RP</span>{' '}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Guide
              </span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed sm:leading-7 mb-6 sm:mb-8 px-4 sm:px-0">
              Master law enforcement roleplay with comprehensive guides covering 10-codes, 
              SOPs, penal codes, and everything you need for authentic GTA RP experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
              <ImmersiveButton 
                size="lg" 
                glow
                floating
                className="group w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium"
                onClick={() => setIsLearningModalOpen(true)}
              >
                <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </ImmersiveButton>
              <ImmersiveTooltip content="Learn more about our comprehensive law enforcement guides">
                <Link to="/about" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base hover-lift">
                    Learn More
                  </Button>
                </Link>
              </ImmersiveTooltip>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
              Explore Categories
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Navigate through our comprehensive collection of law enforcement resources, 
              each designed to enhance your roleplay experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {categoryCards.map((category, index) => (
              <ImmersiveTooltip key={index} content={`Explore ${category.title} - ${category.description}`}>
                <Link to={category.href} className="group block">
                  <Card className="immersive-card relative h-full transition-all duration-300 hover-lift border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
                    {category.popular && (
                      <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs pulse-gentle">
                        Popular
                      </Badge>
                    )}
                    
                    <CardHeader className="pb-3 sm:pb-4 text-center">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 sm:mb-4 mx-auto hover-scale transition-transform duration-300`}>
                        <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <CardTitle className="font-heading text-base sm:text-lg group-hover:text-primary transition-colors duration-200">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="text-center px-4 sm:px-6">
                      <CardDescription className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
                        {category.description}
                      </CardDescription>
                      
                      <div className="flex items-center justify-center text-xs sm:text-sm text-primary font-medium group-hover:translate-x-1 transition-transform duration-200">
                        Explore <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ImmersiveTooltip>
            ))}
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
            <ImmersiveButton size="lg" floating className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base">
              <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Share Feedback
            </ImmersiveButton>
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
            <ImmersiveButton 
              size="lg" 
              glow
              pulse
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
              onClick={() => setIsLearningModalOpen(true)}
            >
              <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Get Started Now
            </ImmersiveButton>
            <a href="https://forms.gle/qRnadpZqkHahsq7U6" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base hover-lift">
                <MessageSquare className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Share Feedback
              </Button>
            </a>
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
