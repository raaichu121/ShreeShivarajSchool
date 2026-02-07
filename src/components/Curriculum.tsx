import { BookOpen, FlaskConical, Calculator, Globe, Palette, Music } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Curriculum = () => {
  const subjects = [
    {
      icon: BookOpen,
      title: 'Languages',
      description: 'English, Nepali, and optional Hindi with focus on communication skills.',
    },
    {
      icon: FlaskConical,
      title: 'Science',
      description: 'Physics, Chemistry, and Biology with experienced Teacher.',
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'Strong foundation in mathematics with problem-solving approach.',
    },
    {
      icon: Globe,
      title: 'Social Studies',
      description: 'History, Geography, and Civics for global awareness.',
    },
    {
      icon: Palette,
      title: 'Arts & Crafts',
      description: 'Creative expression through visual arts and handicrafts.',
    },
    {
      icon: Music,
      title: 'Music & Dance',
      description: 'Traditional and contemporary performing arts education.',
    },
  ];

  return (
    <section id="academics" className="py-20 bg-background">
      <div className="container mx-auto px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-3xl text-accent font-semibold mb-2">Academics</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive <span className="text-primary">Curriculum</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our curriculum is designed to provide a well-rounded education that 
            balances academic rigor with creative and physical development.
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <subject.icon className="h-7 w-7 text-primary group-hover:text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {subject.title}
                </h3>
                <p className="text-muted-foreground">
                  {subject.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Programs */}
        <div className="mt-16 grid md:grid-cols-1 gap-8">
          {[
            { title: 'Primary ( Nursery - 5 )', color: 'bg-green-500' },
          
          ].map((program, index) => (
            <div
              key={index}
              className={`${program.color} text-white rounded-xl p-6 text-center`}
            >
              <h4 className="text-xl font-bold">{program.title}</h4>
              <p className="text-white/80 mt-2">Comprehensive education program</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
