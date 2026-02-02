import heroImage from '@/assets/hero-school.jpg';
import event1 from '@/assets/event1.jpg';
import studentsGroup from '@/assets/students-group.jpg';
import computerLab from '@/assets/computer-lab.jpg';
import sports from '@/assets/sports.jpg';
import library from '@/assets/library.jpg';

const Gallery = () => {
  const images = [
    { src: heroImage, title: 'School Campus' },
    { src: event1, title: 'Annual Day Celebration' },
    { src: studentsGroup, title: 'Our Students' },
    { src: computerLab, title: 'Computer Lab' },
    { src: sports, title: 'Sports Day' },
    { src: library, title: 'Library' },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-3xl text-accent font-semibold mb-2">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            School Life in <span className="text-primary">Pictures</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse into our vibrant school life through these moments 
            captured across various events and activities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
