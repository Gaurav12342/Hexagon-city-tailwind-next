"use client";

import AppLayout from "@/components/AppLayout";
import Image from "next/image";
import ReactPlayer from "react-player";
import img1 from "@/images/image-1.png";
import img2 from "@/images/image-2.png";
import img3 from "@/images/image-3.png";
import { Carousel } from "react-responsive-carousel";
import rightArrow from "@/images/right-arrow.png";
import leftArrow from "@/images/left-arrow.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <AppLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="w-full flex justify-center mb-4">
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={false}
            interval={5000}
            stopOnHover={false}
            centerMode={true}
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    top: "calc(50% - 15px)",
                    width: 30,
                    height: 30,
                    color: "white",
                    cursor: "pointer",
                    right: 15,
                  }}
                >
                  <Image
                    alt="hexagon-logo"
                    width={10}
                    height={5}
                    src={rightArrow}
                  />
                </button>
              )
            }
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    top: "calc(50% - 15px)",
                    width: 30,
                    height: 30,
                    color: "white",
                    cursor: "pointer",
                    left: 15,
                  }}
                >
                  <Image
                    alt="hexagon-logo"
                    width={10}
                    height={5}
                    src={leftArrow}
                  />
                </button>
              )
            }
          >
            <div>
              <Image alt="hexagon-logo" width={100} height={40} src={img1} />
            </div>
            <div>
              <Image alt="hexagon-logo" width={100} height={40} src={img2} />
            </div>
            <div>
              <Image alt="hexagon-logo" width={100} height={40} src={img3} />
            </div>
          </Carousel>
        </div>

        <div className="w-full mt-20">
          <div className="flex justify-center">
            <ReactPlayer
              width={"80%"}
              url="https://www.youtube.com/watch?v=IfrrIYjKwDU"
            />
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
