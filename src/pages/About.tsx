import React from 'react'
import { Shield, Heart, Users, Star, Instagram, MessageSquare, DollarSign } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="font-heading text-4xl font-bold mb-4">About PD RP Guide</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your comprehensive resource for mastering law enforcement roleplay in GTA RP servers.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-8 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="font-heading text-2xl flex items-center space-x-3">
              <Heart className="h-6 w-6 text-primary" />
              <span>Our Mission</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">
              The PD RP Guide was created to bridge the gap between new roleplayers and experienced law enforcement 
              officers in GTA RP communities. We believe that authentic, well-informed roleplay enhances the experience 
              for everyone involved, creating more immersive and engaging scenarios.
            </p>
          </CardContent>
        </Card>

        {/* Story */}
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold mb-6">The Story Behind the Guide</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Starting out in law enforcement roleplay can be overwhelming. Between learning 10-codes, understanding 
              procedures, memorizing penal codes, and navigating complex scenarios, new officers often feel lost. 
              This guide was born from the recognition that comprehensive, accessible resources were desperately needed.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              What began as personal notes and reference sheets has evolved into a comprehensive platform designed 
              to help both newcomers and veterans excel in their roleplay. Every section has been carefully crafted 
              based on real-world law enforcement practices, adapted for the unique environment of GTA RP.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-primary" />
                <span>Community Driven</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Built with input from experienced RP communities and continuously updated based on user feedback 
                and evolving roleplay standards.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-primary" />
                <span>Comprehensive Coverage</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                From basic 10-codes to complex case law, we cover every aspect of law enforcement roleplay 
                with detailed explanations and practical examples.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-primary" />
                <span>Accuracy First</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                All content is researched and verified to ensure accuracy and authenticity, providing 
                reliable information you can trust in your roleplay scenarios.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span>Always Improving</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Regular updates and improvements based on community feedback ensure the guide remains 
                current and valuable for all users.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Creator Section */}
        <Card className="mb-8 border-border">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">Meet the Creator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-heading text-2xl font-bold">
                A
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold mb-2">Aansh (AmoRCiTo)</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  An experienced roleplayer and law enforcement enthusiast who recognized the need for 
                  comprehensive, accessible guides in the GTA RP community. With years of experience 
                  in both roleplay and real-world law enforcement knowledge, Aansh created this resource 
                  to help others excel in their roleplay journeys.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">GTA RP Veteran</Badge>
                  <Badge variant="secondary">Community Builder</Badge>
                  <Badge variant="secondary">Guide Creator</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Plans */}
        <Card className="mb-8 border-border">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">What's Next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-semibold">Interactive Training Modules</h4>
                  <p className="text-muted-foreground text-sm">Hands-on practice scenarios for different law enforcement situations</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-semibold">Video Tutorials</h4>
                  <p className="text-muted-foreground text-sm">Step-by-step video guides for complex procedures and scenarios</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-semibold">Community Features</h4>
                  <p className="text-muted-foreground text-sm">User-generated content and community discussions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-semibold">Mobile App</h4>
                  <p className="text-muted-foreground text-sm">Quick reference guide available on your mobile device</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Donation & Support Section */}
        <Card className="mb-8 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="font-heading text-2xl flex items-center space-x-3">
              <DollarSign className="h-6 w-6 text-primary" />
              <span>Support & Donations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                The PD RP Guide is a passion project created to help the GTA RP community. If you find this resource 
                valuable and would like to support its continued development and growth, donations are greatly appreciated.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your support helps cover hosting costs, development time, and allows us to add new features like 
                interactive training modules, video tutorials, and mobile app development. Every contribution, 
                no matter how small, makes a difference in keeping this resource free and accessible to everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="mailto:aanshchopra33@gmail.com?subject=PD RP Guide - Donation Support" className="flex-1">
                  <Button size="lg" className="w-full">
                    <DollarSign className="mr-2 h-5 w-5" />
                    Contact for Donations
                  </Button>
                </a>
                <a href="mailto:aanshchopra33@gmail.com?subject=PD RP Guide - Partnership" className="flex-1">
                  <Button variant="outline" size="lg" className="w-full">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Partnership Inquiries
                  </Button>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-primary/5 to-transparent p-8 rounded-lg border border-primary/20">
          <h2 className="font-heading text-2xl font-bold mb-4">Get Involved</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have suggestions, found an error, or want to contribute? We'd love to hear from you! 
            Your feedback helps make this guide better for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://forms.gle/qRnadpZqkHahsq7U6" target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <MessageSquare className="mr-2 h-5 w-5" />
                Share Feedback
              </Button>
            </a>
            <a href="https://instagram.com/aanshchopra" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Instagram className="mr-2 h-5 w-5" />
                Follow on Instagram
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
