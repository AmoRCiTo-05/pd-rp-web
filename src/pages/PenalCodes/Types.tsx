
import React from 'react'
import { Link } from 'react-router-dom'
import { Scale, ArrowRight, Gavel, AlertTriangle, FileText } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BackToTop } from '@/components/BackToTop'

const penalCodeTypes = [
  {
    title: 'Felony',
    description: 'Serious crimes punishable by imprisonment for more than one year or capital punishment',
    icon: Scale,
    href: '/penal-codes/felony',
    color: 'from-red-500 to-red-600',
    severity: 'High',
    examples: ['Murder', 'Kidnapping', 'Armed Robbery', 'Drug Trafficking'],
    maxSentence: 'Life/HUT'
  },
  {
    title: 'Misdemeanor',
    description: 'Lesser offenses typically punishable by less than one year in jail',
    icon: Gavel,
    href: '/penal-codes/misdemeanor',
    color: 'from-orange-500 to-orange-600',
    severity: 'Medium',
    examples: ['Assault', 'Petty Theft', 'DUI', 'Trespassing'],
    maxSentence: '30 months'
  },
  {
    title: 'Infraction',
    description: 'Minor violations typically punishable by fines rather than imprisonment',
    icon: FileText,
    href: '/penal-codes/infraction',
    color: 'from-yellow-500 to-yellow-600',
    severity: 'Low',
    examples: ['Speeding', 'Parking Violations', 'Jaywalking', 'Littering'],
    maxSentence: 'Fines/Citations'
  }
]

export default function PenalCodesTypes() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Scale className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold">Types of Charges</h1>
              <p className="text-muted-foreground">Understanding the classification of criminal offenses</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <Card className="mb-8 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader>
            <CardTitle className="font-heading text-2xl flex items-center space-x-3">
              <AlertTriangle className="h-6 w-6 text-primary" />
              <span>Criminal Classification System</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed mb-4">
              Criminal offenses are classified into three main categories based on their severity and potential punishment. 
              Understanding these classifications is crucial for law enforcement officers to apply appropriate procedures 
              and determine the correct level of response.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border">
                <div className="font-semibold text-red-500 mb-1">Felony</div>
                <div className="text-sm text-muted-foreground">Most Serious</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border">
                <div className="font-semibold text-orange-500 mb-1">Misdemeanor</div>
                <div className="text-sm text-muted-foreground">Moderate</div>
              </div>
              <div className="text-center p-4 bg-card/50 rounded-lg border border-border">
                <div className="font-semibold text-yellow-500 mb-1">Infraction</div>
                <div className="text-sm text-muted-foreground">Minor</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Types Grid */}
        <div className="grid gap-8 lg:grid-cols-1">
          {penalCodeTypes.map((type, index) => (
            <Card key={index} className="border-border bg-card/50 hover:bg-card/70 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center`}>
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={type.severity === 'High' ? 'destructive' : type.severity === 'Medium' ? 'default' : 'secondary'}
                      className="mb-2"
                    >
                      {type.severity} Severity
                    </Badge>
                    <div className="text-sm text-muted-foreground">Max: {type.maxSentence}</div>
                  </div>
                </div>
                <CardTitle className="font-heading text-2xl mb-2">{type.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {type.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">Common Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, exampleIndex) => (
                        <Badge key={exampleIndex} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={type.href}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium group transition-colors"
                  >
                    View All {type.title} Codes
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legal Notes */}
        <Card className="mt-8 border-orange-200 bg-orange-50/10">
          <CardHeader>
            <CardTitle className="font-heading text-xl flex items-center space-x-3 text-orange-600">
              <AlertTriangle className="h-5 w-5" />
              <span>Important Legal Notes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <p>
                <strong>HUT (Held Until Trial):</strong> Reserved for the most serious offenses where bail is typically denied.
              </p>
              <p>
                <strong>Capital Offense:</strong> Crimes that may be punishable by life imprisonment or other severe penalties.
              </p>
              <p>
                <strong>Sentence Modifications:</strong> Actual sentences may vary based on circumstances, criminal history, and judicial discretion.
              </p>
              <p>
                <strong>License Points:</strong> Apply only to vehicle-related offenses and affect driving privileges.
              </p>
            </div>
          </CardContent>
        </Card>

        <BackToTop />
      </div>
    </div>
  )
}
