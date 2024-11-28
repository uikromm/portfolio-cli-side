import React from 'react'

export const About: React.FC = () => (
    <div>
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">About Me</h2>
        <p>
            I'm a web developer with over 4 years of experiences. I am currently working with Next.js, TypeScript and Python. Outside of my work I enjoy creating useful things and exploring advancements in AI-powered models.
        </p>
        <p className="mt-2">
            Skills: <span  className='hover:border-b'>React</span>, Next.js, TypeScript, RadixUI, Python, Git, Figma
        </p>
    </div>
)

