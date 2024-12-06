import React from 'react'

export const Media: React.FC = () => (
    <div>
        <h2 className="text-2xl font-bold mb-2 text-[#06b6d4]">Media Links</h2>
        <ul className="list-disc list-inside">
            <li>GitHub: <a href="https://github.com/uikromm" className="underline text-[#06B6D4] hover:text-[#49d8f1]">github.com/uikromm</a></li>
            <li>LinkedIn: <a href="https://linkedin.com/in/uikromm" className="underline text-[#06B6D4] hover:text-[#49d8f1]">linkedin.com/in/uikrom</a></li>
            <li>Personal Website: <a href="https://uikromm.github.io/" className="underline text-[#06B6D4] hover:text-[#49d8f1]">uikromm.github.io</a></li>
        </ul>
    </div>
)

