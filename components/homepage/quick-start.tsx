import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Terminal, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Clone & Install",
    description: "Get started with a single command",
    code: "git clone https://github.com/michaelshimeles/nextjs-starter-kit.git\ncd nextjs-starter-kit\nnpm install",
    time: "2 min"
  },
  {
    step: "02", 
    title: "Configure Environment",
    description: "Set up your environment variables",
    code: "cp .env.example .env.local\n# Add your API keys and database URL\nnpm run db:push",
    time: "3 min"
  },
  {
    step: "03",
    title: "Launch & Customize",
    description: "Start developing your SaaS",
    code: "npm run dev\n# Your app is now running on localhost:3000\n# Start building your features!",
    time: "1 min"
  }
];

export default function QuickStartGuide() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Quick Start
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            From Zero to Production in Minutes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to get your SaaS application up and running. 
            No complex setup required.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {step.time}
                    </Badge>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardHeader>

              <CardContent>
                <div className="relative">
                  <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <div className="flex items-center gap-2 mb-2">
                      <Terminal className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Terminal</span>
                    </div>
                    <pre className="text-xs leading-relaxed whitespace-pre-wrap">
                      {step.code}
                    </pre>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => navigator.clipboard.writeText(step.code)}
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="min-w-[200px]">
              <Link href="/dashboard">
                Start Building Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[200px]">
              <Link href="https://github.com/michaelshimeles/nextjs-starter-kit" target="_blank">
                View Documentation
              </Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Need help? Join our community on Discord for support
          </p>
        </div>
      </div>
    </section>
  );
}
