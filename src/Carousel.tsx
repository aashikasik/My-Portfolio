import React, { useState } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-1 shadow hover:bg-blue-100 dark:hover:bg-blue-900"
        aria-label="Previous"
      >
        &#8592;
      </button>
      <img
        src={images[current]}
        alt={`carousel-img-${current}`}
        className="w-full h-48 object-contain rounded-lg"
      />
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-1 shadow hover:bg-blue-100 dark:hover:bg-blue-900"
        aria-label="Next"
      >
        &#8594;
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`inline-block w-2 h-2 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-400 dark:bg-gray-600'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
