import Loader from "@/components/module/commonComponent/Loader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "@/redux/api/baseApi";
import type { TCreateBookForm } from "@/types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { toast } from "react-toastify";

export function EditBook() {
  const { id } = useParams();
  const { data: bookData, isLoading } = useGetSingleBookQuery(id);
  const book = bookData?.data;

  const [updateBook] = useUpdateBookMutation();

  const form = useForm({
    defaultValues: {
      title: book?.title,
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: 0,
      available: true,
    },
  });

  useEffect(() => {
    if (book) {
      form.reset({
        title: book?.title || "",
        author: book?.author || "",
        genre: book?.genre || "",
        isbn: book?.isbn || "",
        description: book?.description || "",
        copies: book?.copies || 0,
        available: book?.available || true,
      });
    }
  }, [book, form]);

  async function onSubmit(data: TCreateBookForm) {
    const updatedData = { ...data, copies: Number(data?.copies) };
    try {
      const res = await updateBook({ bookId: id, updatedData: updatedData });

      console.log("updated res is ", res);
      if (res?.data?.success) {
        toast.success(`${res?.data?.message},  😍`);
      } else {
        toast.error(`No changes detacted!`);
      }
    } catch (error) {
      console.log("error is in catch ", error);
    }
  }

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <section className="max-w-[500px] mx-auto">
      <div>
        <h2 className="w-full mx-auto mt-4 text-center font-semibold text-3xl">
          Add New Book
        </h2>
        <img
          className="w-[200px] rounded-2xl mx-auto mb-8 mt-3"
          src="https://www.shutterstock.com/image-photo/book-open-pages-close-up-600nw-2562942291.jpg"
          alt=""
        />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input required placeholder="Book Title" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input required placeholder="Book Author" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="genre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Genre</FormLabel>
                <Select
                  required
                  onValueChange={field.onChange}
                  value={field.value || undefined}
                  defaultValue={book?.genre || undefined}
                >
                  <FormControl className="w-full">
                    <SelectTrigger>
                      <SelectValue placeholder="Select Genre" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="FICTION">FICTION</SelectItem>
                    <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                    <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                    <SelectItem value="HISTORY">HISTORY</SelectItem>
                    <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                    <SelectItem value="FANTASY">FANTASY</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isbn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ISBN</FormLabel>
                <FormControl>
                  <Input required placeholder="Book ISBN" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input required placeholder="Description" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="copies"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Copies</FormLabel>
                <FormControl>
                  <Input
                    required
                    type="number"
                    placeholder="Copies"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="available"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Availability</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={String(field.value)}
                  defaultValue={book?.available}
                >
                  <FormControl className="w-full">
                    <SelectTrigger>
                      <SelectValue placeholder="Select book availability" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="true">Available</SelectItem>
                    <SelectItem value="false">Unavailable</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <Button type="submit">Added</Button>
        </form>
      </Form>
    </section>
  );
}
