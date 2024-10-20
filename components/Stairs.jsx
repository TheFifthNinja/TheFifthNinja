import { animate, motion } from 'framer-motion'

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

const reverseIndex = (index) => {
    const totalSteps = 10;
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
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
                        style={{ backgroundColor: '#E4003A' }}
                        className="h-full w-full relative"
                    />
                );
            })}
        </>
    )
}

export default Stairs