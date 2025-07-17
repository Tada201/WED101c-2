import { useState, useEffect } from "react";
import { Bot, DoorOpen } from "lucide-react";
import { useSound } from "@/hooks/use-sound";

export function Header() {
  const { playSound } = useSound();
  const [gladosMessage, setGladosMessage] = useState(0);

  const gladosMessages = [
    "Welcome to the Aperture Science Test Subject Database. Please proceed to the testing chamber... or don't. I'm not your mother.",
    "Oh, it's you. You're not dead. Good. We have more science to do.",
    "The test subject is back. How... predictable.",
    "I see you've returned. Time to resume testing. For science.",
    "Welcome back. The cake is still a lie, in case you were wondering."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGladosMessage((prev) => (prev + 1) % gladosMessages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleEnterFacility = () => {
    playSound('portal');
    // TODO: Implement facility entrance functionality
    console.log('Entering facility...');
  };

  return (
    <header className="relative p-8 bg-gradient-to-r from-[hsl(0,0%,10%)] to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="glados-message p-4 mb-6 rounded">
          <p className="text-[hsl(39,100%,50%)] text-sm mb-2">
            <Bot className="inline mr-2" size={16} />
            GLaDOS System Message
          </p>
          <p className="text-[hsl(0,0%,88%)]">
            "{gladosMessages[gladosMessage]}"
          </p>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-[hsl(195,100%,46%)] mb-4">
          Welcome to Aperture Science
        </h1>
        <p className="text-xl text-[hsl(0,0%,88%)] mb-8">
          We do what we must because we can. For the good of all of us, except the ones who are dead.
        </p>

        <button
          onClick={handleEnterFacility}
          className="aperture-button px-8 py-3 rounded-lg text-lg font-semibold hover:text-[hsl(39,100%,50%)] portal-glow"
        >
          <DoorOpen className="inline mr-2" size={20} />
          Enter the Facility
        </button>
      </div>
    </header>
  );
}
