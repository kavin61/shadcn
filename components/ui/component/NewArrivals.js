import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import QuickPreview from "./QuickPreview";
const NewArrivals = () => {
  let [data, setData] = useState([]);
  const [editModel, setEditModel] = useState(false);
  const [bookData, setBookData] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const closeModal = () => {
    setEditModel(false);
  };

  useEffect(() => {
    let jsonData = [
      {
        id: "4f6c1039-6e64-4dea-b085-c6fc37b8d6c6",
        title: "Manual for Living",
        author: "Epictetus",
        description:
          "Jack Gladney is the creator and chairman of Hitler studies at the College-on-the-Hill. This is the story of his absurd life; a life that is going well enough, until a chemical spill from a train carriage releases an ‘Airborne Toxic Event’ and Jack is forced to confront his biggest fear – his own mortality",
        picture:
          "https://www.bookswagon.com/productimages/images200/456/9781421522456.jpg",
        rating: 2,
        stock: true,
        actualPrice: 2500,
        discountedPercent: 25,
        TotalPages: 788,
      },
      {
        id: "4f6c1039-6e64-4dea-b085-c6fc37b8d6c6",
        title: "One Piece",
        author: " Eiichiro Oda",
        description:
          "Jack Gladney is the creator and chairman of Hitler studies at the College-on-the-Hill. This is the story of his absurd life; a life that is going well enough, until a chemical spill from a train carriage releases an ‘Airborne Toxic Event’ and Jack is forced to confront his biggest fear – his own mortality",
        picture:
          "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/700/9781974738700.jpg",
        rating: 2,
        stock: true,
        actualPrice: 2500,
        discountedPercent: 27,
        TotalPages: 788,
      },
      {
        id: "75954440-70b2-4909-8c98-d5bb0185e3dc",
        title: "White Noise",
        author: "Don DeLillo",
        description:
          "Jack Gladney is the creator and chairman of Hitler studies at the College-on-the-Hill. This is the story of his absurd life; a life that is going well enough, until a chemical spill from a train carriage releases an ‘Airborne Toxic Event’ and Jack is forced to confront his biggest fear – his own mortality",
        picture:
          "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781529077261.jpg",
        rating: 2,
        stock: true,
        actualPrice: 2500,
        discountedPercent: 27,
        TotalPages: 788,
      },
      {
        id: "211cd8ec-3497-4069-8ebd-7035ece7fbc8",
        title: "DBILL BRYSON DOWN UNDER",
        author: "BILL BRYSON",
        description:
          "Intelligence Office. She Is Also The Daughter Of A Senator Currently Running For President. Her Fathers Main Offensive, And A Very Popular One, Against The Incumbent President Is To Attack The Huge Amount Of NASA Funding. Rachel Is Barely On Speaking Terms With Her Father, Believing Him .",
        picture:
          "https://bc-img.s3.ap-south-1.amazonaws.com/images/cover/bc/9780552997034_16712669550.jpg",
        rating: 3,
        stock: true,
        actualPrice: 230,
        discountedPercent: 18,
        TotalPages: 150,
      },
      {
        id: "1ad81659-426b-481f-bf57-4b506b20fa54",
        title: "The Catcher in the Rye ",
        author: "J. D. Salinger",
        description:
          "The Catcher in the Rye is an American novel by J. D. Salinger that was partially published in serial form 1945–46 before being novelized in 1951. Originally intended for adults, it is often read by adolescents for its themes of angst and alienation, and as a critique .",
        picture:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/220px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
        rating: 3,
        stock: true,
        actualPrice: 1500,
        discountedPercent: 25,
        TotalPages: 900,
      },
      {
        id: "34286c6a-dc48-4648-af1d-621d567958af",
        title: "DECEPTION POINT ",
        author: "DAN BROWN",
        description:
          "achel Sexton Works For The National Reconnaissance Office As An Intelligence Officer. She Is Also The Daughter Of A Senator Currently Running For President. Her Fathers Main Offensive, And A Very Popular One, Against The ",
        picture:
          "https://bc-img.s3.ap-south-1.amazonaws.com/images/cover/568/9780552151764.jpg",
        rating: 4,
        stock: false,
        actualPrice: 500,
        discountedPercent: 33,
        TotalPages: 300,
      },
      {
        id: "1d64a921-9761-44f6-a99b-cf0d28ef346e",
        title: "The Line of Beauty",
        author: "Alan Hollinghurst",
        description:
          " Nick moves into the luxurious Notting Hill home of the Fedden family. since Cat has become attached to him and Toby is moving into his own place.",
        picture:
          "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-270/edition/9781529077209.jpg",
        rating: 4,
        stock: false,
        actualPrice: 2000,
        discountedPercent: 20,
        TotalPages: 588,
      },
      {
        id: "c0fd6bc5-a93a-42c3-a47c-14d4a99dc94b",
        title: "A Tale of Two Cities",
        author: "Charles Dickens",
        description:
          "In 1775, Jerry Cruncher flags down the nightly mail-coach en route from London to Dover. Cruncher is an employee of Tellson's Bank in London; he carries a message for Jarvis ",
        picture:
          "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tales_serial.jpg",
        rating: 4,
        stock: false,
        actualPrice: 1000,
        discountedPercent: 10,
        TotalPages: 200,
      },
    ];
    setData(jsonData);
  }, []);

  return (
    <div className="mt-3">
      <h1 style={{ fontSize: "40px" }} className="ml-10 mb-3">
        NewArrivals{" "}
      </h1>

      <div className="grid grid-cols-4 relative ">
        {data.map((item) => (
          <div className="">
            <div className="ml-10 p-2 w-[220px] mb-10">
              <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                <div className="bg-blue-300 w-full">
                  <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                    {item.discountedPercent}%
                  </div>
                </div>
                <div>
                  <img src={item.picture} className="h-[200px] w-[150px]" />
                </div>
                <Button
                  variant="secondary"
                  className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  onClick={() => {
                    setBookData(item);
                    setEditModel(true);
                    setIsDialogOpen(true);
                  }}
                >
                  Quick Preview
                </Button>
              </Card>

              <div className=" w-[220px] p-2">
                <div>
                  <span
                    className="font-extralight"
                    style={{ fontSize: "12px" }}
                  >
                    {item.title}
                  </span>
                </div>

                <div className="flex  items-center gap-7 mt-4">
                  <span className="font-medium" style={{ fontSize: "20px" }}>
                    ${item.actualPrice}
                  </span>
                  <Button>Add cart</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {editModel && (
        <QuickPreview
          data={bookData}
          editModel={editModel}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default NewArrivals;
