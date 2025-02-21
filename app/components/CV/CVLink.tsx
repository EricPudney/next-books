export default function CVLink({
  title,
  text,
  link
}: {
  title: string;
  text: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
    >
      <div className="flex items-center justify-between">
        <span className="font-medium text-blue-700">{title}</span>
        <svg
          className="w-5 h-5 text-blue-600 transform transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </div>
      <p className="text-sm text-blue-600 mt-1">{text}</p>
    </a>
  );
}
