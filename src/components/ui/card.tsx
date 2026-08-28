import { useState } from "react";

export default function Card() {
  const [saveChange, setSaveChange] = useState(true);

 

  return (
    <div className={`${saveChange ? "bg-background text-primary" : "bg-black text-white"} flex flex-col items-center justify-center gap-4 h-screen`}>
      <div
        onClick={() => setSaveChange(saveChange)}
        className="rounded-sm border px-4 py-1 w-max mt-8"
      >
        {saveChange ? "dark" : "light"}
      </div>
      {/* <p>{saveChange}</p> */}
    </div>
  );
}
