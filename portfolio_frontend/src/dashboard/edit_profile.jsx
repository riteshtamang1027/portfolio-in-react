import axios from "axios";
import { Pencil, Plus } from "lucide-react";
import { useEffect, useState } from "react";

export default function Edit_profile() {
  const [Isopen, setIsopen] = useState(false);
  useEffect(() => {
    if (Isopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [Isopen]);
  const [uname, setUname] = useState("");
  const [info, setInfo] = useState("");
  const [img, setImg] = useState(null);
  const [skills, setSkills] = useState("");


  const handleSubmit = async () => {
  const  formdata =new FormData()
    formdata.append("user_name",uname)
    formdata.append("skills",skills)
    formdata.append("profile_picture",img)
    formdata.append("description",info)

    try {
      const responsive = await axios.post("http://localhost:5174/admin",formdata);
      console.log(responsive.data.data)


    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      {Isopen && (
        <div
          onClick={() => setIsopen(!Isopen)}
          className="fixed w-full h-full inset-0 z-30 bg-black/50"
        ></div>
      )}
      <div className="p-4 relative cursor-pointer bg-white shadow border border-gray-300 rounded-xl flex sm:flex-row flex-col items-center md:justify-between gap-8 hover:scale-105 duration-300 transition-all group max-md:px-16 max-md:gap-x-12">
        <div
          onClick={() => setIsopen(!Isopen)}
          className="absolute top-1 right-1 p-2 bg-gray-200 rounded-full cursor-pointer"
        >
          <Pencil className="md:w-4 w-3 md:h-4 h-3" />
        </div>

        {/* text edit section */}
        <div className="space-y-2 md:order-1 order-2">
          <div className="space-y-1 flex flex-row  md:flex-col max-md:items-center">
            <span className="sm:text-lg font-semibold ">Your Name:</span>
            <span className="font-semibold px-2 max-sm:text-sm ">
              Ritesh Tamang
            </span>
          </div>
          <div className="space-y-1 flex flex-row  md:flex-col max-md:items-center">
            <span className="sm:text-lg font-semibold ">Skils:</span>
            <span className="font-semibold px-2 max-sm:text-sm ">
              Frontend Development
            </span>
          </div>
        </div>
        {/* image edit section */}
        <div className="order-1 md:order-2">
          <img
            className="rounded-full  w-44 h-44 object-cover"
            src="https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
            alt="Image"
          />
        </div>
      </div>

      {Isopen && (
        <div className="md:w-100 w-max max-h-[90vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-200 rounded-xl  overflow-y-auto scroll-smooth hide-scrollbar">
          <p className="text-xl max-sm:text-lg  font-bold px-4 py-2 border-b border-gray-500  h-full sticky top-0 bg-gray-200">
            Edit Your profile
          </p>
          <div className="px-8 py-4 space-y-8 ">
            {/* image edit section */}
            <div className="flex items-center justify-center">
              <img
                className="rounded-full w-64 h-64  object-cover"
                src="https://images.unsplash.com/photo-1761839258044-e59f324b5a7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
                alt="Image"
              />
            </div>

            {/* your infotmation edid section */}
            <div className="space-y-4">
              {/* you can change your name */}
              <div className="space-y-1 flex flex-col">
                <label className="text-lg max-sm:text-base font-semibold ">
                  Your Name:
                </label>
                <input
                  type="text"
                  value={`Ritesh Tamang`}
                  className="border-b border-gray-600 max-sm:text-sm rounded-sm px-2 py-1 focus:outline-none"
                  placeholder="Ritesh Tamang"
                />
              </div>

              {/* add skill */}
              <div className="space-y-4">
                <label className="text-lg max-sm:text-base font-semibold ">
                  Skills:
                </label>
                <ul className="list-disc list-inside max-sm:text-sm ml-2">
                  <li>Frontend Development</li>
                  <li>UI/UX Design</li>
                  <li>React.js</li>
                </ul>
                <button className="flex items-center justify-center border border-gray-500 rounded-md font-semibold text-sm px-2 py-1 gap-2 cursor-pointer">
                  <span>add</span>
                  <Plus size={16} />{" "}
                </button>
              </div>

              {/* add breef about yourself */}
              <div className="space-y-1 flex flex-col">
                <label className="text-lg max-sm:text-base font-semibold ">
                  Add your brief information:
                </label>
                <textarea
                  type="text"
                  className="border-b text-sm border-gray-600 max-sm:text-sm rounded-sm px-1 py-1 focus:outline-none"
                  placeholder="Description must be between 100 and 400 words."
                />
              </div>
            </div>

            {/* submit button */}

            <div className="w-full flex justify-end ">
              <button className="border border-gray-500 px-3 py-1 rounded-md font-semibold cursor-pointer max-sm:text-sm">
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
