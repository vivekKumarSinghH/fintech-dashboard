"use client"

import Link from "next/link"
import { Home, Code, BarChart2, DollarSign, Users, Settings } from "lucide-react"
import { motion } from "framer-motion"

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Code, label: "API Management", href: "/api-management" },
  { icon: BarChart2, label: "Stocks & Assets", href: "/stocks-assets" },
  { icon: DollarSign, label: "Transactions", href: "/transactions" },
  { icon: Users, label: "User Management", href: "/user-management" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

const Sidebar = () => {
  return (
    <motion.div
      className="bg-secondary w-64 h-full flex flex-col"
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4">
        <h1 className="text-2xl font-bold">FinTech Dashboard</h1>
      </div>
      <nav className="flex-1">
        <ul>
          {menuItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={item.href} className="flex items-center p-4 hover:bg-primary/10">
                <item.icon className="mr-4" />
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  )
}

export default Sidebar
