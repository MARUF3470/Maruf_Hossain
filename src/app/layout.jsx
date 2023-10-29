import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Toaster from "@/components/Toaster";
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
export const metadata = {
  title: "MARUF HOSSAIN",
  description: "Portfolio of Maruf Hossain",
};
export default function RootLayout({ children }) {
  const menu = (
    <div className="lg:flex">
      <Link href="/">
        <button className="block btn btn-xs bg-transparent border-0 font-normal uppercase text-gray-500">
          Home
        </button>
      </Link>
      <Link href="/about">
        <button className="block btn btn-xs bg-transparent border-0 font-normal uppercase text-gray-500">
          about
        </button>
      </Link>
      <Link href="/projects">
        <button className="block btn btn-xs bg-transparent border-0 font-normal uppercase text-gray-500">
          works
        </button>
      </Link>
      <Link href="/contacts">
        <button className="block btn btn-xs bg-transparent border-0 font-normal uppercase text-gray-500">
          contacts
        </button>
      </Link>
    </div>
  );
  return (
    <html lang="en" className="w-[90%] lg:w-[80%] mx-auto">
      <body className={inter.className}>
        <Toaster />
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <div className="w-full navbar flex justify-between">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>{" "}
                </label>
              </div>
              <div className="px-2 text-3xl font-normal text-white">
                Maruf H.
              </div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">{menu}</ul>
              </div>
              <Link
                href="/contacts"
                className="text-white bg-zinc-900 text-xs px-6 py-2 rounded-md hover:bg-slate-100 hover:text-black duration-300 active:scale-50"
              >{`Let's Talk`}</Link>
            </div>
            {children}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              {" "}
              <label
                htmlFor="my-drawer-3"
                className="btn btn-circle btn-outline btn-xs mb-5 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </label>
              {menu}
            </ul>
          </div>
        </div>
        <footer className="footer footer-center p-10 text-base-content rounded">
          <h1 className="text-3xl font-normal text-white">Maruf H.</h1>
          <nav className="grid grid-flow-col gap-4">{menu}</nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <a href="https://twitter.com/Maruf_3470">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current hover:text-blue-400 duration-300"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UC4sGDqNUWAEp3ukR1bhOuAw">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current hover:text-red-500 duration-300"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://web.facebook.com/profile.php?id=100008306890693">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current hover:text-blue-500 duration-300"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
          <aside>
            <p>
              Copyright © 2023 - All right reserved by{" "}
              <span className="text-blue-600">Maruf Hossain</span>
            </p>
          </aside>
        </footer>
      </body>
    </html>
  );
}
