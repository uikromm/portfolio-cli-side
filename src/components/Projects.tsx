import React from 'react'

export const Projects: React.FC = () => (
    <div>
        <h2 className="text-2xl font-bold mb-2 text-[#06b6d4]">My Projects</h2>
        <h3>Current projects:</h3>
        <ul className="list-disc list-inside">
            <li><a href="https://github.com/uikromm/financial-sheet" className='text-[#06B6D4] underline hover:text-[#91eafa]'>Financial Sheet</a></li>
        </ul>
        <br />
        <h3>Selected projects:</h3>
        <ul className="list-disc list-inside">
            <li><a href="https://search-gbook.vercel.app/" className='text-[#06B6D4] underline hover:text-[#49d8f1]'>Search-gbook</a> - Built with Next.js and google's books API integration.</li>
            <li><a href="https://f-plusaudit.uz/" className='text-[#06B6D4] underline hover:text-[#49d8f1]'>F-plus audit</a> - TypeScript, Next.js, Sanity Studio (CMS as a client side).</li>
            <li><a href="https://allgood.uz/" className='text-[#06B6D4] underline hover:text-[#49d8f1]'>AllGood e-commerce</a> - Contributed to pages of about, b2b, and partner with JavaScript and TailwindCSS.</li>
        </ul>
    </div>
)

