"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Summary from "./Summary";

export default function BookCarousel({
  data,
}: {
  data: {
    text: string;
    value: number;
  }[];
}) 
 {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      partialVisibilityGutter: 20
    }
  };

  return (
    <div className="w-full">
      <Carousel
        responsive={responsive}
        ssr={true}
        deviceType="desktop"
        infinite={true}
        swipeable={true}
        draggable={true}
        containerClass="py-4"
        itemClass="px-4"
        arrows={true}
        renderArrowsWhenDisabled={false}
        partialVisible={true}
      >
        {data.map((item, i) => (
          <Summary key={i} text={item.text} value={item.value} />
        ))}
      </Carousel>
    </div>
  );
}