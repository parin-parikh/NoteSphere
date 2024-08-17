import { ArrowLeftCircle } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import { FaPlug, FaUsers, FaShieldAlt, FaDesktop, FaTags, FaFileAlt, FaCloud, FaSync, FaCalendarCheck, FaGlobe, FaComments } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-100">
      <header className="flex items-center space-x-2 animate-pulse rounded-lg mb-5">
        <ArrowLeftCircle className="w-10 h-10 text-gray-800" />
        <h1 className="text-2xl font-bold text-gray-800">
          Get Started with Creating a New Document
        </h1>
      </header>

      <main className="flex flex-col p-6 bg-white shadow-md rounded-lg overflow-auto">
        <p className="text-lg text-gray-700 mb-6 text-center">
          Welcome to Note Sphere, your premier platform for managing and organizing
          documents efficiently. With Note Sphere, you can:
        </p>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <FaFileAlt className="text-gray-600 text-4xl mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">Create & Edit</h3>
              <p className="text-gray-600">Create and edit documents effortlessly.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaUsers className="text-gray-600 text-4xl mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">Collaborate</h3>
              <p className="text-gray-600">Collaborate with others in real-time.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaTags className="text-gray-600 text-4xl mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">Organize</h3>
              <p className="text-gray-600">Organize your notes with advanced features.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaCloud className="text-gray-600 text-4xl mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">Access Anywhere</h3>
              <p className="text-gray-600">Access your documents from anywhere, anytime.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaDesktop className="text-gray-600 text-4xl mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">User-Friendly</h3>
              <p className="text-gray-600">A user-friendly interface for quick navigation.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaShieldAlt className="text-gray-600 text-4xl mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">Security</h3>
              <p className="text-gray-600">Robust security features to keep your data safe.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">AI Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <FaGlobe className="text-gray-600 text-4xl mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">Translation</h3>
              <p className="text-gray-600">
                Using advanced neural machine translation models, our platform offers accurate translations across numerous languages, facilitating seamless global communication.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaFileAlt className="text-gray-600 text-4xl mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">Summarization</h3>
              <p className="text-gray-600">
                Leveraging transformer-based models like BERT, we provide concise summaries of lengthy documents, enabling quick comprehension of essential information.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaComments className="text-gray-600 text-4xl mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">Conversational AI</h3>
              <p className="text-gray-600">
                Our conversational AI, powered by OpenAI's ChatGPT, engages users in natural dialogue, offering immediate responses and interactive experiences.
              </p>
            </div>
          </div>
        </section>

        <div className="flex flex-col items-center mt-2">
          <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-gray-800 text-white hover:bg-gray-700 h-10 px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <SignOutButton />
            </SignedIn>
          </div>
        </div>
      </main>
    </div>
  );
}
