"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, ChevronDown } from "lucide-react"

export function Select({
  options,
  defaultValue,
  onChange,
}: {
  options: string[]
  defaultValue: string
  onChange?: (value: string) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(defaultValue)

  const handleSelect = (option: string) => {
    setSelected(option)
    setIsOpen(false)
    if (onChange) onChange(option)
  }

  return (
    <div className="relative">
      <SelectTrigger onClick={() => setIsOpen(!isOpen)}>
        <SelectValue selected={selected} />
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </SelectTrigger>

      <AnimatePresence>
        {isOpen && (
          <SelectContent initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <SelectScrollUpButton />
            <SelectScrollDownButton />
            <ul className="py-1">
              {options.map((option) => (
                <SelectItem key={option} onSelect={() => handleSelect(option)}>
                  {option}
                </SelectItem>
              ))}
            </ul>
          </SelectContent>
        )}
      </AnimatePresence>
    </div>
  )
}

export const SelectTrigger = ({ children, onClick }: { children?: React.ReactNode; onClick: () => void }) => (
  <button
    className="flex items-center justify-between w-40 px-3 py-2 text-sm border rounded-md bg-card border-border"
    onClick={onClick}
  >
    {children}
  </button>
)

export const SelectValue = ({ selected }: { selected: string }) => <span>{selected}</span>

export const SelectContent = ({
  children,
  initial,
  animate,
  exit,
}: { children: React.ReactNode; initial: any; animate: any; exit: any }) => (
  <motion.div
    className="absolute right-0 mt-1 w-40 rounded-md shadow-md z-10 border bg-card border-border"
    initial={initial}
    animate={animate}
    exit={exit}
  >
    {children}
  </motion.div>
)

export const SelectItem = ({ children, onSelect }: { children: React.ReactNode; onSelect: () => void }) => (
  <li>
    <button className="block w-full text-left px-3 py-2 text-sm hover:bg-secondary" onClick={onSelect}>
      {children}
    </button>
  </li>
)

export const SelectScrollUpButton = () => null
export const SelectScrollDownButton = () => null
export const SelectGroup = () => null
export const SelectLabel = () => null
export const SelectSeparator = () => null
