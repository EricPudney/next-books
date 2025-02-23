"use client";

export default function BackButton() {
  return (
    <button
      type="button"
      className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      onClick={() => window.history.back()}
    >
      ← Back
    </button>
  );
}
