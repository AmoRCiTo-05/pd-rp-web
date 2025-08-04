
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Terminal, Shield, AlertTriangle } from 'lucide-react';

interface Command {
  command: string;
  description: string;
  category: 'basic' | 'enforcement' | 'evidence' | 'vehicle' | 'status';
  warning?: string;
}

const commands: Command[] = [
  {
    command: '/jail',
    description: 'Sends suspect to jail',
    category: 'enforcement'
  },
  {
    command: '/bail',
    description: 'Unjail',
    category: 'enforcement'
  },
  {
    command: '/fine',
    description: 'Fine',
    category: 'enforcement'
  },
  {
    command: '/impound',
    description: 'Seize vehicle',
    category: 'vehicle'
  },
  {
    command: '/depot',
    description: 'Tow vehicle max 1500',
    category: 'vehicle'
  },
  {
    command: '/gsr',
    description: 'Gun powder test',
    category: 'evidence'
  },
  {
    command: '/clearblood',
    description: 'Take blood sample',
    category: 'evidence'
  },
  {
    command: '/clearcasings',
    description: 'Take bullet casing',
    category: 'evidence'
  },
  {
    command: '/confiscate',
    description: 'Confiscate cash',
    category: 'enforcement'
  },
  {
    command: '/hc',
    description: 'Hard cuff unable to move',
    category: 'enforcement',
    warning: "Don't use it unless urgent"
  },
  {
    command: '/liveryp [number]',
    description: 'Change livery',
    category: 'vehicle'
  },
  {
    command: '/radar',
    description: 'Bring up speed radar',
    category: 'basic'
  },
  {
    command: '/callsign',
    description: 'Update call sign',
    category: 'status'
  },
  {
    command: '/palert',
    description: 'Police alert use before any situation',
    category: 'basic'
  },
  {
    command: '/flagplate',
    description: 'Flag plate',
    category: 'basic'
  },
  {
    command: '/unflagplate',
    description: 'Unflag plate',
    category: 'basic'
  },
  {
    command: '/mdt',
    description: 'MDT portal',
    category: 'basic'
  }
];

const categoryConfig = {
  basic: { label: 'Basic Operations', color: 'bg-blue-500/10 border-blue-500/50', icon: <Shield className="h-4 w-4" /> },
  enforcement: { label: 'Enforcement Actions', color: 'bg-red-500/10 border-red-500/50', icon: <AlertTriangle className="h-4 w-4" /> },
  evidence: { label: 'Evidence Collection', color: 'bg-green-500/10 border-green-500/50', icon: <Terminal className="h-4 w-4" /> },
  vehicle: { label: 'Vehicle Operations', color: 'bg-purple-500/10 border-purple-500/50', icon: <Terminal className="h-4 w-4" /> },
  status: { label: 'Status Management', color: 'bg-orange-500/10 border-orange-500/50', icon: <Shield className="h-4 w-4" /> }
};

const InGameCommands = () => {
  const categorizedCommands = Object.entries(categoryConfig).map(([categoryKey, config]) => ({
    key: categoryKey as keyof typeof categoryConfig,
    ...config,
    commands: commands.filter(cmd => cmd.category === categoryKey)
  }));

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-6xl">
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
          <Terminal className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            In-Game PD Commands
          </h1>
        </div>
        <p className="text-sm sm:text-lg text-muted-foreground mb-4 sm:mb-6">
          Essential in-game police department commands and their functions for law enforcement operations.
        </p>
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          <Badge variant="secondary">{categorizedCommands.length} Categories</Badge>
          <Badge variant="secondary">{commands.length} Commands</Badge>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6">
        {categorizedCommands.map((category) => (
          <Card key={category.key} className={`border-l-4 ${category.color}`}>
            <CardHeader>
              <div className="flex items-center gap-3">
                {category.icon}
                <CardTitle className="text-lg sm:text-xl">{category.label}</CardTitle>
                <Badge variant="outline">{category.commands.length} commands</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {category.commands.map((command, commandIndex) => (
                  <div key={commandIndex} className="border rounded-lg p-3 sm:p-4 bg-card/50">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                      <div className="flex-shrink-0">
                        <code className="bg-muted px-2 py-1 rounded text-xs sm:text-sm font-mono">
                          {command.command}
                        </code>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm sm:text-base mb-1">{command.description}</p>
                        {command.warning && (
                          <div className="flex items-start gap-2 mt-2 p-2 bg-orange-500/10 border border-orange-500/20 rounded">
                            <AlertTriangle className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                            <p className="text-xs sm:text-sm text-orange-700 dark:text-orange-300">
                              <strong>Warning:</strong> {command.warning}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InGameCommands;
