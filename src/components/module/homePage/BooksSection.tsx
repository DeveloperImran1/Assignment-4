import { Button } from "@/components/ui/button";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { TBook } from "@/types";
import { NavLink } from "react-router";
import Loader from "../commonComponent/Loader";
import { Banner } from "./Banner";
import { BookCard } from "./BookCard";

const BooksSection = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);
  const books: TBook[] = data?.data?.slice(0, 8);

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <section>
      <Banner></Banner>

      <div>
        <h2 className="w-full mx-auto my-4 text-center font-semibold text-3xl">
          Popular Books
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {books?.map((book) => (
          <BookCard book={book} key={book?._id}></BookCard>
        ))}
      </div>
      <NavLink className="mt-5 flex justify-center items-center" to="/books">
        <Button className="mx-auto ">See All</Button>
      </NavLink>
    </section>
  );
};

export default BooksSection;
