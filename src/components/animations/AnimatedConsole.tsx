/**
 * AnimatedConsole Component
 * Simulates real-time server console with typing animation
 * Perfect for showcasing Pterodactyl panel features
 */

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConsoleLog {
  id: number;
  timestamp: string;
  level: 'info' | 'warn' | 'error' | 'success' | 'server';
  message: string;
}

const logColors = {
  info: 'text-blue-400',
  warn: 'text-yellow-400',
  error: 'text-red-400',
  success: 'text-green-400',
  server: 'text-purple-400',
};

// Realistic Minecraft server startup logs
const serverLogs: Omit<ConsoleLog, 'id' | 'timestamp'>[] = [
  { level: 'server', message: 'Starting Minecraft server...' },
  { level: 'info', message: 'Loading properties' },
  { level: 'info', message: 'Default game type: SURVIVAL' },
  { level: 'info', message: 'Generating keypair' },
  { level: 'info', message: 'Starting Minecraft server on *:25565' },
  { level: 'info', message: 'Using epoll channel type' },
  { level: 'info', message: 'Preparing level "world"' },
  { level: 'info', message: 'Preparing start region for dimension minecraft:overworld' },
  { level: 'success', message: 'Time elapsed: 2843 ms' },
  { level: 'info', message: 'Loading plugins...' },
  { level: 'success', message: 'Loaded 8 plugins successfully' },
  { level: 'server', message: 'Done! Server ready for connections' },
  { level: 'success', message: 'Ready to accept players!' },
];

export function AnimatedConsole() {
  const [logs, setLogs] = useState<ConsoleLog[]>([]);
  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  useEffect(() => {
    if (currentLogIndex >= serverLogs.length) {
      // Reset after all logs shown
      const resetTimer = setTimeout(() => {
        setLogs([]);
        setCurrentLogIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }

    // Add next log with delay
    const timer = setTimeout(() => {
      const now = new Date();
      const timestamp = `${String(now.getHours()).padStart(2, '0')}:${String(
        now.getMinutes()
      ).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

      const newLog: ConsoleLog = {
        ...serverLogs[currentLogIndex],
        id: currentLogIndex,
        timestamp,
      };

      setLogs((prev) => [...prev, newLog]);
      setCurrentLogIndex((prev) => prev + 1);
    }, 600); // 600ms delay between logs

    return () => clearTimeout(timer);
  }, [currentLogIndex]);

  return (
    <div className="relative w-full h-full min-h-[240px] bg-black/90 rounded p-4 font-mono text-xs overflow-hidden">
      <div className="space-y-1">
        <AnimatePresence>
          {logs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="flex gap-2"
            >
              {/* Timestamp */}
              <span className="text-gray-500 select-none">[{log.timestamp}]</span>

              {/* Level */}
              <span className={`${logColors[log.level]} font-semibold select-none`}>
                [{log.level.toUpperCase()}]
              </span>

              {/* Message with typing effect */}
              <TypewriterText text={log.message} delay={20} />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Cursor blinking effect */}
        {currentLogIndex < serverLogs.length && (
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-green-400 ml-1"
          />
        )}
      </div>
    </div>
  );
}

/**
 * Typewriter text effect component
 */
function TypewriterText({ text, delay = 30 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return <span className="text-gray-300">{displayedText}</span>;
}
