"use client";
import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/component/Footer";
const index = () => {
  return (
    <>
      <h1 className="text-[40px] font-bold mb-7 mt-4 ml-3">Top Sellers</h1>
      <div>
        <Glider
          className="glider-container"
          draggable
          hasDots
          slidesToShow={5}
          scrollLock
        >
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
        </Glider>
      </div>
      <h1 className="text-[40px] font-bold mb-7 mt-4 ml-3">Now Trending</h1>
      <div>
        <Glider
          className="glider-container"
          draggable
          hasDots
          slidesToShow={5}
          scrollLock
        >
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div className="flex justify-center items-center">
                <Card className="w-[220px] cursor-pointer h-auto justify-center items-center p-10 bg-white border-r-4 relative group border border-red-950">
                  <div className="bg-blue-300 w-full">
                    <div className="rounded-full bg-red-600 text-white absolute top-0 right-0 p-1 ">
                      20%
                    </div>
                  </div>
                  <div>
                    <img
                      src={
                        "https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/287/9781974736287.jpg"
                      }
                      className="h-[200px] w-[150px]"
                    />
                  </div>
                  <Button
                    variant="secondary"
                    className="mt-2 bg-red-600 text-white hover:bg-red-600 opacity-0 group-hover:opacity-100 rounded-bl-2xl"
                  >
                    Quick Preview
                  </Button>
                </Card>
              </div>
            </span>
          </div>
        </Glider>
      </div>
      <Footer />
    </>
  );
};

export default index;
