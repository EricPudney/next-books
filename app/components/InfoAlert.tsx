'use client';

import { useEffect, useState } from "react";

interface InfoAlertProps {
  title: string;
  info: string;
  duration?: number;
}

export function InfoAlert({ title, info, duration = 5000 }: InfoAlertProps) {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    setIsVisible(true);

    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [title, info, duration]);

  if (!isVisible) return null;
  
  return (
    <div
      className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 m-0 w-full"
      role="alert"
    >
      <p className="font-bold">{title}</p>
      <p className="text-sm">{info}</p>
    </div>
  );
}
