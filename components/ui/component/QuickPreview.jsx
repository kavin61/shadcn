import React from "react";
import Modal from "react-modal";
import { Button } from "../button";
const QuickPreview = ({ data, editModel, closeModal }) => {
  console.log(data);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "900px",
    },
  };
  return (
    <>
      <div className="flex justify-center items-center bg-red-700 absolute top-20 right-12">
        <Modal
          isOpen={editModel}
          //   onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="flex justify-end mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 48 48"
              onClick={closeModal}
              className="cursor-pointer"
            >
              <path d="M24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20C44,12.954,35.046,4,24,4z M31.561,29.439	c0.586,0.586,0.586,1.535,0,2.121C31.268,31.854,30.884,32,30.5,32s-0.768-0.146-1.061-0.439L24,26.121l-5.439,5.439	C18.268,31.854,17.884,32,17.5,32s-0.768-0.146-1.061-0.439c-0.586-0.586-0.586-1.535,0-2.121L21.879,24l-5.439-5.439	c-0.586-0.586-0.586-1.535,0-2.121s1.535-0.586,2.121,0L24,21.879l5.439-5.439c0.586-0.586,1.535-0.586,2.121,0s0.586,1.535,0,2.121	L26.121,24L31.561,29.439z"></path>
            </svg>
          </div>
          <div className="flex justify-end mb-2">
            <div className="grid grid-cols-3 ">
              <div>
                <div className="p-6 flex justify-center items-center flex-col">
                  <img src={data.picture} className="h-60 w-40" />
                  <Button className="mt-4">Add To Cart</Button>
                </div>
                {/* <div className="flex justify-start">
                  <Button>Add To Cart</Button>
                </div> */}
              </div>
              <div className="col-span-2">
                <div className="p-6">
                  <div className="flex items-center gap-3 ">
                    <h1 className="font-bold text-[35px] text-red-500">
                      ${data.actualPrice}
                    </h1>
                    <span className="text-[18px] line-through">${1000}</span>
                  </div>
                  <h1 className="text-[20px] mt-2">{data.title}</h1>
                  <h1 className="mt-3 font-mono">
                    By: {data.author} | Publisher: Viz Media, Subs. of Hari Inc
                    | Released: 03 Aug 2023 |
                  </h1>
                  <h1 className="mt-4">{data.description}</h1>
                </div>
                <Button className="w-full">View Product Detail</Button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default QuickPreview;
