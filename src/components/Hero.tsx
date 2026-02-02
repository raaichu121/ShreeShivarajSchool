import { GraduationCap, Users, Award, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-school.jpg';

const Hero = () => {
  const stats = [
    { icon: GraduationCap, value: '750+', label: 'Students' },
    { icon: Users, value: '10+', label: 'Teachers' },
    { icon: Calendar, value: '10+', label: 'Years' },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-10 relative z-10 justify-center flex flex-col-reverse md:flex-row items-center md:items-start md:gap-16 py-20">
        <div className="max-w-3xl text-white items-center gap-2 ">
          <p className="text-accent font-semibold mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2" />
            Excellence in Education
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Shree Shivaraj English Boarding School
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Nurturing minds, building character, and shaping the leaders of tomorrow. 
            Join us in a journey of academic excellence and personal growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gold-gradient text-foreground font-semibold hover:opacity-90">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
