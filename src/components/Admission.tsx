import { FileText, ClipboardCheck, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Admission = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Fill out the online application form with required documents.',
    },
    {
      icon: ClipboardCheck,
      title: 'Entrance Test',
      description: 'Appear for the entrance examination on the scheduled date.',
    },
    {
      icon: Calendar,
      title: 'Interview',
      description: 'Attend an interview with the admission committee.',
    },
    {
      icon: CheckCircle,
      title: 'Confirmation',
      description: 'Complete the admission process and join our family.',
    },
  ];

  return (
    <section className="py-20 bg-muted section-pattern">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-3xl text-accent font-semibold mb-2">Admissions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our <span className="text-primary">Family</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Begin your journey with us. Follow our simple admission process 
            and become part of the Shree Shivaraj family.
          </p>
        </div>

        {/* Admission Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full" />
              <CardContent className="p-6 relative">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="absolute top-4 right-4 text-4xl font-bold text-accent/20">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Admissions Open for 2026-27
          </h3>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
            Limited seats available. Apply now to secure your child's future 
            at <p>Shree Shivaraj English Boarding School.</p>
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gold-gradient text-foreground font-semibold">
              Apply Online
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary">
              Download Prospectus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
