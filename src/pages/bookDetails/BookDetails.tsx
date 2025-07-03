import Loader from "@/components/module/commonComponent/Loader";
import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(id);
  const book = data?.data;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className=" mx-auto p-6 bg-white shadow-lg rounded-2xl grid md:grid-cols-2 gap-6 animate-fade-in">
      <div className="overflow-hidden rounded-xl  transform transition duration-500 hover:scale-105">
        <img
          src={
            "https://media.istockphoto.com/id/183890264/photo/upright-red-book-with-clipping-path.jpg?s=612x612&w=0&k=20&c=zm6sEPnc4zK4MNj307pm3tzgxTbex2sOnb1Ip5hglaA="
          }
          alt={book?.title}
          className="w-full md:w-[60%] mx-auto max-h-[400px] "
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">{book?.title}</h2>
        <p className="text-gray-600">
          <span className="font-semibold">Author:</span> {book?.author}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Genre:</span> {book?.genre}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">ISBN:</span> {book?.isbn}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Description:</span>{" "}
          {book?.description}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Copies:</span> {book?.copies}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Available:</span>{" "}
          {book?.available ? (
            <span className="text-green-600 font-semibold">Yes</span>
          ) : (
            <span className="text-red-600 font-semibold">No</span>
          )}
        </p>
        <p className="text-gray-500 text-sm">
          Added on {new Date(book?.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
