"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface User {
  name: string
  role: string
}

interface AuthContextType {
  user: User | null
  setUser: (user: User | null) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const decodeJWT = (token: string): any | null => {
  try {
    const payload = token.split(".")[1] // Extract payload part
    const decoded = atob(payload) // Decode Base64
    return JSON.parse(decoded) // Parse JSON
  } catch (error) {
    console.error("Invalid token:", error)
    return null
  }
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token") // Retrieve JWT
      if (token) {
        const decoded = decodeJWT(token)
        if (decoded && decoded.username) {
          const userData = { name: decoded.username, role: decoded.role || "" }
          setUser(userData)

          // Redirect based on role
          if (decoded.role === "admin") {
            router.push("/dashboard")
          } else {
            router.push("/studentDashboard")
          }
        }
      }
    }
  }, [])
  

  // Logout function
  const logout = () => {
    localStorage.removeItem("token") // Remove token
    setUser(null) // Clear user state
    router.push("/login") // Redirect to login
  }

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
