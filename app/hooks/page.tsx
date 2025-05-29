// hooks/useProtectedPage.ts
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import {  useAuth } from "../context/AuthContext"

export const useProtectedPage = (allowedRoles: string[] = []) => {
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/login")
    } else if (allowedRoles.length && !allowedRoles.includes(user.role)) {
      logout() 
    }
  }, [user, allowedRoles, logout, router])
}
