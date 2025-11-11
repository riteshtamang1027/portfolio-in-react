import React from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
export default function heroSection() {
  return (
    <div className="xl:px-64 lg:px-32 md:px-16 px-8 text-white h-full">
      {/* main div */}
      <div className="relative w-full border border-cyan-600 px-4 py-4 top-1/2 transform -translate-y-1/2 bg-gray-500/40 rounded-2xl shadow-2xl space-y-8">
        {/* Header section */}
        <p className="text-white text-3xl font-bold">
          Port <span className="text-cyan-500">Folio</span>
        </p>

        {/* components sections */}
        <div className="flex items-center justify-between w-full gap-16 px-4">
          {/* left div where introduction section */}
          <div className="w-2/3 space-y-8">
            {/* text section */}
            <div className="text-base space-y-4">
              <div className="space-y-2">
                <p className="text-xl font-bold opacity-90">Hi, I'm</p>
                <p className="text-3xl font-bold text-cyan-500">{`Ritesh Tamang`}</p>
              </div>
              <p className="text-2xl font-semibold">
                I'm <span>Frontend Developer.</span>{" "}
              </p>
              <p className="font-semibold opacity-80 trackind-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                sit distinctio, harum necessitatibus incidunt amet eius dolores
                alias enim quam qui repellat facere sunt .
              </p>
            </div>

            {/* button section */}
            <div className="flex items-center gap-12">
              <button className="border px-4 py-2 rounded-full text-sm font-semibold bg-cyan-500 text-black/60 cursor-pointer border-white">
                Download CV
              </button>

              {/* social media sections */}
              <div className="flex items-center gap-4">
                {mediaIcon.map((Icon, index) => (
                  <div
                    key={index}
                    className="border p-2 rounded-full border-cyan-500 cursor-pointer"
                  >
                    <Icon width={20} height={20} className="text-cyan-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image container section */}
          <div className="w-1/3">
            <img
              className="rounded-full "
              src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const mediaIcon = [Facebook, Linkedin, Instagram, Github];
