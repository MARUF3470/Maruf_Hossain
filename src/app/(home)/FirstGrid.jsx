"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "@/assets/Maruf1-removebg-preview.png";
import img3 from "@/assets/my-works.png";
import Marquee from "react-fast-marquee";
import { RxDoubleArrowRight } from "react-icons/rx";
import { useEffect } from "react";
import Link from "next/link";
import { PiFilePdfLight } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiFiverr } from "react-icons/si";
import { MdOutlineWavingHand } from "react-icons/md";
const FirstGrid = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="grid lg:grid-cols-4 grid-rows-5 gap-4 w-full mt-24"
    >
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="row-span-5 col-span-2  rounded-3xl bg-gradient-to-r from-base-200 to-base-300"
      >
        <Link href="/about">
          <div className="p-10 flex flex-col lg:flex-row items-center justify-center gap-6 ">
            <Image
              src={img}
              alt="Maruf Hossain "
              width={250}
              height={250}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEAgEGBf/EABoQAQEBAQEBAQAAAAAAAAAAAAACAQMREjH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2YAAAAAAAAAAAAAAAAABm/wAS9FN/iXpoE0y7Ws+g+sAAAAAObrrFUDvruaV9NZQpgczfXRAAAADm75gF9NS9NP6al6aBda56zWueg+0AAAABmt8wmqb6UnqhWvp3KI+msoFU0Zm+ppo2aA0OZo9EdLumtom6AvpSa6M6UmuhGapn6YqnPpR6IAIocrfMdL6aBPSk9030pPdIrv07lEbTuUKrmjZpJNHTQKsp36IymvpUaqirp3aJuhGOlJrozpSbpSozVM/TFUz9CPWABGnNI6afX4m6aCfpqa9O6amvUVnddzS912dFUTp06mnTp0D81r0vNd9VHd0m9brSr0Qnpqbpp3TU3TVQutZ+nK1n1UezADLTN/iXoptN0BL0TWp6JrRS9dweOzgpknSVOHTgN46Mx1UYomzqJsRP0S9NU9EvRUIrWfXaZB7cAIrFpuiq03QEvTE9YpvCKwUrxqcHjc4DU4bOMzhs4DuY741mDcAqsIvFNYR0wRJ0SdFnVJ0BNTDdsg9uAAZr8T9FNfifoCa8IrFFk1gF+Nzjnjc4Dc4bOMThs4DuYNxvMc3AKrCOmKKwjoCPriTqt6o+qKlthu2Qe2ACo5v4RZ+/hFgnsmjrJoHGpZbkDJOkqTZBvHNdwaBdJ+iik/RFSdUfVb1R9QS2w3bKK//Z"
              className="object-cover rounded-ss-3xl rounded-ee-3xl w-full lg:w-[250px]"
              sizes="33vw"
            />
            <div>
              <p className="text-xs text-zinc-500 font-medium uppercase">
                Web Developer
              </p>
              <h1 className="text-white text-4xl font-medium">
                Maruf <br /> Hossain.
              </h1>
              <p className="text-xs text-zinc-500">
                I am a Full Stack Web Developer based on MERN Stack.
              </p>
              <p className="text-3xl flex justify-end">
                <RxDoubleArrowRight />
              </p>
            </div>
          </div>
        </Link>
      </motion.div>
      <div className="col-span-2 rounded-3xl flex items-center  bg-gradient-to-r from-base-200 to-base-300 px-5 py-5 lg:py-0">
        <Marquee className="text-xs">
          FULL STACK * FRONT-END * BACK-END * TAILWIND-CSS * JAVASCRIPT *
          TYPESCRIPT * REACT * NEXT.JS * REDUX * NODE.JS * EXPRESS.JS * MONGO DB
          * FIREBASE * GITHUB *
        </Marquee>
      </div>
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="row-span-4 col-span-2 lg:col-span-1 rounded-3xl  bg-gradient-to-r from-base-200 to-base-300 px-5 py-5"
      >
        <Link href="/projects">
          <Image
            src={img3}
            alt="Maruf Hossain signature"
            width={200}
            height={200}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEAgEGBf/EABoQAQEBAQEBAQAAAAAAAAAAAAACAQMREjH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2YAAAAAAAAAAAAAAAAABm/wAS9FN/iXpoE0y7Ws+g+sAAAAAObrrFUDvruaV9NZQpgczfXRAAAADm75gF9NS9NP6al6aBda56zWueg+0AAAABmt8wmqb6UnqhWvp3KI+msoFU0Zm+ppo2aA0OZo9EdLumtom6AvpSa6M6UmuhGapn6YqnPpR6IAIocrfMdL6aBPSk9030pPdIrv07lEbTuUKrmjZpJNHTQKsp36IymvpUaqirp3aJuhGOlJrozpSbpSozVM/TFUz9CPWABGnNI6afX4m6aCfpqa9O6amvUVnddzS912dFUTp06mnTp0D81r0vNd9VHd0m9brSr0Qnpqbpp3TU3TVQutZ+nK1n1UezADLTN/iXoptN0BL0TWp6JrRS9dweOzgpknSVOHTgN46Mx1UYomzqJsRP0S9NU9EvRUIrWfXaZB7cAIrFpuiq03QEvTE9YpvCKwUrxqcHjc4DU4bOMzhs4DuY741mDcAqsIvFNYR0wRJ0SdFnVJ0BNTDdsg9uAAZr8T9FNfifoCa8IrFFk1gF+Nzjnjc4Dc4bOMThs4DuYNxvMc3AKrCOmKKwjoCPriTqt6o+qKlthu2Qe2ACo5v4RZ+/hFgnsmjrJoHGpZbkDJOkqTZBvHNdwaBdJ+iik/RFSdUfVb1R9QS2w3bKK//Z"
            className="object-cover mx-auto"
            sizes="33vw"
          />
          <div className="flex justify-between items-center mt-5">
            <div>
              <p className="text-xs text-stone-600">SHOWCASE</p>
              <h5 className="text-white">Projects</h5>
            </div>
            <div>
              <p className="text-3xl flex justify-end">
                <RxDoubleArrowRight />
              </p>
            </div>
          </div>
        </Link>
      </motion.div>
      <div className="row-span-4 col-span-2 lg:col-span-1 rounded-3xl  bg-gradient-to-r from-base-200 to-base-300 px-5 py-5">
        <div className="glass flex justify-around w-3/4 lg:w-11/12 mx-auto rounded-3xl py-4">
          <div>
            <a href="/Maruf_Resume (4).pdf" download="Maruf_Resume">
              <motion.button
                download="Maruf_Resume"
                whileTap={{ scale: 0.9 }}
                className="rounded-full text-4xl border p-5 hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-500 hover:text-black duration-300 active:scale-75"
              >
                <PiFilePdfLight />
              </motion.button>
            </a>
            <p className="text-center text-sm">Resume</p>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/s-m-maruf-hossain/">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="rounded-full text-4xl border p-5 hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-500 hover:text-black duration-300 active:scale-75"
              >
                <SlSocialLinkedin />
              </motion.button>
            </a>
            <p className="text-center text-sm">Linkedin</p>
          </div>
        </div>
        <div className="my-2">
          <p className="text-xs text-stone-500 text-center">
            Hello <MdOutlineWavingHand className="text-green-500 inline" />, If
            you like my work and want to work with me,
          </p>
          <div className="flex items-center justify-center gap-2">
            <p className="text-white">Hire Me</p>
            <a
              className="btn btn-sm rounded-sm bg-green-600 text-white text-3xl"
              href="https://www.fiverr.com/maruf_3470"
            >
              <SiFiverr />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstGrid;
