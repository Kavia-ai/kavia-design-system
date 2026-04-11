import type { Meta, StoryObj } from "@storybook/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/kavia/carousel";
import { Card, CardContent } from "@/kavia/card";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Carousel",
  component: Carousel,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Carousel className="w-full max-w-xs">
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
    </Carousel>
  ),
};

export const MultipleItems: Story = {
  render: () => (
    <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Carousel"
      description="A carousel with motion and swipe built using Embla Carousel. Supports auto-scrolling, multiple visible items, and looping."
      shadcnCommand="carousel"
      importCode={`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/kavia/carousel";`}
      usageCode={`// Basic carousel
<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {items.map((item, i) => (
      <CarouselItem key={i}>
        <Card>
          <CardContent className="aspect-square flex items-center justify-center p-6">
            {item}
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

// Multiple visible items
<Carousel opts={{ align: "start" }}>
  <CarouselContent>
    {items.map((item, i) => (
      <CarouselItem key={i} className="basis-1/3">
        {item}
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>

// Looping + auto-scroll
<Carousel opts={{ loop: true }}>
  ...
</Carousel>`}
      preview={
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {[1, 2, 3].map((n) => (
              <CarouselItem key={n}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">{n}</span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      }
      props={[
        { name: "opts", type: "EmblaOptionsType", description: "Embla Carousel options object. Key options: loop, align, slidesToScroll, dragFree." },
        { name: "plugins", type: "EmblaPluginType[]", description: "Embla plugins (e.g., Autoplay from embla-carousel-autoplay)." },
        { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Scroll direction." },
        { name: "setApi", type: "(api: CarouselApi) => void", description: "Callback to get the Embla API for programmatic control." },
        { name: "className", type: "string", description: "(CarouselItem) Use basis-1/2, basis-1/3, etc. for multiple visible items." },
      ]}
      notes={[
        "Use CarouselItem className='basis-1/N' to show N items at once.",
        "For autoplay: import Autoplay from 'embla-carousel-autoplay' and add to plugins.",
        "Get the carousel API via setApi prop to programmatically scroll or listen to events.",
        "CarouselPrevious/Next need relative positioning context — wrap Carousel in a relative container.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
