import { usePresenceData, motion } from "motion/react"
import { forwardRef } from "react"
import "./style.scss"

const SlideComponent = forwardRef(function SlideComponent(
    { color, children }: { color: string, children: React.ReactNode },
    ref: React.Ref<HTMLDivElement>
) {
    const direction = usePresenceData()
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{
                opacity: 1,
                x: 0,
                transition: {
                    delay: 0.2,
                    type: "spring",
                    visualDuration: 0.3,
                    bounce: 0.4,
                },
            }}
            exit={{ opacity: 0, x: direction * -50 }}
            className="slide-component"
            style={{ backgroundColor: color }}
        >
            {children}
        </motion.div>
    )
})

export default SlideComponent