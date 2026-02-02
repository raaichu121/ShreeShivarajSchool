import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import event1 from '@/assets/event2.jpg';
import studentsGroup from '@/assets/event1.jpg';
import sports from '@/assets/sports.jpg';

const News = () => {
  const news = [
    {
      image: event1,
      date: 'January 25, 2026',
      title: 'Annual Day Celebration 2026',
      excerpt: 'Students showcased their talents through cultural performances and award ceremonies.',
    },
    {
      image: studentsGroup,
      date: 'January 15, 2026',
      title: 'Science Exhibition Winners',
      excerpt: 'Our students won multiple prizes at the inter-school science exhibition.',
    },
    {
      image: sports,
      date: 'December 20, 2025',
      title: 'Sports Day Highlights',
      excerpt: 'A day full of athletic events, team spirit, and memorable moments.',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-3xl text-accent font-semibold mb-2">Latest Updates</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stay <span className="text-primary">Updated</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Keep up with the latest news, events, and achievements from 
            Shree Shivaraj English Boarding School.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.excerpt}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
