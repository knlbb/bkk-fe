import React from 'react'

export default function Market() {
    const aiModels = [
        {
          id: 1,
          name: "LLama3 - 8B",
          description: "Meta's latest opensource LLama3 8B model",
          bgColor: "bg-gray-200",
          icon: "/api/placeholder/64/64",
          tag: "LLM"
        },
        {
          id: 2,
          name: "Zephyr-7B",
          description: "Zephyr is a series of language models that are trained to act as helpful assistants.",
          bgColor: "bg-red-200",
          icon: "/api/placeholder/64/64",
          tag: "LLM"
        },
        {
          id: 3,
          name: "effi-13b",
          description: "This model is an instruction finetuned model. It provides reasoning behind the response",
          bgColor: "bg-blue-100",
          icon: "/api/placeholder/64/64",
          tag: "Text"
        },
        {
          id: 4,
          name: "Medical Agent",
          description: "This model helps to answer basic medical queries.",
          bgColor: "bg-red-100",
          icon: "/api/placeholder/64/64",
          tag: "Text"
        }
      ];
    
    //   const filteredModels = aiModels.filter(model =>
    //     model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //     model.description.toLowerCase().includes(searchQuery.toLowerCase())
    //   );
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiModels.map((model) => (
            <div
              key={model.id}
              className={`${model.bgColor} rounded-lg p-6 transition-transform hover:-translate-y-1`}
            >
              <div className="h-12 w-12 mb-4">
                <img
                  src={model.icon}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{model.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{model.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-gray-800">
                    {model.tag}
                  </span>
                  <button className="text-sm font-medium text-gray-900 hover:text-gray-700">
                    Try it out
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}
