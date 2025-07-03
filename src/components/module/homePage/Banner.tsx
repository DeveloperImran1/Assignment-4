import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const images = [
  "https://www.readora.shop/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqdircc96%2Fimage%2Fupload%2Fv1747059755%2Fcwpp7ufqldm9dg7c9pol.png&w=3840&q=75",
  "https://www.readora.shop/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqdircc96%2Fimage%2Fupload%2Fv1747059856%2Fuzri8gqnz6pl3pgpfbvs.jpg&w=3840&q=75",
  "https://www.readora.shop/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqdircc96%2Fimage%2Fupload%2Fv1747059900%2Fd3g70fdinqcpgftstmuo.jpg&w=3840&q=75",
];
export function Banner() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full mb-6 "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="flex  items-center justify-center ">
                  <img src={image} alt="banner image" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}
