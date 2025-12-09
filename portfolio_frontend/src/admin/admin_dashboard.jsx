import { SignOutButton } from "@clerk/clerk-react";
import Edit_profile from "../dashboard/edit_profile";

export default function Admin_dashboard() {
  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <p className="md:text-3xl text-xl font-bold">Admin Dashboard</p>

        <SignOutButton className="border md:text-base text-sm font-semibold  border-gray-400 md:px-4 md:py-2 px-2 py-1 md:rounded-xl rounded-md text-white bg-red-600 cursor-pointer whitespace-nowrap">
          <span className="">Log Out</span>
        </SignOutButton>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
        <Edit_profile/>
        <div className="p-6 bg-white shadow rounded-xl">Manage Projects</div>
        <div className="p-6 bg-white shadow rounded-xl">Manage Blogs</div>
        <div className="p-6 bg-white shadow rounded-xl">Messages</div>
      </div>
    </div>
  );
}
