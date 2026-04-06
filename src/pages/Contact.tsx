import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schemas/contact.schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const form = useForm({ resolver: zodResolver(contactSchema) });

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <form className="space-y-4">
        <Input placeholder="Name" {...form.register("name")} />
        <Input placeholder="Email" {...form.register("email")} />
        <Textarea placeholder="Message" {...form.register("message")} />
        <Button className="w-full">Send Message</Button>
      </form>
    </div>
  );
}
