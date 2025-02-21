'use client';

import { useEffect, useState } from "react";

interface InfoAlertProps {
  title: string;
  info: string;
  duration?: number;
}

export function InfoAlert({ title, info, duration }: InfoAlertProps) {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    setIsVisible(true);

    if (duration && duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [title, info, duration]);

  if (!isVisible) return null;
  
  return (
    <div
      className="bg-blue-50 border border-blue-200 rounded-lg shadow-sm px-6 py-4 mb-6 w-full"
      role="alert"
    >
      <p className="text-blue-900 font-medium text-sm mb-1">{title}</p>
      <p className="text-blue-700 text-sm">{info}</p>
    </div>
);
}
