"use client";
import Image from "next/image";
import { GoNorthStar } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ProjectDescription = ({ result }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <h3
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="font-medium uppercase text-stone-500 text-xs my-5"
      >
        {result?.type}
      </h3>
      <div data-aos="zoom-in" data-aos-duration="1000" className="flex">
        <GoNorthStar className="text-2xl lg:text-3xl" />
        <h1 className="text-white text-3xl lg:text-5xl font-medium uppercase">
          {result?.name}
        </h1>
        <GoNorthStar className="text-2xl lg:text-3xl" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center mt-10 mb-20">
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className="uppercase p-5"
        >
          <h1>Technologies i used in this project are,</h1>
          {result?.technologies?.map((tech, i) => (
            <li className="text-stone-500 text-xs  list-none" key={i}>
              <GoNorthStar className="inline mr-2 my-1" />
              {tech}
            </li>
          ))}
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          className="lg:col-span-2 p-5 bg-base-200 rounded-3xl h-fit"
        >
          <div className="bg-base-300 p-5 rounded-3xl">
            <h1 className="uppercase mb-5">Description</h1>
            <p className="text-stone-500 text-xs">
              <GoNorthStar className="inline mr-2 my-1" />
              {result?.description}
            </p>
          </div>
          <div className="bg-base-300 p-5 rounded-3xl mt-2">
            <h1 className="uppercase mb-5">Important Links</h1>
            <div className="flex flex-wrap gap-2 items-center">
              <a href={result?.liveSite}>
                <button className="text-white bg-zinc-900 text-xs px-6 py-2 rounded-md hover:bg-slate-100 hover:text-black duration-300 active:scale-50">
                  Live Site
                </button>
              </a>
              <p className="text-xs text-stone-500">{result?.liveSite}</p>
            </div>
            <div className="flex flex-wrap gap-2 items-center my-1">
              <a href={result?.clientSide}>
                <button className="text-white bg-zinc-900 text-xs px-6 py-2 rounded-md hover:bg-slate-100 hover:text-black duration-300 active:scale-50">
                  Cliet Side
                </button>
              </a>
              <p className="text-xs text-stone-500">{result?.clientSide}</p>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <a href={result?.serverSide}>
                <button className="text-white bg-zinc-900 text-xs px-6 py-2 rounded-md hover:bg-slate-100 hover:text-black duration-300 active:scale-50">
                  Server Side
                </button>
              </a>
              <p className="text-xs text-stone-500">{result?.serverSide}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex mb-10">
          <GoNorthStar className="text-3xl" />
          <h1 className="text-white text-4xl font-medium uppercase">
            Description
          </h1>
          <GoNorthStar className="text-3xl" />
        </div>
        {result?.imageFilesWithFeatures?.map((image) => (
          <div
            key={image?._id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 my-5 justify-center items-center"
          >
            <div data-aos="zoom-in-right" data-aos-duration="1000">
              <Image
                src={`/${image?.originalName}`}
                alt="Maruf Hossain signature"
                width={200}
                height={200}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEAgEGBf/EABoQAQEBAQEBAQAAAAAAAAAAAAACAQMREjH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2YAAAAAAAAAAAAAAAAABm/wAS9FN/iXpoE0y7Ws+g+sAAAAAObrrFUDvruaV9NZQpgczfXRAAAADm75gF9NS9NP6al6aBda56zWueg+0AAAABmt8wmqb6UnqhWvp3KI+msoFU0Zm+ppo2aA0OZo9EdLumtom6AvpSa6M6UmuhGapn6YqnPpR6IAIocrfMdL6aBPSk9030pPdIrv07lEbTuUKrmjZpJNHTQKsp36IymvpUaqirp3aJuhGOlJrozpSbpSozVM/TFUz9CPWABGnNI6afX4m6aCfpqa9O6amvUVnddzS912dFUTp06mnTp0D81r0vNd9VHd0m9brSr0Qnpqbpp3TU3TVQutZ+nK1n1UezADLTN/iXoptN0BL0TWp6JrRS9dweOzgpknSVOHTgN46Mx1UYomzqJsRP0S9NU9EvRUIrWfXaZB7cAIrFpuiq03QEvTE9YpvCKwUrxqcHjc4DU4bOMzhs4DuY741mDcAqsIvFNYR0wRJ0SdFnVJ0BNTDdsg9uAAZr8T9FNfifoCa8IrFFk1gF+Nzjnjc4Dc4bOMThs4DuYNxvMc3AKrCOmKKwjoCPriTqt6o+qKlthu2Qe2ACo5v4RZ+/hFgnsmjrJoHGpZbkDJOkqTZBvHNdwaBdJ+iik/RFSdUfVb1R9QS2w3bKK//Z"
                className="object-cover rounded-3xl w-full"
                sizes="33vw"
              />
            </div>
            <div data-aos="zoom-in-left" data-aos-duration="1000">
              <p className="text-stone-500  font-medium">
                <GoNorthStar className="inline mr-2" />
                {image?.feature}
                <GoNorthStar className="inline ml-2" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDescription;
