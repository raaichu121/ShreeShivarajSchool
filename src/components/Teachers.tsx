import { Facebook, Twitter, Linkedin } from 'lucide-react';
import teacher1 from '@/assets/teacher1.jpg';
import teacher2 from '@/assets/teacher2.jpg';
import teacher3 from '@/assets/teacher3.jpg';
import principal from '@/assets/principal.png';

const Teachers = () => {
  const teachers = [
    {
      name: 'Mr. Dip Kumar Chaudhary',
      role: 'Principal',
      subject: 'Administration, Science',
      image: principal,
    },
    {
      name: 'Mr. RamAwathar Yadav',
      role: 'Vice Principal',
      subject: 'Mathematics, English Literature',
      image: teacher1,
    },
    {
      name: 'Mrs. Shardha Chaudhary',
      role: 'Senior Teacher',
      subject: 'Mathematics',
      image: teacher2,
    },
    {
      name: 'Mrs. Neha Chaudhary',
      role: 'Teacher',
      subject: 'Science',
      image: teacher3,
    },
  ];

  return (
    <section id="teachers" className="py-20 bg-background">
      <div className="container mx-auto px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-3xl text-accent font-semibold mb-2">Our Team</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Expert <span className="text-primary">Teachers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our dedicated and experienced faculty members are committed to 
            providing the best education to every student.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-foreground">
                  {teacher.name}
                </h3>
                <p className="text-accent font-semibold text-sm mb-1">
                  {teacher.role}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {teacher.subject}
                </p>
                <div className="flex justify-center gap-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
