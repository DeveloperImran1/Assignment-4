import { useGetBooksQuery } from "@/redux/api/baseApi";
import { BookCard } from "./BookCard";

const BooksSection = () => {
  const { data, isLoading, isError } = useGetBooksQuery(undefined);
  const books = data?.data;
  console.log(books);

  if (isLoading) {
    return <p>Books is Loading..</p>;
  }
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
      {books?.map((book) => (
        <BookCard book={book} key={book?._id}></BookCard>
      ))}
    </div>
  );
};

export default BooksSection;
