import React, { FC } from 'react';

export const samplePrompts = [
  'Explain this code and its functionality.',
  'Refactor this code for better readability and performance.',
  'Write unit tests for this function.',
  'Find potential bugs in this code and suggest fixes.',
  'Translate this Python code to TypeScript.',
];

const PromptSuggestions: FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">AI Useful Prompts</h1>
      <ul className="list-disc pl-5 space-y-2">
        {samplePrompts.map((prompt, index) => (
          <li key={index} className="text-gray-700">
            <button
              onClick={() => console.log(prompt)}
              className="text-left hover:text-blue-600 hover:underline"
            >
              {prompt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PromptSuggestions;