import { CheckCircle } from 'lucide-react';
import principalImage from '@/assets/principal.png';

const About = () => {
  const highlights = [
    'Experienced and dedicated faculty',
    'Modern teaching methodologies',
    'Focus on holistic development',
    'Strong academic track record',
    'Safe and nurturing environment',
    'Extra-curricular activities',
  ];

  return (
    <section id="about" className="py-20 bg-muted section-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-3xl text-accent font-semibold mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Legacy of <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            For over 10 years, Shree Shivaraj English Boarding School has been 
            committed to providing quality education and shaping future leaders.
          </p>
        </div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2  gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why Shree Shivaraj?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At Shree Shivaraj English Boarding School, we believe in nurturing 
              every child's potential. Our comprehensive curriculum, combined with 
              modern facilities and experienced teachers, creates the perfect 
              environment for academic excellence and personal growth.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We focus on developing well-rounded individuals who are prepared 
              to face the challenges of the modern world while staying rooted 
              in our cultural values.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Principal Message */}
          <div className="bg-card rounded-2xl shadow-xl p-8">
            <div className="flex flex-col items-center text-center">
              <img
                src={principalImage}
                alt="Principal"
                className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-accent"
              />
              <h4 className="text-xl font-bold text-foreground mb-2">
                Principal's Message
              </h4>
              <p className="text-muted-foreground italic leading-relaxed mb-4">
                "Education is not just about academic excellence; it's about 
                building character, developing skills, and creating responsible 
                citizens. At Shree Shivaraj, we are committed to providing a 
                holistic learning experience that prepares our students for life."
              </p>
              <p className="font-semibold text-primary">Mr. Dip Kumar Chaudhary</p>
              <p className="text-sm text-muted-foreground">Principal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
