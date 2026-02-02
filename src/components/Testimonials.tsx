import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Chaudhary',
      role: 'Parent',
      content: 'Shree Shivaraj has been instrumental in my child\'s growth. The teachers are dedicated and the environment is perfect for learning.',
      rating: 5,
    },
    {
      name: 'Sita Yadav',
      role: 'Alumni',
      content: 'The values and education I received here shaped my career. Forever grateful to this institution and its wonderful faculty.',
      rating: 5,
    },
    {
      name: 'Rakesh Gupta',
      role: 'Parent',
      content: 'Excellent school with modern facilities and caring staff. My children love coming to school every day.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-muted section-pattern">
      <div className="container mx-auto px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-3xl text-accent font-semibold mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Community <span className="text-primary">Says</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our parents, students, and alumni about their experiences 
            with Shree Shivaraj English Boarding School.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-4 right-4 text-accent/20">
                <Quote className="h-12 w-12" />
              </div>
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{item.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
