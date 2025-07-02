import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Edit2, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router";

export function BookCard({ book }) {
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
        <Button type="submit" className="">
          <Trash2></Trash2>{" "}
        </Button>
        <Link to={`/books/3434`}>
          <Button type="submit" className="">
            <Edit2></Edit2>{" "}
          </Button>
        </Link>
        <Link to={`/books/3434`}>
          <Button type="submit" className="">
            <ShoppingBag />{" "}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
