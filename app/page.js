import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-black p-6 text-gold shadow-md relative">
        <div className="container mx-auto flex flex-col items-center text-center space-y-2 md:space-y-0 md:flex-row md:justify-between">
          <h1 className="text-3xl font-bold text-gold">Mail <span className="text-yellow-400">Framer</span></h1>
          <h2 className="text-lg md:text-xl text-yellow-400">
            Design. Automate. Deliver Emails That Matter.
          </h2>
        </div>
        {/* Thin Golden Line */}
        <div className="absolute bottom-0 left-0 w-full border-t-2 border-yellow-400"></div>
      </nav>

      {/* Hero Section */}
      <main className="bg-black py-16 px-4 md:px-8">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gold leading-tight">
              Powerful Email Solutions for Modern Businesses
            </h1>
            <p className="text-lg text-white">
              Create stunning emails, automate campaigns, and ensure
              deliverability – all in one intuitive platform.
            </p>
            <br />
            <a href="/home">
              <button className="bg-gold text-black px-6 py-3 rounded-lg bg-yellow-400 border hover:border-white transition duration-300">
                Get Started For Free
              </button>
            </a>
          </div>
          {/* Hero Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              className="h-80 rounded-lg shadow-lg"
              src="https://cdn.dribbble.com/users/86682/screenshots/2132588/invites.gif"
              alt="Email Workflow"
            />
          </div>
        </div>
      </main>

      {/* Why Mail Framer Section */}
      <section className="bg-black py-16 px-4 md:px-8">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">
            Why Mail Framer?
          </h1>
          <p className="text-white text-lg md:w-2/3 mx-auto">
            Mail Framer makes it easier than ever to design and send beautiful,
            effective emails. Whether you’re a marketer, business owner, or
            developer, our platform gives you the tools you need to connect with
            your audience and grow your business.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <li className="flex flex-col items-center space-y-3">
              <span className="text-5xl text-gold">🖌</span>
              <h3 className="text-lg font-bold text-gold">
                Drag-and-Drop Editor
              </h3>
              <p className="text-white text-sm">
                Design pixel-perfect emails with ease.
              </p>
            </li>
            <li className="flex flex-col items-center space-y-3">
              <span className="text-5xl text-gold">🔁</span>
              <h3 className="text-lg font-bold text-gold">
                Email Automation
              </h3>
              <p className="text-white text-sm">
                Save time by automating your email workflows.
              </p>
            </li>
            <li className="flex flex-col items-center space-y-3">
              <span className="text-5xl text-gold">🚀</span>
              <h3 className="text-lg font-bold text-gold">
                High Deliverability
              </h3>
              <p className="text-white text-sm">
                Reach inboxes, not spam folders.
              </p>
            </li>
            <li className="flex flex-col items-center space-y-3">
              <span className="text-5xl text-gold">📊</span>
              <h3 className="text-lg font-bold text-gold">
                Advanced Analytics
              </h3>
              <p className="text-white text-sm">
                Track opens, clicks, and conversions seamlessly.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
