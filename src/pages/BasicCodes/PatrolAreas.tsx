
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PatrolAreas = () => {
  const divisions = [
    { number: 1, color: 'Red', area: 'Airport', description: 'Covers the "Airport" area, located in the southern part of the map.' },
    { number: 2, color: 'Yellow', area: 'Port Authority Industrial', description: 'Encompasses the "Port Authority Industrial" area, situated in the southeastern part of the map.' },
    { number: 3, color: 'Green', area: 'Davis', description: 'Corresponds to "Davis," located centrally on the map, north of Division 1 and west of Division 2.' },
    { number: 4, color: 'Light Blue', area: 'Mirror Park', description: 'Represents "Mirror Park," found in the northeastern part of the denser urban area.' },
    { number: 5, color: 'Orange', area: 'Metro', description: 'Designated as "Metro," located centrally, north of Division 3 and west of Division 4.' },
    { number: 6, color: 'Purple', area: 'Vinewood', description: 'Covers "Vinewood," which is the largest northernmost urban division shown on the map.' },
    { number: 7, color: 'Pink', area: 'Vespucci, Del Perro, Little Seoul', description: 'Includes "Vespucci, Del Perro, Little Seoul," located in the western part of the map, west of Division 1, 3, and 5.' }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'Red': return 'bg-red-500';
      case 'Yellow': return 'bg-yellow-500';
      case 'Green': return 'bg-green-500';
      case 'Light Blue': return 'bg-cyan-400';
      case 'Orange': return 'bg-orange-500';
      case 'Purple': return 'bg-purple-500';
      case 'Pink': return 'bg-pink-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">LSPD City Limit Patrol Areas</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The map is divided into seven distinct numbered and color-coded divisions, each corresponding to specific areas within the city.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-0">
            <img 
              src="/lovable-uploads/f55eb133-6697-4528-970e-b96b54042d22.png" 
              alt="LSPD City Limit Patrol Areas Map" 
              className="w-full h-auto rounded-lg"
            />
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {divisions.map((division) => (
            <Card key={division.number} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Badge 
                    className={`${getColorClass(division.color)} text-white font-bold px-3 py-1`}
                  >
                    Division {division.number}
                  </Badge>
                  <span className="text-xl">{division.area}</span>
                  <Badge variant="outline" className="text-xs">
                    {division.color}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {division.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-muted/50">
          <CardHeader>
            <CardTitle className="text-center">Important Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Each division is color-coded on the map for easy identification</li>
              <li>• Officers should familiarize themselves with their assigned division boundaries</li>
              <li>• Cross-division coordination may be required for certain incidents</li>
              <li>• Division assignments may change based on operational needs</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatrolAreas;
