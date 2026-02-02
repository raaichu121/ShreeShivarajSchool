import { Monitor, FlaskConical, BookOpen, Dumbbell } from 'lucide-react';
import computerLabImage from '@/assets/computer-lab.jpg';
import libraryImage from '@/assets/library.jpg';
import sportsImage from '@/assets/sports.jpg';

const Facilities = () => {
  const facilities = [
    {
      icon: Monitor,
      title: 'Computer Lab',
      description: 'State-of-the-art computer lab with modern systems and high-speed internet.',
      image: computerLabImage,
    },
    {
      icon: BookOpen,
      title: 'Library',
      description: 'Extensive collection of books, journals, and digital resources.',
      image: libraryImage,
    },
    {
      icon: Dumbbell,
      title: 'Sports Facilities',
      description: 'Playground, indoor games, and professional sports coaching.',
      image: sportsImage,
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-3xl text-accent font-semibold mb-2">Infrastructure</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            World-Class <span className="text-accent">Facilities</span>
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Our School is equipped with modern facilities to provide 
            the best learning environment for our students.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <facility.icon className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-bold">{facility.title}</h3>
                </div>
                <p className="text-primary-foreground/80">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Facilities */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Smart Classrooms', 'Cafeteria', 'Transport', 'Medical Room'].map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
