import { animate, motion } from 'framer-motion'

// variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

// calculating the reverse index for stagger delay
const reverseIndex = (index) => {
    const totalSteps = 10;
    return totalSteps - index - 1;
}
const Stairs = () => {
    return (
        <>
            { /* Render 6 motion divs, each representing a step of the stairs 
        
        Each div will have the same animation defined by the stairAnimation object
        The delay for each dive is calculated dynamically based of its reversed index,
        creating a stagger effect with decreasing delay for each subsequent step
        
        */ }
            {[...Array(10)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1,
                        }}
                        className="h-full w-full bg-white relative"
                    />
                );
            })}
        </>
    )
}

export default Stairs