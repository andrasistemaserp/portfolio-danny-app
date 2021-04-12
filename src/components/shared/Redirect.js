import { useRouter } from "next/router"
import { useEffect } from "react"

const Redirect = ({ to, ssr }) => {
  const router = useRouter()

  useEffect(() => {
    if (ssr) {
      window.location.pathname = to
    } else {
      router.push(to)
    }
  }, [])

  return null
}

export default Redirect