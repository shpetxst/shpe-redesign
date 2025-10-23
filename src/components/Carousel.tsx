// @ts-expect-error - Type declarations issue with @splidejs/react-splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export interface CarouselItem {
  image?: string;
  title: string;
  subtitle: string;
  alt?: string;
  website: string;
}

interface CarouselProps {
  items: CarouselItem[];
  title?: string;
  description?: string;
}

const Carousel: React.FC<CarouselProps> = ({ items, title, description }) => {
  const defaultImage = '/assets/icons/logo.svg';
  
  return (
    <section className="pt-28 pb-24 md:pt-32 md:pb-28 bg-gray-50">
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            focus: 'center',
            gap: '2rem',
            padding: '2rem',
            breakpoints: {
              1024: {
                perPage: 2,
                gap: '1.5rem',
                padding: '1.5rem',
              },
              640: {
                perPage: 1,
                gap: '1rem',
                padding: '1rem',
              },
            },
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            pauseOnFocus: true,
          }}
          aria-label="Carousel"
        >
          {items.map((item, index) => (
            <SplideSlide key={index} className="overflow-visible">
              <a
                href={item.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${item.title} website`}
                title={`Visit ${item.title}`}
                className="block h-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 rounded-xl relative hover:z-20 focus:z-20"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 h-full flex flex-col">
                  <div className="aspect-video w-full overflow-hidden bg-gray-100 flex items-center justify-center p-6">
                    <img
                      src={item.image || defaultImage}
                      alt={item.alt || item.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-center text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </a>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Carousel;

