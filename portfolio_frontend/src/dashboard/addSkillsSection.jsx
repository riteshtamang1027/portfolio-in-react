import { Plus } from "lucide-react";
import { useState } from "react";

export default function Add_skills_section() {
  const [isAddingSkills, setIsAddingSkills] = useState(false);
  const [skills, setSkills] = useState(["Frontend Developer"]);
  const [newSkill, setnewSkill] = useState("");
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <div className="text-lg max-sm:text-base font-semibold ">Skills:</div>
        <ul className="list-disc list-inside max-sm:text-sm ml-2">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      {isAddingSkills ? (
        <div className="flex items-center justify-between max-sm:gap-4">
          <input
            type="text"
            name=""
            id=""
            className="outline-none border border-gray-400 rounded-md px-2 py-1 text-sm"
          />
          <button
            onClick={() => {
              if (newSkill.trim()) {
                setSkills(...skills, newSkill);
                setnewSkill("");
                setIsAddingSkills(!isAddingSkills);
              }
            }}
            className="border border-gray-300 rounded-md  px-2 py-1 bg-green-500 text-white cursor-pointer text-sm"
          >
            Save
          </button>
          <button
            onClick={() => {
              setnewSkill("");
              setIsAddingSkills(!isAddingSkills);
            }}
            className="border border-gray-300 rounded-md  px-2 py-1 bg-orange-500 text-white cursor-pointer text-sm"
          >
            Cancel
          </button>
        </div>
      ) : (
        /*skills Add btn */
        <button
          onClick={() => setIsAddingSkills(true)}
          className="flex items-center justify-center border border-gray-500 rounded-md font-semibold text-sm px-2 py-1 gap-2 cursor-pointer w-max"
        >
          <span>add</span>
          <Plus size={16} />{" "}
        </button>
      )}
    </div>
  );
}
