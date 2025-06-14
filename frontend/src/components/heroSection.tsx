export default function heroSection() {
  return (
    // Background theem
    <div className="relative bg-yellow-600 w-88 h-120 mt-12">
      {/* Profile section */}

      <div className="absolute flex gap-8 w-240 left-1/2 top-1/2 transform -translate-y-1/2 border border-black">
        {/* Profile picture */}
        <div className="flex flex-col bg-blue-300  items-center w-66 gap-2 p-4">
          <div className="">
            <img
              className="w-44 h-44 rounded-full object-cover"
              src="https://media.istockphoto.com/id/1392583255/photo/portrait-of-a-man-riding-his-classic-motorbike-in-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=9Kjpc34MR9ikiTGLP0-HsvSy39d97iPhAFPjWBiqvoY="
              alt="profile image"
            />
          </div>

          {/* Your name and your  */}
          <div className="">
            <p className="text-xl font-bold">Your name</p>
            <p className="text-lg font-medium">Your post</p>
          </div>
        </div>


        {/* About yourself */}

        <div>
         <p className="text-6xl font-bold">Hello Everyone ...!</p>
         <p className="text-lg font-medium">I am Ritesh. So, who am I and what can I do, You can explore here.</p>
        </div>
      </div>
    </div>
  );
}
