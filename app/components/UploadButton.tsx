"use client";

export default function UploadButton({ active }: { active: boolean }) {
    return (
        <button
        type="submit"
        disabled={!active}
        className={`flex items-center px-6 py-2 text-sm font-medium text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            ${
                active
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            >
    {active ? "Upload Book" : "Admin Only"}
  </button>);
}
