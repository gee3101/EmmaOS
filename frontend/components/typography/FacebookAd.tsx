"use client";

import Headline from "./Headline";
import Logo from "./Logo";

interface FacebookAdProps {

  //------------------------------------------
  // Creative
  //------------------------------------------

  imageUrl: string;

  headline: string;

  //------------------------------------------
  // Branding
  //------------------------------------------

  logoUrl?: string;

}

export default function FacebookAd({
  imageUrl,
  headline,
  logoUrl,
}: FacebookAdProps) {

  return (

    <div
      className="
        relative
        aspect-square
        w-full
        overflow-hidden
        rounded-2xl
        bg-slate-200
        shadow-2xl
      "
    >

      {/* ======================================
          Background Image
      ====================================== */}

      <img
        src={imageUrl}
        alt="Emma Generated Advertisement"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* ======================================
          Left Gradient
      ====================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/50
          via-black/10
          to-transparent
        "
      />

      {/* ======================================
          Safe Content Area
      ====================================== */}

      <div
        className="
          relative
          flex
          h-full
          flex-col
          justify-between
          p-10
          md:p-12
        "
      >

        {/* ======================================
            Header
        ====================================== */}

        <div className="flex justify-between items-start">

          <Headline
            text={headline}
            className="max-w-[45%]"
          />

          {logoUrl && (

            <Logo
              src={logoUrl}
            />

          )}

        </div>

      </div>

    </div>

  );

}