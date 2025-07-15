import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  CreditCard, 
  Bot, 
  Palette, 
  Database, 
  BarChart3,
  Zap,
  Globe,
  Lock
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise Authentication",
    description: "Better Auth v1.2.8 with Google OAuth, session management, and multi-provider support",
    badge: "Secure",
    color: "text-green-600"
  },
  {
    icon: CreditCard,
    title: "Subscription Management",
    description: "Polar.sh integration with webhooks, customer portal, and real-time billing",
    badge: "Revenue",
    color: "text-blue-600"
  },
  {
    icon: Bot,
    title: "AI Integration",
    description: "OpenAI-powered chatbot with markdown rendering and conversation memory",
    badge: "AI",
    color: "text-purple-600"
  },
  {
    icon: Palette,
    title: "Modern UI/UX",
    description: "Tailwind CSS v4, shadcn/ui components, and dark/light theme support",
    badge: "Design",
    color: "text-pink-600"
  },
  {
    icon: Database,
    title: "Database & Storage",
    description: "Neon PostgreSQL with Drizzle ORM and Cloudflare R2 for file storage",
    badge: "Data",
    color: "text-orange-600"
  },
  {
    icon: BarChart3,
    title: "Analytics & Monitoring",
    description: "PostHog integration for user behavior tracking and custom events",
    badge: "Insights",
    color: "text-indigo-600"
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Next.js 15 with Turbopack, Server Components, and built-in optimizations",
    badge: "Fast",
    color: "text-yellow-600"
  },
  {
    icon: Globe,
    title: "Production Ready",
    description: "Vercel deployment, error tracking, and comprehensive monitoring setup",
    badge: "Deploy",
    color: "text-teal-600"
  },
  {
    icon: Lock,
    title: "Type Safety",
    description: "Full TypeScript support with Zod validation and type-safe database queries",
    badge: "Safe",
    color: "text-red-600"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400">
            Everything You Need to Build & Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete toolkit with enterprise-grade features, modern architecture, 
            and developer-friendly APIs to accelerate your SaaS development.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            All features are production-ready and actively maintained
          </div>
        </div>
      </div>
    </section>
  );
}
