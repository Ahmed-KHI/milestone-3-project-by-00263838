import React from "react";
import Image from "next/legacy/image";

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col space-y-10 justify-center m-10 mb-0 ">
        <nav className="flex justify-center flex-wrap gap-6 text-slate-500 font-medium ">
          <a className="text-orange-500 hover:text-green-600" href="#">
            Home
          </a>
          <a className="text-orange-500 hover:text-red-600" href="#">
            About
          </a>
          <a className="text-orange-500 hover:text-red-600" href="#">
            Delivery
          </a>
          <a className="text-orange-500 hover:text-red-600" href="#">
            Contact
          </a>
        </nav>

        <div className="flex justify-center space-x-5 ">
          <a
            href="https://facebook.com"
            target="blank"
            rel="nofollow noopener"
            className="transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-grab"
          >
            <Image src="/facebook.png" alt="facebook logo" width={54} height={54} />
          </a>

          <a
            href="https://linkedin.com"
            target="blank"
            rel="nofollow noopener"
            className="transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-grab"
          >
            <Image src="/linkedin.png" alt="linkedin logo" width={54} height={54} />
          </a>

          <a
            href="https://instagram.com"
            target="blank"
            rel="nofollow noopener"
            className="transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-grab"
          >
            <Image src="/instagram.png" alt="instagram logo" width={54} height={54} />
          </a>

          <a
            href="https://twitter.com"
            target="blank"
            rel="nofollow noopener"
            className="transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-grab"
          >
            <Image src="/twitter.png" alt="twitter logo" width={54} height={54} />
          </a>
        </div>
        <p className="text-center text-orange-500 hover:text-sky-700 font-medium mb-8 cursor-pointer">
        © 2024 (00263838). All Right Reserved.
        </p>
        <br />
        <br />
        <br />
      </footer>
    </div>
  );
}
