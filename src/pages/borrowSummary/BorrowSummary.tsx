import Loader from "@/components/module/commonComponent/Loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBorrowsQuery } from "@/redux/api/baseApi";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
];

function BorrowSummary() {
  const { data, isLoading } = useGetBorrowsQuery(undefined, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });
  const borrowBooks = data?.data;
  console.log("borrow data ", borrowBooks);

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <section>
      <div>
        <h2 className="w-full mx-auto my-4 text-center font-semibold text-3xl">
          Borrow Summary
        </h2>
      </div>

      <Table>
        <TableHeader className="bg-gray-300">
          <TableRow>
            <TableHead>Serial No</TableHead>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Total Quantity</TableHead>
            <TableHead>ISBN</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {borrowBooks.map((borrow, index) => (
            <TableRow key={borrow?.book?.[0]?.isbn}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className="font-medium">
                {borrow?.book?.[0]?.title}
              </TableCell>
              <TableCell className="font-medium">
                {borrow?.totalQuantity}
              </TableCell>
              <TableCell className="font-medium">
                {borrow?.book?.[0]?.isbn}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

export default BorrowSummary;
