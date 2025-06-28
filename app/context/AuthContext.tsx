"use client"

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react"
import { useRouter } from "next/navigation"

type User = {
  name: string
  role: string
}

type DecodedToken = {
  username: string
  role: string
  exp: number
}

type AuthContextType = {
  user: User | null
  setUser: (user: User | null) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  const decodeToken = (token: string): DecodedToken | null => {
    try {
      const payload = token.split(".")[1]
      const decoded = atob(payload)
      return JSON.parse(decoded) as DecodedToken
    } catch {
      return null
    }
  }

  const logout = useCallback(() => {
    localStorage.removeItem("token")
    setUser(null)
    router.push("/login")
  }, [router])

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) return

    const decoded = decodeToken(token)
    if (!decoded) {
      logout()
      return
    }

    const isExpired = decoded.exp < Date.now() / 1000
    if (isExpired) {
      logout()
      return
    }

    setUser({ name: decoded.username, role: decoded.role })
  }, [logout])

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider")
  }
  return context
}
