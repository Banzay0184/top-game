import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const EmblaCarousel = (props) => {
  const options = { containScroll: "trimSnaps" };
  const { children, images } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="mb-8">
      <div
        className="max-w-sm mb-4 overflow-hidden rounded-2xl md:max-w-2xl"
        ref={emblaRef}
      >
        <div className="grid grid-flow-col gap-3">{children}</div>
      </div>
      <div className="flex justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"rounded-full w-2 h-2 bg-input-50".concat(
              index === selectedIndex ? " embla__dot--selected bg-white" : ""
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
