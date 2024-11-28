'use client'

import React, { useState, useRef, useEffect } from 'react'
import { About } from './About'
import { Projects } from './Projects'
import { Media } from './Media'
import { Help } from './Help'

const Terminal: React.FC = () => {
    const [input, setInput] = useState('')
    const [history, setHistory] = useState<any[]>([])
    const [commandHistory, setCommandHistory] = useState<string[]>([])
    const [historyIndex, setHistoryIndex] = useState(-1)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [history])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCommand()
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            navigateHistory(-1)
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            navigateHistory(1)
        }
    }

    const navigateHistory = (direction: number) => {
        const newIndex = historyIndex + direction
        if (newIndex >= -1 && newIndex < commandHistory.length) {
            setHistoryIndex(newIndex)
            setInput(newIndex === -1 ? '' : commandHistory[newIndex])
        }
    }

    const handleCommand = () => {
        const trimmedInput = input.trim().toLowerCase()
        setHistory([...history, `$ ${input}`])
        setCommandHistory([trimmedInput, ...commandHistory])
        setHistoryIndex(-1)

        switch (trimmedInput) {
            case 'about':
                setHistory(prev => [...prev, <About key={prev.length} />])
                break
            case 'projects':
                setHistory(prev => [...prev, <Projects key={prev.length} />])
                break
            case 'media':
                setHistory(prev => [...prev, <Media key={prev.length} />])
                break
            case 'clear':
                setHistory([])
                break
            case 'cls':
                setHistory([])
                break
            case 'help':
                setHistory(prev => [...prev, <Help key={prev.length} />])
                break
            default:
                setHistory(prev => [...prev, `Command not found: ${input}`])
        }

        setInput('')
    }

    return (
        <div className="bg-black border border-[#555] text-white p-4 font-mono h-full overflow-y-auto">
            <div className="mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
                Welcome to the Web Developer Terminal Portfolio. Type 'help' for a list of commands.
            </div>
            {history.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
            <div className="flex">
                <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">$&nbsp;</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    className="bg-transparent outline-none flex-grow text-white"
                    autoFocus
                />
            </div>
        </div>
    )
}

export default Terminal

