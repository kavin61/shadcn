import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const NewArrivals = () => {
  let [data, setData] = useState([]);

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
          "achel Sexton Works For The National Reconnaissance Office As An Intelligence Officer. She Is Also The Daughter Of A Senator Currently Running For President. Her Fathers Main Offensive, And A Very Popular One, Against The Incumbent President Is To Attack The Huge Amount Of NASA Funding. Rachel Is Barely On Speaking Terms With Her Father, Believing Him To Be Totally Corrupt, But Is Still Worried She Is Being Used By The President When He Asks Her To Verify An Amazing Find By NASA, A Find Which Will Settle The Arguments About NASA Funding For Ever.",
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
          "The Catcher in the Rye is an American novel by J. D. Salinger that was partially published in serial form 1945–46 before being novelized in 1951. Originally intended for adults, it is often read by adolescents for its themes of angst and alienation, and as a critique of superficiality in society.[4][5] The novel also deals with complex issues of innocence, identity, belonging, loss, connection, sex, and depression. The main character, Holden Caulfield, has become an icon for teenage rebellion.[6] Caulfield, nearly of age, gives his opinion on a wide variety of topics as he narrates his recent life events.",
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
          "achel Sexton Works For The National Reconnaissance Office As An Intelligence Officer. She Is Also The Daughter Of A Senator Currently Running For President. Her Fathers Main Offensive, And A Very Popular One, Against The Incumbent President Is To Attack The Huge Amount Of NASA Funding. Rachel Is Barely On Speaking Terms With Her Father, Believing Him To Be Totally Corrupt, But Is Still Worried She Is Being Used By The President When He Asks Her To Verify An Amazing Find By NASA, A Find Which Will Settle The Arguments About NASA Funding For Ever.",
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
          "The novel begins in the summer of 1983, shortly after Margaret Thatcher's second victory in the general election. Nick moves into the luxurious Notting Hill home of the Fedden family. The Feddens' son, Toby, is Nick's Oxford University classmate on whom he has a secret crush. Nick's stay is meant to last for a short time while Toby and his parents—Rachel, the daughter of an extremely wealthy Rothschild-like Jewish family, and Gerald, a successful businessman and just-elected Conservative MP for Barwick—are at their holiday home in France. Left at home with Nick is the Feddens' daughter Catherine whom the Feddens are reluctant to leave on her own because of her history of self-harming. Nick helps Cat through a crisis when she considers cutting herself, and when her parents return they suggest he stay on indefinitely, since Cat has become attached to him and Toby is moving into his own place.",
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
          "In 1775, Jerry Cruncher flags down the nightly mail-coach en route from London to Dover. Cruncher is an employee of Tellson's Bank in London; he carries a message for Jarvis Lorry, one of the bank's managers. Lorry sends Jerry back with the cryptic response \"Recalled to Life\", referring to Alexandre Manette, a French physician who has been released from the Bastille after an 18-year imprisonment. On arrival in Dover, Lorry meets Dr Manette's daughter Lucie and her governess, Miss Pross. Believing her father to be dead, Lucie faints at the news that he is alive. Lorry takes her to France for a reunion.",
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

      <div className="grid grid-cols-4 ">
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
    </div>
  );
};

export default NewArrivals;
