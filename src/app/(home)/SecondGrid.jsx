"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect } from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { GiSpiderWeb } from "react-icons/gi";
import {
  PiVolleyballLight,
  PiTwitterLogoLight,
  PiCameraLight,
  PiPencilCircleLight,
  PiCodeLight,
} from "react-icons/pi";
import img from "@/assets/blog.png";
const SecondGrid = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" grid grid-cols-4 my-6 gap-4">
      <div
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        className="rounded-3xl bg-gradient-to-r from-stone-900 to-stone-950 px-5 py-5"
      >
        <Image
          src={img}
          alt="Maruf Hossain signature"
          width={250}
          height={250}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEAgEGBf/EABoQAQEBAQEBAQAAAAAAAAAAAAACAQMREjH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2YAAAAAAAAAAAAAAAAABm/wAS9FN/iXpoE0y7Ws+g+sAAAAAObrrFUDvruaV9NZQpgczfXRAAAADm75gF9NS9NP6al6aBda56zWueg+0AAAABmt8wmqb6UnqhWvp3KI+msoFU0Zm+ppo2aA0OZo9EdLumtom6AvpSa6M6UmuhGapn6YqnPpR6IAIocrfMdL6aBPSk9030pPdIrv07lEbTuUKrmjZpJNHTQKsp36IymvpUaqirp3aJuhGOlJrozpSbpSozVM/TFUz9CPWABGnNI6afX4m6aCfpqa9O6amvUVnddzS912dFUTp06mnTp0D81r0vNd9VHd0m9brSr0Qnpqbpp3TU3TVQutZ+nK1n1UezADLTN/iXoptN0BL0TWp6JrRS9dweOzgpknSVOHTgN46Mx1UYomzqJsRP0S9NU9EvRUIrWfXaZB7cAIrFpuiq03QEvTE9YpvCKwUrxqcHjc4DU4bOMzhs4DuY741mDcAqsIvFNYR0wRJ0SdFnVJ0BNTDdsg9uAAZr8T9FNfifoCa8IrFFk1gF+Nzjnjc4Dc4bOMThs4DuYNxvMc3AKrCOmKKwjoCPriTqt6o+qKlthu2Qe2ACo5v4RZ+/hFgnsmjrJoHGpZbkDJOkqTZBvHNdwaBdJ+iik/RFSdUfVb1R9QS2w3bKK//Z"
          className="object-cover"
          sizes="33vw"
        />
        <div className="flex justify-between items-center mt-5">
          <div>
            <p className="text-xs text-stone-600">BLOG</p>
            <h5 className="text-white">My Interests</h5>
          </div>
          <div>
            <p className="text-3xl flex justify-end">
              <RxDoubleArrowRight />
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="col-span-2 rounded-3xl flex-none bg-gradient-to-r from-stone-900 to-stone-950 px-5 py-5 h-full"
      >
        <div className="text-5xl flex items-center justify-between w-3/4 h-3/4 mx-auto">
          <PiCameraLight />
          <PiPencilCircleLight />
          <GiSpiderWeb />
          <PiCodeLight />
        </div>
        <div className="flex justify-between items-center mt-2">
          <div>
            <p className="text-xs text-stone-600">STAY WITH ME</p>
            <h5 className="text-white">Profiles</h5>
          </div>
          <div>
            <p className="text-3xl flex justify-end">
              <RxDoubleArrowRight />
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        className="rounded-3xl flex-none bg-gradient-to-r from-stone-900 to-stone-950 px-5 py-5 h-full"
      >
        <div className=" glass flex w-11/12 mx-auto h-24 rounded-3xl py-14">
          <div className="w-1/2  flex justify-evenly items-center">
            <button className="rounded-full text-4xl border p-5 ">
              <PiVolleyballLight />
            </button>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <button className="rounded-full text-4xl border p-5">
              <PiTwitterLogoLight />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">
          <div>
            <p className="text-xs text-stone-600">STAY WITH ME</p>
            <h5 className="text-white">Profiles</h5>
          </div>
          <div>
            <p className="text-3xl flex justify-end">
              <RxDoubleArrowRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondGrid;
