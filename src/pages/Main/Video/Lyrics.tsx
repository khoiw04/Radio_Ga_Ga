import { AnimatePresence, motion } from "motion/react"
import { usePageContext } from "@/pages/Hook/usePageContext";

const data = [
    "",
    "I'd sit alone and watch your light",
    "My only friend through teenage nights",
    "Everything I had to know",
    "I heard it on my radio",
    "",
    "You gave them all those all time stars",
    "Through wars of worlds, invaded by Mars",
    "You made'em laugh, You made'em cry",
    "You made us feel like we could fly",
    "",
    "So don't become some background noise",
    "A backdrop for the girls and boys",
    "Who just don't know or just don't care",
    "And just complain when you're not there",

    "You had your time, you had the power",
    "You've yet to have your finest hour",
    "Radio",
    "Everybody",
    "All we hear is radio ga ga",
    "Radio goo-goo, radio ga-ga",
    "All we hear is radio ga-ga",
    "Radio blah blah",
    "Radio, what's new?",
    "",
    "Radio, someone still loves you",
    "",
    "We watch the shows, we watch the stars",
    "On videos for hours and hours",
    "We hardlly need to use our ears",
    "How music changes through the years",
    "",
    "Let's hope you never leave, old friend",
    "Like all good things, on you, we depend",
    "So stick around 'cause we might miss you",
    "When we grow tired of all this visual",

    "You had your time, you had the power",
    "You've yet to have your finest hour",
    "Radio",
    "",
    "All we hear is radio ga-ga",
    "Radio goo-goo, radio ga-ga",
    "All we hear is radio ga-ga",
    "Radio goo-goo, radio ga-ga",
    "All we hear is radio ga-ga",
    "Radio blah blah",
    "Radio, what's new?",
    "",
    "Radio,",
    "someone still loves you",
    "Loves",
    "",
    "you",
    ""
]

interface VideoState {
    playing: boolean;
    ready: boolean;
    volume: number;
    lyric: number;
    muted: boolean;
}

interface Props {
    video: VideoState
}

export default function Lyrics({ video }: Props) {
    const { state } = usePageContext()

    return (
        <AnimatePresence mode="wait">
            <div className="absolute h-fit select-auto cursor-text">
                <div className="relative overflow-clip whitespace-nowrap block font-Inter">
                    {data.map((item, index) =>
                        video.lyric === index && state.ShowLyrics && !state.ShowCredit && (
                                <motion.p
                                    layout
                                    key={`lyric_${index}`}
                                    className="inline-block text-lg text-amber-100"
                                    initial={{
                                        filter: `blur(0px)`,
                                        opacity: 0,
                                        // translateY: '100%',
                                        scale: 1
                                    }}
                                    animate={{
                                        filter: `blur(0px)`,
                                        opacity: 1,
                                        translateY: '0%',
                                        scale: 1
                                    }}
                                    exit={{
                                        filter: `blur(2px)`,
                                        opacity: 0,
                                        translateY: '0%',
                                        scale: 0.95
                                    }}
                                    transition={{
                                        translateY: {
                                            duration: 0.4,
                                            ease: [0.22, 1, 0.36, 1]
                                        },
                                        opacity: {
                                            duration: 0.6,
                                            ease: [0.65, 0, 0.34, 1]
                                        },
                                        filter: {
                                            duration: 0.6,
                                            ease: [0.65, 0, 0.34, 1]
                                        },
                                        scale: {
                                            duration: 0.6,
                                            ease: [0.65, 0, 0.34, 1]
                                        }
                                    }}
                                >
                                    {item}
                            </motion.p>
                    )
                )}
                </div>
            </div>
        </AnimatePresence>
    )
}