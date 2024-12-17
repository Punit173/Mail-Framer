import React from "react";

const page = () => {
  return (
    <div className="bg-black min-h-screen p-8 text-center">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">
        A place to write your mails in an effective way...
      </h1>

      {/* Features Section */}
      <div className="space-y-6 flex flex-col">
        <a href="">
          <h2 className="text-2xl text-white font-semibold border-b-2 border-yellow-400 inline-block pb-2">
            Design a Template
          </h2>
        </a>
        <a href="/inputdesc">
          <h2 className="text-2xl text-white font-semibold border-b-2 border-yellow-400 inline-block pb-2">
            Write an Email
          </h2>
        </a>
        <a href="">
          <h2 className="text-2xl text-white font-semibold border-b-2 border-yellow-400 inline-block pb-2">
            Send Mass Invitation
          </h2>
        </a>
      </div>
    </div>
  );
};

export default page;
