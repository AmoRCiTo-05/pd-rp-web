
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Terminal, Search, X } from 'lucide-react';

interface Command {
  command: string;
  description: string;
  category: string;
}

const commands: Command[] = [
  {
    command: "/jail",
    description: "Sends suspect to jail",
    category: "Enforcement"
  },
  {
    command: "/bail",
    description: "Unjail",
    category: "Enforcement"
  },
  {
    command: "/fine",
    description: "Fine",
    category: "Enforcement"
  },
  {
    command: "/impound",
    description: "Seize vehicle",
    category: "Vehicle"
  },
  {
    command: "/depot",
    description: "Tow vehicle max 1500",
    category: "Vehicle"
  },
  {
    command: "/gsr",
    description: "Gun powder test",
    category: "Investigation"
  },
  {
    command: "/clearblood",
    description: "Take blood sample",
    category: "Investigation"
  },
  {
    command: "/clearcasings",
    description: "Take bullet casing",
    category: "Investigation"
  },
  {
    command: "/confiscate",
    description: "Confiscate cash",
    category: "Enforcement"
  },
  {
    command: "/hc",
    description: "Hard cuff unable to move (don't use it unless urgent)",
    category: "Control"
  },
  {
    command: "/liveryp [number]",
    description: "Change livery",
    category: "Vehicle"
  },
  {
    command: "/radar",
    description: "Bring up speed radar",
    category: "Traffic"
  },
  {
    command: "/callsign",
    description: "Update call sign",
    category: "Admin"
  },
  {
    command: "/palert",
    description: "Police alert use before any situation",
    category: "Communication"
  },
  {
    command: "/flagplate",
    description: "Flag plate",
    category: "Investigation"
  },
  {
    command: "/unflagplate",
    description: "Unflag plate",
    category: "Investigation"
  },
  {
    command: "/mdt",
    description: "MDT portal",
    category: "Admin"
  }
];

const InGameCommands = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCommands = useMemo(() => {
    if (!searchQuery.trim()) {
      return commands;
    }

    const query = searchQuery.toLowerCase().trim();
    return commands.filter(cmd => 
      cmd.command.toLowerCase().includes(query) ||
      cmd.description.toLowerCase().includes(query) ||
      cmd.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  const groupedCommands = useMemo(() => {
    const grouped: { [key: string]: Command[] } = {};
    filteredCommands.forEach(cmd => {
      if (!grouped[cmd.category]) {
        grouped[cmd.category] = [];
      }
      grouped[cmd.category].push(cmd);
    });
    return grouped;
  }, [filteredCommands]);

  const categories = Object.keys(groupedCommands).sort();

  return (
    <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-6xl">
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            In-Game PD Commands
          </h1>
        </div>
        <p className="text-sm sm:text-lg text-muted-foreground mb-4 sm:mb-6">
          Essential in-game police department commands for law enforcement roleplay and operations.
        </p>

        {/* Search Bar */}
        <div className="relative mb-4 sm:mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search commands, descriptions, or categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 p-0 hover:bg-muted"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          <Badge variant="secondary">{categories.length} Categories</Badge>
          <Badge variant="secondary">{filteredCommands.length} Commands</Badge>
          {searchQuery && (
            <Badge variant="outline">Filtered Results</Badge>
          )}
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {filteredCommands.length === 0 ? (
          <Card className="p-6 sm:p-8 text-center">
            <p className="text-muted-foreground">No commands found matching your search.</p>
          </Card>
        ) : (
          categories.map((category) => (
            <Card key={category} className="border-l-4 border-l-green-500/50">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg sm:text-xl">{category}</CardTitle>
                  <Badge variant="outline" className="text-xs sm:text-sm">{groupedCommands[category].length}</Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3 sm:space-y-4">
                  {groupedCommands[category].map((command, index) => (
                    <div key={index} className="border rounded-lg p-3 sm:p-4 bg-card/50 hover:bg-card/70 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <code className="text-sm sm:text-base font-mono bg-green-100/50 dark:bg-green-950/30 px-2 py-1 rounded text-green-700 dark:text-green-300 break-all">
                            {command.command}
                          </code>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {command.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default InGameCommands;
