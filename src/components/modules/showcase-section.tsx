"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import H2 from "../shared/h2";

export default function ShowcaseSection() {
  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <H2>Show Case</H2>
      </div>
      <div className="flex justify-center items-center">
        {/* <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
          // className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 flex items-center justify-center">
                  <Card>
                    {/* <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold"></span>
                  </CardContent> */}
                    <img
                      src="https://media.istockphoto.com/id/155009646/photo/asphalt-paving.jpg?b=1&s=612x612&w=0&k=20&c=J8zGewG3AmvaGdbfkWV4nbpNnwtUnVw-V5Ig8ZemciA="
                      alt=""
                      width={300}
                      height={300}
                    />
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
