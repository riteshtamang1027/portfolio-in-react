import { Plus } from "lucide-react";
import React, { useState } from "react";

export default function Add_skills_section() {
  const [isOpen, setIsOpen] = useState(false);
  const [skills, setskills] = useState([""]);
  const [newSkill, setnewSkill] = useState("");
  return (
    <div>
      <div className="space-y-4">
        <label className="text-lg max-sm:text-base font-semibold ">
          Skills:
        </label>
        <ul className="list-disc list-inside max-sm:text-sm ml-2">
          <li>Frontend Development</li>
        </ul>
        <label className="flex items-center justify-center border border-gray-500 rounded-md font-semibold text-sm px-2 py-1 gap-2 cursor-pointer w-max">
          <span value={skills} onChange={(e) => setSkills(e.target.value)}>
            add
          </span>
          <Plus size={16} />{" "}
        </label>
      </div>
    </div>
  );
}
