import { SignOutButton } from "@clerk/clerk-react";
import Edit_profile from "../dashboard/edit_profile";

export default function Admin_dashboard() {
  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <p className="text-3xl font-bold">Admin Dashboard</p>

        <SignOutButton className="border text-base font-semibold  border-gray-400 px-4 py-2 rounded-xl text-white bg-red-600 cursor-pointer">
          <span className="">Log Out</span>
        </SignOutButton>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <Edit_profile/>
        <div className="p-6 bg-white shadow rounded-xl">Manage Projects</div>
        <div className="p-6 bg-white shadow rounded-xl">Manage Blogs</div>
        <div className="p-6 bg-white shadow rounded-xl">Messages</div>
      </div>
    </div>
  );
}
