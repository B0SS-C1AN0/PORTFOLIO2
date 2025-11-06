import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Navigation from './Navigation';


const Pricing: React.FC = () => {
  const packages = [
    {
      title: 'Starter',
      description: 'Perfect for small businesses and personal brands',
      price: '₦100,000 – ₦200,000',
      usd: '$70 – $140',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Contact form',
        'Basic SEO setup',
        'Mobile optimized',
        '2 rounds of revisions'
      ],
      popular: false
    },
    {
      title: 'Standard',
      description: 'Ideal for growing businesses with content needs',
      price: '₦200,000 – ₦400,000',
      usd: '$140 – $280',
      features: [
        'Up to 10 pages',
        'Basic CMS integration',
        'Blog functionality',
        'Third-party integrations',
        'Analytics setup',
        '3 rounds of revisions'
      ],
      popular: true
    },
    {
      title: 'E-Commerce',
      description: 'Complete online store solution',
      price: '₦350,000 – ₦800,000',
      usd: '$240 – $560',
      features: [
        'Product catalog',
        'Shopping cart',
        'Secure checkout',
        'Payment gateway integration',
        'Inventory management',
        'Order tracking system'
      ],
      popular: false
    },
    {
      title: 'Web App',
      description: 'Custom solutions for complex requirements',
      price: '₦600,000 – ₦1,500,000',
      usd: '$420 – $1,040',
      features: [
        'Custom backend development',
        'Database architecture',
        'User authentication',
        'Admin dashboard',
        'API integration',
        'Ongoing support'
      ],
      popular: false
    },
  ];

  const addOns = [
    { category: 'Setup & Infrastructure', items: [
      { name: 'Domain & Hosting Setup', price: '₦20,000 – ₦50,000' },
      { name: 'SSL Certificate Installation', price: '₦10,000' }
    ]},
    { category: 'Design & Branding', items: [
      { name: 'UI/UX Design (Figma)', price: '₦50,000 – ₦150,000' },
      { name: 'Branding Package (Logo + Identity)', price: '₦40,000 – ₦120,000' }
    ]},
    { category: 'Content & SEO', items: [
      { name: 'SEO Optimization', price: '₦30,000 – ₦100,000' },
      { name: 'Content Writing (per page)', price: '₦10,000 – ₦30,000' }
    ]},
    { category: 'Performance & Features', items: [
      { name: 'Speed Optimization', price: '₦20,000 – ₦80,000' },
      { name: 'Chatbot Integration', price: '₦50,000 – ₦120,000' }
    ]},
    { category: 'Ongoing Support', items: [
      { name: 'Monthly Maintenance', price: '₦30,000 – ₦100,000' }
    ]}
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your needs. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative group hover:scale-105 transition-all duration-300 ${
                  pkg.popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold">{pkg.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed min-h-[40px]">
                    {pkg.description}
                  </CardDescription>
                  <div className="pt-4">
                    <div className="text-3xl font-bold">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground">{pkg.usd}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full font-semibold ${
                      pkg.popular 
                        ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' 
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Enhance Your Website</h2>
            <p className="text-lg text-muted-foreground">
              Add extra features and services to complement your package
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((category, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex flex-col border-b border-border pb-3 last:border-0">
                        <span className="text-sm font-medium">{item.name}</span>
                        <span className="text-sm text-primary font-semibold">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get in touch today and let's discuss how we can bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold">
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View Portfolio
            </Button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer id="contact" className="border-t border-border py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
              <a href="mailto:louiscolix@gmail.com" className="text-primary hover:underline">
                louiscolix@gmail.com
              </a>
              <span className="hidden sm:inline">•</span>
              <a href="tel:09054101290" className="text-primary hover:underline">
                09054101290
              </a>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>© 2025 Ciano. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;