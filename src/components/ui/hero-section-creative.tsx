'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight, Play } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'

export function CreativeHeroSection() {
    return (
        <>
            <CreativeHeader />
            <main className="overflow-x-hidden bg-black">
                <section className="relative">
                    <div className="py-24 md:pb-32 lg:pb-36 lg:pt-72">
                        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl md:text-6xl lg:mt-16 xl:text-7xl text-white font-bold">
                                    Creative AI
                                    <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Revolution</span>
                                </h1>
                                <p className="mt-8 max-w-2xl text-balance text-lg text-gray-300">
                                    Experience the future of visual storytelling with cutting-edge AI technology that brings Hollywood-level VFX to your fingertips.
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        size="lg"
                                        className="h-12 rounded-full pl-5 pr-3 text-base bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                                        <Play className="mr-2 w-4 h-4" />
                                        <span className="text-nowrap">Watch Demo</span>
                                        <ChevronRight className="ml-1" />
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-full px-5 text-base hover:bg-white/10 text-white border border-white/20">
                                        <span className="text-nowrap">Explore Gallery</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Full screen video background */}
                        <div className="aspect-[16/9] absolute inset-1 overflow-hidden rounded-3xl border border-white/10 sm:aspect-video lg:rounded-[3rem]">
                            <video
                                autoPlay
                                loop
                                muted
                                className="size-full object-cover opacity-40"
                                src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35c1c9a9a089&profile_id=139&oauth2_token_id=57447761"
                            />
                            {/* Overlay for better text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
                        </div>
                    </div>
                </section>
                
                <section className="bg-black pb-2">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:border-white/20 md:pr-6">
                                <p className="text-end text-sm text-gray-400">Trusted by industry leaders</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit opacity-60 hover:opacity-100 transition-opacity"
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobe/adobe-original.svg"
                                            alt="Adobe"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit opacity-60 hover:opacity-100 transition-opacity invert"
                                            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Blender_logo_no_text.svg"
                                            alt="Blender"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit opacity-60 hover:opacity-100 transition-opacity invert"
                                            src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Autodesk_Maya_2016_logo.png"
                                            alt="Maya"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit opacity-60 hover:opacity-100 transition-opacity invert"
                                            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Houdini3D_Logo.png"
                                            alt="Houdini"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <div className="mx-auto h-5 w-20 bg-white opacity-60 hover:opacity-100 transition-opacity rounded flex items-center justify-center">
                                            <span className="text-black text-xs font-bold">UNITY</span>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="mx-auto h-5 w-20 bg-gradient-to-r from-blue-500 to-purple-600 opacity-60 hover:opacity-100 transition-opacity rounded flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">UNREAL</span>
                                        </div>
                                    </div>
                                </InfiniteSlider>

                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'AI Tools', href: '#tools' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
]

const CreativeHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-20 w-full pt-2">
                <div className={cn('mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', scrolled && 'bg-black/80 backdrop-blur-2xl border border-white/10')}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <div className="flex items-center space-x-2">
                                <CreativeLogo />
                                <span className="text-white font-bold text-xl">CreativeAI</span>
                            </div>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200 text-white" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 text-white" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-gray-300 hover:text-white block duration-150">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-black/90 group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-white/10 p-6 shadow-2xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <a
                                                href={item.href}
                                                className="text-gray-300 hover:text-white block duration-150">
                                                <span>{item.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-white/20 text-white hover:bg-white/10">
                                    <span>Login</span>
                                </Button>
                                <Button
                                    size="sm"
                                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                                    <span>Get Started</span>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}

const CreativeLogo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center', className)}>
            <div className="h-4 w-4 rounded bg-white opacity-90" />
        </div>
    )
}