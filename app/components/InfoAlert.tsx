'use client';

import { useEffect, useState } from "react";

interface InfoAlertProps {
  title: string;
  info: string;
  duration?: number;
  type: "error" | "info";
}

export default function InfoAlert({ title, info, duration, type }: InfoAlertProps) {
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

  const divClass = type == "error" ? "bg-red-50 border border-red-200 rounded-lg shadow-sm px-6 py-4 mb-6 w-full" : "bg-blue-50 border border-blue-200 rounded-lg shadow-sm px-6 py-4 mb-6 w-full mt-32"
  const titleStyle = type == "error" ? "text-red-900 font-medium text-sm mb-1" : "text-blue-900 font-medium text-sm mb-1"
  const textStyle = type == "error" ? "text-red-700 text-sm" : "text-blue-700 text-sm"
  
  return (
    <div
      className={divClass}
      role="alert"
    >
      <p className={titleStyle}>{title}</p>
      <p className={textStyle}>{info}</p>
    </div>
);
}

