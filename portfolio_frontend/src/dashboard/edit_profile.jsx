import { Pencil } from "lucide-react";
import React from "react";

export default function Edit_profile() {
  return (
    <div className="p-4 relative cursor-pointer bg-white shadow border border-gray-300 rounded-xl flex items-center justify-between hover:scale-105 duration-300 transition-all">
      <div className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full ">
        <Pencil className="w-4 h-4" />
      </div>
      {/* text edit section */}
      <div className="space-y-4">
        <div className="space-y-1">
          <p className="text-lg font-semibold">Your Name:</p>
          <p className="font-semibold px-2">Ritesh Tamang</p>
        </div>
        <div className="space-y-1">
          <p className="text-lg font-semibold">Skils:</p>
          <p className="font-semibold px-2">Frontend Development</p>
        </div>
      </div>
      {/* image edit section */}
      <div>
        <img
          className="rounded-full  w-44 h-44 object-cover"
          src="https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
        />
      </div>
    </div>
  );
}
