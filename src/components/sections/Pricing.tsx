import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Pricing() {
  const plans = [
    {
      name: "Developer",
      description: "Perfect for fintech startups and small teams",
      price: "$99",
      period: "/month",
      badge: null,
      features: [
        "Up to 10,000 API calls/month",
        "Core banking APIs",
        "Developer documentation",
        "Email support",
        "Basic compliance tools",
        "Sandbox environment",
        "Standard SLA"
      ],
      cta: "Start Integration",
      popular: false
    },
    {
      name: "Business",
      description: "Best for growing financial institutions",
      price: "$499",
      period: "/month",
      badge: "Most Popular",
      features: [
        "Up to 100,000 API calls/month",
        "Full open banking suite",
        "Priority technical support",
        "Advanced security features",
        "Compliance dashboard",
        "Multi-environment access",
        "Custom webhooks",
        "Real-time monitoring",
        "PCI DSS compliance"
      ],
      cta: "Request Demo",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large banks and financial organizations",
      price: "Custom",
      period: "",
      badge: "Contact Sales",
      features: [
        "Unlimited API calls",
        "White-label solutions",
        "24/7 dedicated support",
        "Custom API development",
        "Advanced fraud detection",
        "Multi-region deployment",
        "Dedicated account manager",
        "Custom compliance reporting",
        "On-premise deployment options"
      ],
      cta: "Schedule Consultation",
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            API Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Flexible Banking API
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Scale your financial technology with our comprehensive open banking APIs. 
            Enterprise-grade security, compliance-ready, and built for financial institutions.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={cn(
                "relative overflow-hidden transition-all duration-300 hover:shadow-lg",
                plan.popular 
                  ? "border-primary/50 shadow-lg shadow-primary/10 scale-105" 
                  : "border-border/50 hover:border-primary/20"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}
                
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">
                  {plan.description}
                </CardDescription>
                
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground mb-1">{plan.period}</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={cn(
                    "w-full text-base py-6",
                    plan.popular 
                      ? "bg-primary hover:bg-primary/90" 
                      : ""
                  )}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === "Business" && (
                  <p className="text-center text-sm text-muted-foreground">
                    30-day free trial • Full API access included
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            Need custom banking solutions?
          </h3>
          <p className="text-muted-foreground mb-6">
            We provide tailored open banking APIs and compliance solutions for large financial institutions. 
            Let's discuss your specific regulatory and integration requirements.
          </p>
          <Button variant="outline" size="lg">
            Book Technical Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}