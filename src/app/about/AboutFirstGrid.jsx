"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import img from "@/assets/Maruf2.jpg";
import { GoNorthStar } from "react-icons/go";
import { GiFallingStar } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutFirstGrid = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="grid grid-cols-3 justify-center items-center gap-7">
      <div
        data-aos="zoom-in-right"
        data-aos-duration="1000"
        className="p-6 rounded-3xl bg-base-200"
      >
        <Image
          src={img}
          alt="Maruf Hossain "
          width={250}
          height={250}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEAgEGBf/EABoQAQEBAQEBAQAAAAAAAAAAAAACAQMREjH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2YAAAAAAAAAAAAAAAAABm/wAS9FN/iXpoE0y7Ws+g+sAAAAAObrrFUDvruaV9NZQpgczfXRAAAADm75gF9NS9NP6al6aBda56zWueg+0AAAABmt8wmqb6UnqhWvp3KI+msoFU0Zm+ppo2aA0OZo9EdLumtom6AvpSa6M6UmuhGapn6YqnPpR6IAIocrfMdL6aBPSk9030pPdIrv07lEbTuUKrmjZpJNHTQKsp36IymvpUaqirp3aJuhGOlJrozpSbpSozVM/TFUz9CPWABGnNI6afX4m6aCfpqa9O6amvUVnddzS912dFUTp06mnTp0D81r0vNd9VHd0m9brSr0Qnpqbpp3TU3TVQutZ+nK1n1UezADLTN/iXoptN0BL0TWp6JrRS9dweOzgpknSVOHTgN46Mx1UYomzqJsRP0S9NU9EvRUIrWfXaZB7cAIrFpuiq03QEvTE9YpvCKwUrxqcHjc4DU4bOMzhs4DuY741mDcAqsIvFNYR0wRJ0SdFnVJ0BNTDdsg9uAAZr8T9FNfifoCa8IrFFk1gF+Nzjnjc4Dc4bOMThs4DuYNxvMc3AKrCOmKKwjoCPriTqt6o+qKlthu2Qe2ACo5v4RZ+/hFgnsmjrJoHGpZbkDJOkqTZBvHNdwaBdJ+iik/RFSdUfVb1R9QS2w3bKK//Z"
          className="w-full rounded-3xl"
          sizes="33vw"
        />
      </div>
      <div
        data-aos="zoom-in-left"
        data-aos-duration="1000"
        className="col-span-2 mt-5"
      >
        <div className="grid grid-rows-3 justify-center items-center">
          <div className="row-span-1 h-fit">
            <div className=" flex justify-center items-center">
              <GoNorthStar className="text-5xl" />
              <h1 className="text-white text-7xl font-medium">SELF-SUMMARY</h1>
              <GoNorthStar className="text-5xl" />
            </div>
          </div>
          <div className="row-span-2 p-5 bg-base-200 rounded-3xl">
            <div>
              <GiFallingStar className="text-5xl mb-10" />
              <div className="p-4">
                <h1 className="text-5xl text-white">Maruf Hossain.</h1>
                <p className="text-sm text-zinc-500">
                  I am a MERN Full Stack Web Developer, working on this field
                  for the last 2 years. I can build modern website with modern
                  technologies according to my clients need. I always like to
                  take challenges and try to finish my work ontime. I also like
                  to take care of my clients full satisfaction and try to
                  maintain a good relationship with them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFirstGrid;
