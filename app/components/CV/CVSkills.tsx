export default function CVSkills() {
  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "AI",
    "Java/Java Spring",
    "Go",
  ];

  return (
    <div className="space-y-2">
      {skills.map((skill) => (
        <div
          key={skill}
          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full inline-block mr-2 mb-2"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}
