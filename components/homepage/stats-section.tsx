import { Card } from "@/components/ui/card";

const stats = [
  {
    number: "10x",
    label: "Faster Development",
    description: "Skip months of setup and configuration"
  },
  {
    number: "99.9%",
    label: "Uptime Guaranteed",
    description: "Enterprise-grade reliability and monitoring"
  },
  {
    number: "50+",
    label: "Pre-built Components",
    description: "Ready-to-use UI components and layouts"
  },
  {
    number: "24/7",
    label: "Developer Support",
    description: "Community and documentation support"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of developers who have accelerated their SaaS journey
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Production Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>TypeScript First</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
