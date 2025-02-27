export default function JobOrSchoolDetails({
  title,
  institution,
  text,
}: {
  title: string;
  institution: string;
  text?: string;
}) {
  return (
    <>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-blue-600">{institution}</p>
          {text && <p className="text-gray-600 mt-2">{text}</p>}
        </div>
      </div>
    </>
  );
}
