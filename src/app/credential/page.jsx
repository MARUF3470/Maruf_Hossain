import Image from "next/image";
import img from "@/assets/Maruf1-removebg-preview.png";
import {
  PiTwitterLogoLight,
  PiVolleyballLight,
  PiInstagramLogoLight,
} from "react-icons/pi";
import { LiaFacebookSquare } from "react-icons/lia";
const page = () => {
  return (
    <div className="grid grid-cols-3 my-20 gap-16">
      <div className="bg-base-200 p-4 rounded-3xl h-fit lg:h-[570px]">
        <Image
          src={img}
          alt="Maruf Hossain "
          width={300}
          height={300}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACJAIkDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEAgEGBf/EABoQAQEBAQEBAQAAAAAAAAAAAAACAQMREjH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD2YAAAAAAAAAAAAAAAAABm/wAS9FN/iXpoE0y7Ws+g+sAAAAAObrrFUDvruaV9NZQpgczfXRAAAADm75gF9NS9NP6al6aBda56zWueg+0AAAABmt8wmqb6UnqhWvp3KI+msoFU0Zm+ppo2aA0OZo9EdLumtom6AvpSa6M6UmuhGapn6YqnPpR6IAIocrfMdL6aBPSk9030pPdIrv07lEbTuUKrmjZpJNHTQKsp36IymvpUaqirp3aJuhGOlJrozpSbpSozVM/TFUz9CPWABGnNI6afX4m6aCfpqa9O6amvUVnddzS912dFUTp06mnTp0D81r0vNd9VHd0m9brSr0Qnpqbpp3TU3TVQutZ+nK1n1UezADLTN/iXoptN0BL0TWp6JrRS9dweOzgpknSVOHTgN46Mx1UYomzqJsRP0S9NU9EvRUIrWfXaZB7cAIrFpuiq03QEvTE9YpvCKwUrxqcHjc4DU4bOMzhs4DuY741mDcAqsIvFNYR0wRJ0SdFnVJ0BNTDdsg9uAAZr8T9FNfifoCa8IrFFk1gF+Nzjnjc4Dc4bOMThs4DuYNxvMc3AKrCOmKKwjoCPriTqt6o+qKlthu2Qe2ACo5v4RZ+/hFgnsmjrJoHGpZbkDJOkqTZBvHNdwaBdJ+iik/RFSdUfVb1R9QS2w3bKK//Z"
          className="object-cover rounded-3xl w-full"
          sizes="33vw"
        />
        <div className="text-center mt-10 mb-3">
          <h1 className="text-white font-medium text-3xl">Maruf Hossain</h1>
          <p className="text-sm text-zinc-500">@marufhossain</p>
        </div>
        <div className="flex w-11/12 mx-auto h-24 rounded-3xl py-14">
          <div className="w-1/2  flex justify-evenly items-center">
            <button className="rounded-full text-2xl border p-3 ">
              <PiVolleyballLight />
            </button>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <button className="rounded-full text-2xl border p-3">
              <PiTwitterLogoLight />
            </button>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <button className="rounded-full text-2xl border p-3">
              <PiInstagramLogoLight />
            </button>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <button className="rounded-full text-2xl border p-3">
              <LiaFacebookSquare />
            </button>
          </div>
        </div>
        <div>
          <button className="text-white w-full rounded-3xl bg-base-300 py-3 mb-3 lg:mb-0 ">
            Contact Me
          </button>
        </div>
      </div>
      <div className="col-span-2 h-[570px] overflow-auto custom-scrollbar">
        <div className="">
          <div>
            <h3 className="text-white text-xl font-medium">ABOUT ME</h3>
            <p className="text-zinc-400 my-8">
              Hi, I am Maruf Hossain. I am doing Bachelor in Computer Science
              and Engineering in Daffodil International University. I am working
              as a professional full-stack web developer for the last 2 years.
              <br /> <br /> I can build modern websites with using modern
              technologies. I am pretty much confident about my skills and
              always try my best to fulfill the needs of my clients and provide
              them the best services.
            </p>
          </div>
          <div className="mt-20">
            <h3 className="text-white text-xl font-medium">EXPERIENCE</h3>
            <div className="my-10">
              <p className="text-zinc-500">2022</p>
              <h4 className="text-blue-500 my-1">Programming Hero</h4>
              <p className="text-zinc-500 text-sm">Student</p>
              <p className="text-zinc-400 my-2">
                I was a Programming Hero student in 2022 and i successfully
                completed the course{" "}
                <strong className="text-white">
                  Complete Web Development Course With Jhankar Mahbub
                </strong>{" "}
                ontime with highest mark. Throughout the journey, i leared a lot
                of things about web development and gather many skills and
                experiance. It holds a great value to my web development career.
              </p>
            </div>
            <div>
              <p className="text-zinc-500">2023 - Current</p>
              <h4 className="text-blue-500 my-1">Fiverr & Upwork</h4>
              <p className="text-zinc-500 text-sm">Freelancer</p>
              <p className="text-zinc-400 my-2">
                I am in both Fiverr & Upwork from the last 1 year. I worked with
                some foreign clients and completed their order successfully. It
                also a great achievement in my web development career.
              </p>
            </div>
          </div>
          <div className="mt-20">
            <h3 className="text-white text-xl font-medium">EDUCATION</h3>
            <div className="my-10">
              <p className="text-zinc-500">2020 - Current</p>
              <h4 className="text-blue-500 my-1">
                Bachelor Degree in Computer Science & Engineering
              </h4>
              <p className="text-zinc-500 text-sm">
                Daffodil International University
              </p>
              <p className="text-zinc-400 my-2">
                I am doing Bachelor in Computer Science & Engineering from
                January 2022 in{" "}
                <strong className="text-white">
                  Daffodil International University
                </strong>{" "}
                and i will be a graduated student in june 2024.
              </p>
            </div>
          </div>
          <div className="mt-20">
            <h3 className="text-white text-xl font-medium">SKILLS</h3>
            <div className="w-3/4 flex justify-between">
              <div>
                <div className="my-6">
                  <p className="text-zinc-500 text-sm">90%</p>
                  <h3 className="text-white text-lg font-medium">
                    TailwindCSS
                  </h3>
                  <p className="text-sm">CSS Framework</p>
                </div>
                <div className="my-6">
                  <p className="text-zinc-500 text-sm">90%</p>
                  <h3 className="text-white text-lg font-medium">JavaScript</h3>
                  <p className="text-sm">Scripting Language</p>
                </div>
                <div className="my-6">
                  <p className="text-zinc-500 text-sm">80%</p>
                  <h3 className="text-white text-lg font-medium">Figma</h3>
                  <p className="text-sm">UI/UX Design</p>
                </div>
                <div className="my-6">
                  <p className="text-zinc-500 text-sm">90%</p>
                  <h3 className="text-white text-lg font-medium">React</h3>
                  <p className="text-sm">JavaScript Library</p>
                </div>
                <div className="my-6">
                  <p className="text-zinc-500 text-sm">80%</p>
                  <h3 className="text-white text-lg font-medium">Redux</h3>
                  <p className="text-sm">State Management</p>
                </div>
                <div className="my-6">
                  <p className="text-zinc-500 text-sm">85%</p>
                  <h3 className="text-white text-lg font-medium">NextJs</h3>
                  <p className="text-sm">React Full Stack Framework</p>
                </div>
              </div>
              <div>
                <div className="my-6">
                  <p className="text-zinc-500 text-sm">90%</p>
                  <h3 className="text-white text-lg font-medium">Firebase</h3>
                  <p className="text-sm">Database / Authentication</p>
                </div>
                <div className="my-6">
                  <p className="text-zinc-500 text-sm">85%</p>
                  <h3 className="text-white text-lg font-medium">NodeJS</h3>
                  <p className="text-sm">React Full Stack Framework</p>
                </div>
                <div className="my-6">
                  <p className="text-zinc-500 text-sm">85%</p>
                  <h3 className="text-white text-lg font-medium">ExpressJs</h3>
                  <p className="text-sm">React Full Stack Framework</p>
                </div>
                <div className="my-6">
                  <p className="text-zinc-500 text-sm">85%</p>
                  <h3 className="text-white text-lg font-medium">MongoDB</h3>
                  <p className="text-sm">React Full Stack Framework</p>
                </div>
                <div className="my-6">
                  <p className="text-zinc-500 text-sm">60%</p>
                  <h3 className="text-white text-lg font-medium">Stripe</h3>
                  <p className="text-sm">Online Payment Gateway Integration</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <h3 className="text-white text-xl font-medium">Awards</h3>
            <div className="my-6">
              <p className="text-zinc-500 text-sm">16th December 2022</p>
              <h3 className="text-white text-lg font-medium">Black-Belt</h3>
              <p className="text-sm">Programming Hero</p>
            </div>
            <div className="my-6">
              <p className="text-zinc-500 text-sm">5th January 2023</p>
              <h3 className="text-white text-lg font-medium">
                Certificate Of Completion With Excellence
              </h3>
              <p className="text-sm">Programming Hero</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
