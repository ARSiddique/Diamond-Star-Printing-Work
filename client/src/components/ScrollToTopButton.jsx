import { useEffect, useState } from "react"  
import { FaArrowUp } from "react-icons/fa"  

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false)  

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300)  
        }  
        window.addEventListener("scroll", toggleVisibility)  
        return () => window.removeEventListener("scroll", toggleVisibility)  
    }, [])  

    return visible ? (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-24 right-4 z-50 bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
            <FaArrowUp />
        </button>
    ) : null  
}  

export default ScrollToTopButton  
