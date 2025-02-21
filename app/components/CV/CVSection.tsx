import { ReactElement } from "react";

export default function CVSection({title, content}: {title: string, content: ReactElement<any, any>}) {
    return (
        <section className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {title}
              </h2>
              <div className="space-y-2">
                {content}
              </div>
        </section>
    )
}