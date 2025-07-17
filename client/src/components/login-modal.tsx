import { useState } from "react";
import { X, Terminal, LogIn } from "lucide-react";
import { useSound } from "@/hooks/use-sound";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { playSound } = useSound();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSound('click');
    // TODO: Implement authentication logic
    console.log('Login attempt:', { username, password });
    onClose();
  };

  const handleClose = () => {
    playSound('click');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="test-chamber-card p-8 rounded-lg max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-[hsl(195,100%,46%)]">
            <Terminal className="inline mr-2" size={20} />
            Aperture Terminal
          </h3>
          <button
            onClick={handleClose}
            className="text-[hsl(39,100%,50%)] hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="bg-black p-4 rounded font-mono text-sm mb-6">
          <div className="text-[hsl(195,100%,46%)]">Aperture Science Login Terminal v3.14</div>
          <div className="text-[hsl(0,0%,88%)]">Initializing security protocols...</div>
          <div className="text-green-400">Ready for authentication</div>
          <div className="text-[hsl(39,100%,50%)]">Warning: GLaDOS is watching</div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[hsl(0,0%,88%)] mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 bg-black border border-gray-600 rounded text-[hsl(0,0%,88%)] focus:border-[hsl(195,100%,46%)] focus:outline-none"
                placeholder="test_subject_###"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[hsl(0,0%,88%)] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 bg-black border border-gray-600 rounded text-[hsl(0,0%,88%)] focus:border-[hsl(195,100%,46%)] focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="aperture-button w-full py-3 rounded hover:text-[hsl(195,100%,46%)]"
            >
              <LogIn className="inline mr-2" size={16} />
              Access Terminal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
