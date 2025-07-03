import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BorrowModal } from "@/pages/allBooks/components/BorrowModal";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import { Edit2, Trash2, View } from "lucide-react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export function BookCard({ book }) {
  // handle book delete
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await deleteBook(book?._id);
          console.log("Handle delete er res is ", res);

          if (res?.data?.success) {
            Swal.fire({
              title: "Deleted!",
              text: "Your book has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          console.log("delete er error is", error);
          toast.error(error?.message);
        }
      }
    });
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex justify-between items-center ">
          <CardTitle>{book?.title}</CardTitle>
          {book?.genre === "FANTASY" && (
            <Badge variant="destructive">{book?.genre}</Badge>
          )}
          {book?.genre === "NON_FICTION" && (
            <Badge variant="secondary">{book?.genre}</Badge>
          )}
          {book?.genre === "SCIENCE" && (
            <Badge variant="destructive">{book?.genre}</Badge>
          )}
          {book?.genre === "HISTORY" && (
            <Badge variant="default">{book?.genre}</Badge>
          )}
          {book?.genre === "BIOGRAPHY" && (
            <Badge variant="destructive">{book?.genre}</Badge>
          )}
          {book?.genre === "FICTION" && (
            <Badge variant="default">{book?.genre}</Badge>
          )}
        </div>

        <CardDescription>
          <div className="space-y-1">
            <p>{book?.author}</p>
            <p>
              <span className="font-semibold">ISBN:</span> {book?.isbn}
            </p>
            <p>
              {book?.copies > 0
                ? `${book?.copies} Copies Available`
                : `This Book is Not Available`}{" "}
            </p>

            <p className="mt-5">{book?.description}</p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-2 justify-between ">
        <Button onClick={handleDelete} type="submit" className="">
          <Trash2></Trash2>{" "}
        </Button>
        <Link to={`/edit-book/${book?._id}`}>
          <Button type="submit" className="">
            <Edit2></Edit2>{" "}
          </Button>
        </Link>
        <Link to={`/books/${book?._id}`}>
          <Button type="submit" className="">
            <View />{" "}
          </Button>
        </Link>

        <Button type="submit" className="">
          <BorrowModal bookId={book?._id} isHome={true}></BorrowModal>
        </Button>
      </CardFooter>
    </Card>
  );
}
