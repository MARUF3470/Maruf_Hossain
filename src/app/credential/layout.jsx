import Image from "next/image";
import {
  PiTwitterLogoLight,
  PiFilePdfLight,
  PiInstagramLogoLight,
} from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
export const metadata = {
  title: "CREDENTIAL",
  description: "Portfolio of Maruf Hossain",
};
const layout = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-3 my-20 gap-16">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="col-span-2 lg:col-span-1 bg-base-200 p-4 rounded-3xl h-fit lg:h-[570px]"
      >
        <Image
          src="/PXL_20230904_072227829.jpg"
          alt="Maruf Hossain "
          width={300}
          height={300}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEAgEGBf/EABoQAQEBAQEBAQAAAAAAAAAAAAACAQMREjH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2YAAAAAAAAAAAAAAAAABm/wAS9FN/iXpoE0y7Ws+g+sAAAAAObrrFUDvruaV9NZQpgczfXRAAAADm75gF9NS9NP6al6aBda56zWueg+0AAAABmt8wmqb6UnqhWvp3KI+msoFU0Zm+ppo2aA0OZo9EdLumtom6AvpSa6M6UmuhGapn6YqnPpR6IAIocrfMdL6aBPSk9030pPdIrv07lEbTuUKrmjZpJNHTQKsp36IymvpUaqirp3aJuhGOlJrozpSbpSozVM/TFUz9CPWABGnNI6afX4m6aCfpqa9O6amvUVnddzS912dFUTp06mnTp0D81r0vNd9VHd0m9brSr0Qnpqbpp3TU3TVQutZ+nK1n1UezADLTN/iXoptN0BL0TWp6JrRS9dweOzgpknSVOHTgN46Mx1UYomzqJsRP0S9NU9EvRUIrWfXaZB7cAIrFpuiq03QEvTE9YpvCKwUrxqcHjc4DU4bOMzhs4DuY741mDcAqsIvFNYR0wRJ0SdFnVJ0BNTDdsg9uAAZr8T9FNfifoCa8IrFFk1gF+Nzjnjc4Dc4bOMThs4DuYNxvMc3AKrCOmKKwjoCPriTqt6o+qKlthu2Qe2ACo5v4RZ+/hFgnsmjrJoHGpZbkDJOkqTZBvHNdwaBdJ+iik/RFSdUfVb1R9QS2w3bKK//Z"
          className="object-cover rounded-3xl w-full"
          sizes="33vw"
        />
        <div className="text-center mt-10">
          <h1 className="text-white font-medium text-3xl">Maruf Hossain</h1>
          <p className="text-sm text-zinc-500">@marufhossain</p>
        </div>
        <div className="flex w-11/12 mx-auto h-24 rounded-3xl py-14">
          <div className="w-1/2  flex justify-evenly items-center">
            <a href="https://www.linkedin.com/in/s-m-maruf-hossain/">
              <button className="rounded-full text-2xl border p-3 hover:bg-gradient-to-r hover:from-slate-300 hover:border-none hover:to-slate-500 hover:text-black duration-300 active:scale-75">
                <SlSocialLinkedin />
              </button>
            </a>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <a href="https://twitter.com/Maruf_3470">
              <button className="rounded-full text-2xl border p-3 hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-500 hover:border-none hover:text-black duration-300 active:scale-75">
                <PiTwitterLogoLight />
              </button>
            </a>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <a href="https://github.com/MARUF3470">
              <button className="rounded-full text-2xl border p-3 hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-500 hover:border-none hover:text-black duration-300 active:scale-75">
                <SiGithub />
              </button>
            </a>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <a href="/Maruf_Resume (4).pdf" download="Maruf_Resume">
              <button className="rounded-full text-2xl border p-3 hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-500 hover:border-none hover:text-black duration-300 active:scale-75">
                <PiFilePdfLight />
              </button>
            </a>
          </div>
        </div>
        <div>
          <Link
            href="/contacts"
            className="text-white btn w-full rounded-3xl bg-base-300 py-3 mb-3 lg:mb-0 hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-500 hover:border-none hover:text-black duration-500 active:scale-75"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="col-span-2 h-[570px] overflow-auto custom-scrollbar">
        {children}
      </div>
    </div>
  );
};

export default layout;
