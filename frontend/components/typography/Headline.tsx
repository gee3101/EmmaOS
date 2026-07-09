"use client";

interface HeadlineProps {

  //------------------------------------------
  // Content
  //------------------------------------------

  text: string;

  //------------------------------------------
  // Optional Styling
  //------------------------------------------

  className?: string;

}

export default function Headline({
  text,
  className = "",
}: HeadlineProps) {

  return (

    <div
      className={`
        max-w-[65%]
        select-none
        ${className}
      `}
    >

      <h1
        className="
          text-5xl
          md:text-6xl
          font-extrabold
          leading-tight
          tracking-tight
          text-white
          drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)]
          whitespace-pre-line
          break-words
        "
      >
        {text}
      </h1>

    </div>

  );

}