"use client";

interface CTAButtonProps {

  //------------------------------------------
  // Content
  //------------------------------------------

  text: string;

  //------------------------------------------
  // Optional Styling
  //------------------------------------------

  className?: string;

}

export default function CTAButton({
  text,
  className = "",
}: CTAButtonProps) {

  return (

    <div
      className={className}
    >

      <div
        className="
          inline-flex
          items-center
          justify-center

          rounded-full

          bg-blue-600

          px-8
          py-4

          shadow-xl

          transition-all
          duration-300

          hover:scale-105
        "
      >

        <span
          className="
            text-lg
            font-bold
            uppercase
            tracking-wide
            text-white
            select-none
          "
        >
          {text}
        </span>

      </div>

    </div>

  );

}