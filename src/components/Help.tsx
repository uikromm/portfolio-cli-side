import React from 'react'

export const Help: React.FC = () => (
  <div>
    <h2 className="text-2xl font-bold mb-2 text-[#06b6d4]">Available Commands</h2>
    <ul className="list-disc list-inside">
      <li>about - Display information about me</li>
      <li>projects - Show my project portfolio</li>
      <li>media - Display my social media and professional links</li>
      <br />
      <hr />
      <br />
      <li>clear - Clear the terminal screen</li>
      <li>help - Show this help message</li>
      <li>exit - Exit and redirect to the main portfolio</li>
    </ul>
  </div>
)

