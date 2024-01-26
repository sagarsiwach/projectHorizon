"use client";

export default function Ribbon() {
  return (
    <div className="w-screen h-auto h-6 py-3 px-4 inline-flex text-sm bg-flamingo-500 flex flex-row item-center justify-start font-sans">
      <p className="font-sans text-white">Win a Free Electric Bike &nbsp;</p>
      <a
        href="https://www.google.com"
        target="_blank"
        className="font-sans text-white underline font-semibold"
      >
        Participate Now!
      </a>
    </div>
  );
}
