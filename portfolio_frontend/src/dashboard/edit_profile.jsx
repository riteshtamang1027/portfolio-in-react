import { Pencil, Plus } from "lucide-react";
import { useState } from "react";

export default function Edit_profile() {
  const [Isopen, setIsopen] = useState(false);

  return (
    <div className="w-full">
      {Isopen && (
        <div
          onClick={() => setIsopen(!Isopen)}
          className="w-full h-full inset-0 absolute z-40 bg-black/40"
        ></div>
      )}
      <div className="p-4 relative cursor-pointer bg-white shadow border border-gray-300 rounded-xl flex items-center justify-between hover:scale-105 duration-300 transition-all group">
        <div
          onClick={() => setIsopen(!Isopen)}
          className="absolute top-2 right-2 p-2 bg-gray-200 rounded-full cursor-pointer"
        >
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

      {Isopen && (
        <div className="w-max absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-8 z-50 bg-gray-200 rounded-xl justify-items-center space-y-8">
          {/* image edit section */}
          <div>
            <img
              className="rounded-full w-64 h-64  object-cover"
              src="https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
              alt="Image"
            />
          </div>

          {/* your infotmation edid section */}
          <div className="space-y-4">
            <div className="space-y-1 flex flex-col">
              <label className="text-lg font-semibold ">Your Name:</label>
              <input
                type="text"
                value={`Ritesh Tamang`}
                className="border border-gray-600 rounded-sm px-2 py- focus:outline-none"
                placeholder="Ritesh Tamang"
              />
            </div>
            <div className="space-y-4">
              <label className="text-lg font-semibold ">Skills:</label>
              <ul className="list-disc list-inside ml-2">
                <li>Frontend Development</li>
                <li>UI/UX Design</li>
                <li>React.js</li>
              </ul>
              <button className="flex items-center justify-center border border-gray-500 rounded-md font-semibold text-sm px-2 py-1 gap-2 cursor-pointer">
                <span>add</span>
                <Plus size={16} />{" "}
              </button>
            </div>
          </div>

          {/* submit button */}

          <div className="w-full flex justify-end ">
            <button className="border border-gray-500 px-3 py-1 rounded-md font-semibold cursor-pointer">
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
