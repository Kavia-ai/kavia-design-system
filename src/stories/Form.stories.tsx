import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/kavia/form";
import { Input } from "@/kavia/input";
import { Button } from "@/kavia/button";
import { DevGuide } from "./DevGuide";

const meta: Meta = {
  title: "Components/Form",
  component: Form,
};
export default meta;
type Story = StoryObj;

const formSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters." }),
});

export const Default: Story = {
  render: () => {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: { username: "" },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-[350px]">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
};

export const DeveloperGuide: Story = {
  name: "Developer Guide",
  render: () => (
    <DevGuide
      name="Form"
      description="Building forms with react-hook-form and Zod validation. The Form component provides accessible form fields with label, description, and validation message."
      shadcnCommand="form"
      importCode={`import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/kavia/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";`}
      usageCode={`const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
});

function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", email: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}`}
      preview={
        <div className="w-full max-w-xs space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Username</label>
            <Input placeholder="johndoe" />
            <p className="text-xs text-muted-foreground">Your public display name.</p>
          </div>
          <Button size="sm">Submit</Button>
        </div>
      }
      props={[
        { name: "control", type: "Control<T>", required: true, description: "(FormField) The form control object from useForm()." },
        { name: "name", type: "string", required: true, description: "(FormField) Field name matching your schema key." },
        { name: "render", type: "({ field }) => ReactNode", required: true, description: "(FormField) Render function receiving the field props." },
      ]}
      tokens={[
        { token: "--foreground", value: "228 6% 17%", description: "Label and description text color." },
        { token: "--muted-foreground", value: "224 5% 44%", description: "FormDescription text color." },
        { token: "--destructive", value: "4 64% 48%", description: "FormMessage (error) text color." },
        { token: "--border", value: "225 6% 87%", description: "Input border color." },
        { token: "--ring", value: "216 81% 60%", description: "Input focus ring color." },
      ]}
      notes={[
        "Install react-hook-form and zod: npm install react-hook-form @hookform/resolvers zod.",
        "Spread field props into your control: <Input {...field} /> — this handles value, onChange, onBlur, ref.",
        "FormMessage automatically displays the validation error for the field.",
        "Use form.reset() to clear the form after successful submission.",
        "FormField uses React Context to connect to the parent Form's control.",
      ]}
    />
  ),
  parameters: { layout: "padded" },
};
