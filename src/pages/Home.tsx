
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Code, FileText, Scale, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/3 to-transparent">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative container mx-auto px-4 pt-16 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-16 w-16 text-primary mr-4" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              LEO Academy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Your comprehensive resource for law enforcement training, procedures, and protocols.
              Master the codes, understand the procedures, and excel in your service.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Code className="h-4 w-4 mr-2" />
                10-Codes & Communications
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <FileText className="h-4 w-4 mr-2" />
                Standard Operating Procedures
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Scale className="h-4 w-4 mr-2" />
                Penal Codes & Laws
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Link to="/basic-codes/10-codes">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer border-l-4 border-l-blue-500/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Code className="h-8 w-8 text-blue-600 mr-3 group-hover:scale-110 transition-transform" />
                    <div>
                      <CardTitle className="text-lg">10-Codes</CardTitle>
                      <Badge variant="outline" className="text-xs">Basic Codes</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Essential police radio codes for effective communication during operations and emergencies.
                </CardDescription>
              </CardContent>
            </Card>
          </Link>

          <Link to="/sop/training">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer border-l-4 border-l-green-500/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-8 w-8 text-green-600 mr-3 group-hover:scale-110 transition-transform" />
                    <div>
                      <CardTitle className="text-lg">Training SOP</CardTitle>
                      <Badge variant="outline" className="text-xs">S.O.P</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Standard Operating Procedures for training protocols and field operations.
                </CardDescription>
              </CardContent>
            </Card>
          </Link>

          <Link to="/penal-codes/types">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer border-l-4 border-l-purple-500/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Scale className="h-8 w-8 text-purple-600 mr-3 group-hover:scale-110 transition-transform" />
                    <div>
                      <CardTitle className="text-lg">Penal Codes</CardTitle>
                      <Badge variant="outline" className="text-xs">Legal</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive penal code classifications including felonies, misdemeanors, and infractions.
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Resources</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Link to="/situation-questions">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center">
                    <BookOpen className="h-8 w-8 text-orange-600 mr-3 group-hover:scale-110 transition-transform" />
                    <div>
                      <CardTitle>Situation Based Questions</CardTitle>
                      <Badge variant="secondary" className="text-xs mt-1">Interview Prep</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Comprehensive collection of scenario-based questions for law enforcement interviews and training.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to="/confusing-topics">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center">
                    <BookOpen className="h-8 w-8 text-red-600 mr-3 group-hover:scale-110 transition-transform" />
                    <div>
                      <CardTitle>Confusing Topics</CardTitle>
                      <Badge variant="secondary" className="text-xs mt-1">Reference</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Detailed explanations of confusing SOP topics to clarify common misconceptions.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
