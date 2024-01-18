"use client";

import Heading from "@/components/Heading";
import { Music } from "lucide-react";
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
import Empty from "@/components/Empty";
import Loader from "@/components/Loader";

function MusicPage() {
  const [music, setMusic] = useState<string>("");
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
      setMusic("");
      const response = await axios.post("/api/music", {
        values,
      });

      setMusic(response.data.audio);

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
        title="Music Generation"
        description="Turn your prompt into music."
        icon={Music}
        bgColor="bg-emerald-500/10"
        iconColor="text-emerald-500"
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
                        placeholder="Piano solo"
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
          {loading && (
            <div className="gap-y-10 mx-auto w-full flex items-center justify-center">
              <Loader />
            </div>
          )}
          {music === "" && !loading && <Empty label="No music generated." />}
          <div>Music will pop here.</div>
        </div>
      </div>
    </div>
  );
}

export default MusicPage;
