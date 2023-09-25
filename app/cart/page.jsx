import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const page = () => {
  const invoices = [
    {
      invoice:
        "https://bc-img.s3.ap-south-1.amazonaws.com/images/cover/bc/9780552997034_16712669550.jpg",
      paymentStatus: "Manual For Living",
      totalAmount: "$250.00",
    },
    {
      invoice:
        "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tales_serial.jpg",
      paymentStatus: "A Tale of Two Cities",
      totalAmount: "$150.00",
    },
    {
      invoice:
        "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-270/edition/9781529077209.jpg",
      paymentStatus: "The Line of Beauty",
      totalAmount: "$350.00",
    },
    // {
    //   invoice:
    //     "https://bc-img.s3.ap-south-1.amazonaws.com/images/cover/568/9780552151764.jpg",
    //   paymentStatus: "DECEPTION POINT",
    //   totalAmount: "$450.00",
    // },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-[60%]">
        <h1 className="text-[35px] mt-8 text-center">Shopping Cart</h1>
        <Table className="mt-3">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}

          <TableBody>
            {invoices.map((invoice) => (
              <>
                <TableRow key={invoice.invoice} className="w-auto ">
                  <TableCell className="font-medium  h-auto w-1/3">
                    <Card className="p-4 flex items-center justify-center">
                      <img
                        src={invoice.invoice}
                        className="w-[120px] h-[180px]"
                      />
                    </Card>
                  </TableCell>
                  <TableCell className=" w-2/3 h-auto relative p-6 ">
                    <h1 className="absolute top-10 text-[20px] font-bold text-[#222]">
                      {invoice.paymentStatus}{" "}
                    </h1>
                    <div className="flex items-center gap-3">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          height="30"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="#5e9c76"
                            d="M5.5 14.3L0 8.9 1.5 7.5 5.5 11.5 14.5 2.4 16 3.8z"
                          ></path>
                        </svg>
                      </span>{" "}
                      <p className="text-[20px]">In Stock</p>
                    </div>
                  </TableCell>

                  <TableCell className="text-right font-medium text-[25px] w-1/3">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              </>
            ))}
            <TableRow>
              <TableCell>
                <h1 className="font-medium text-[25px] mt-5 ml-8">Subtotal</h1>
              </TableCell>
              <TableCell></TableCell>
              <TableCell>
                <h1 className="text-[30px] font-semibold ml-3">$400</h1>{" "}
              </TableCell>
            </TableRow>
            {/* <Separator className="mb-5 " /> */}
          </TableBody>
        </Table>
        <Button className="mt-4 w-full mb-4 text-[20px]">
          Proceed to checkout
        </Button>
      </div>
    </div>
  );
};

export default page;
