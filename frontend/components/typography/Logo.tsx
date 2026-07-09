"use client";

interface LogoProps {

  //------------------------------------------
  // Brand
  //------------------------------------------

  src: string;

  alt?: string;

  //------------------------------------------
  // Optional Styling
  //------------------------------------------

  className?: string;

}

export default function Logo({
  src,
  alt = "Brand Logo",
  className = "",
}: LogoProps) {

  return (

    <div
      className={className}
    >

      <img
        src={src}
        alt={alt}
        className="
          h-14
          w-auto

          object-contain

          drop-shadow-lg

          select-none
        "
      />

    </div>

  );

}