import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/kavia/accordion";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Accordion",
  component: Accordion,
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>Yes. It comes with default styles that match the other components.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Content for section 2.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Accordion"
      description="A vertically stacked set of interactive headings that each reveal an associated section of content. Built on Radix UI Accordion."
      shadcnCommand="accordion"
      importCode={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/kavia/accordion";`}
      usageCode={`// Single open at a time (collapsible)
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

// Multiple open at once
<Accordion type="multiple">
  <AccordionItem value="q1">
    <AccordionTrigger>Question 1</AccordionTrigger>
    <AccordionContent>Answer 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="q2">
    <AccordionTrigger>Question 2</AccordionTrigger>
    <AccordionContent>Answer 2</AccordionContent>
  </AccordionItem>
</Accordion>`}
      preview={
        <Accordion type="single" collapsible className="w-full max-w-sm">
          <AccordionItem value="a">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. WAI-ARIA compliant.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="b">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>Yes, with smooth CSS transitions.</AccordionContent>
          </AccordionItem>
        </Accordion>
      }
      props={[
        { name: "type", type: '"single" | "multiple"', required: true, description: 'Determines if one or many items can be open. Use "single" with collapsible for FAQ-style.' },
        { name: "collapsible", type: "boolean", default: "false", description: 'When type="single", allows the open item to be collapsed.' },
        { name: "defaultValue", type: "string | string[]", description: "The value(s) of the item(s) that are open by default." },
        { name: "value", type: "string | string[]", description: "Controlled open state value(s)." },
        { name: "onValueChange", type: "(value: string | string[]) => void", description: "Callback when open state changes." },
      ]}
      tokens={[
        { token: "--border", value: "225 6% 87%", description: "AccordionItem divider border color." },
        { token: "--foreground", value: "228 6% 17%", description: "Trigger text color." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "Content text color." },
        { token: "--accent", value: "214 91% 95%", description: "Trigger hover background." },
      ]}
      notes={[
        'Each AccordionItem must have a unique value prop.',
        'Use type="single" collapsible for FAQ sections where only one answer shows at a time.',
        'Use type="multiple" for filters or settings panels.',
        'AccordionTrigger renders a <button> — fully keyboard accessible.',
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
