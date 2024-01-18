"use client";

import Heading from "@/components/Heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import Empty from "@/components/Empty";
import Loader from "@/components/Loader";

function ConversationPage() {
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const loading = form.formState.isSubmitting;
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt,
      };

      const response = await axios.post("/api/conversation", {
        messages: values.prompt,
      });

      console.log("---resonse.data------", response.data);

      setMessages((prev) => [...prev, response.data, userMessage]);
      form.reset();
    } catch (error: any) {
      //TODO : open pro modal
      console.log(error);
    } finally {
      router.refresh();
    }
  }

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model"
        icon={MessageSquare}
        bgColor="bg-violet-500/10"
        iconColor="text-violet-500"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full border p-4 rounded-lg focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-transparent"
                        disabled={loading}
                        placeholder="How do I calculate the radius of the circle?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2" disabled={loading}>
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {true && (
            <div className="gap-y-10 mx-auto w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !loading && (
            <Empty label="No conversation started" />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message, idx) => (
              <div key={idx}>{message.content as string}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversationPage;
