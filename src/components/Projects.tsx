import React from 'react'

export const Projects: React.FC = () => (
    <div>
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">My Projects</h2>
        <h3>Current projects:</h3>
        <ul className="list-disc list-inside">
            <li><a href="#" className='text-[#06B6D4] underline hover:text-[#49d8f1]'>Fitness web app</a> - Comming soon!</li>
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

