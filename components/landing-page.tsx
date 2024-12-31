'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Sparkles, Wallet, Shield, ChevronDown, Send, Users } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Space_Mono, IBM_Plex_Sans } from 'next/font/google'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] })
const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['700'] })

const XLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 1200 1227"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/>
  </svg>
)

const DiscordLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 127 96"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
  </svg>
)

export function LandingPage() {
  const [openPopover, setOpenPopover] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#1A1A40] text-white flex flex-col">
      {/* Top Navigation Banner */}
      <header className="fixed w-full top-0 z-[100] shadow-lg after:absolute after:inset-0 after:shadow-[0_4px_12px_rgba(0,0,0,0.2)] after:pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFC700] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFC700]/5 to-transparent pointer-events-none" />
        <nav className="bg-[#F5F1E6] px-2 py-3 flex flex-row items-center justify-between w-full relative min-h-[48px] z-50">
          <div className="flex items-center">
            <Link href="https://collab.land" className="transform transition-transform hover:scale-105">
              {/* Desktop logo */}
              <Image
                src="/Logo-Color.png"
                alt="Collab.Land"
                width={180}
                height={36}
                className="h-8 w-auto hover:brightness-110 transition-all hidden md:block"
                priority
              />
              {/* Mobile logo */}
              <Image
                src="/LogoIconColor.svg"
                alt="Collab.Land"
                width={32}
                height={32}
                className="h-8 w-auto hover:brightness-110 transition-all md:hidden"
                priority
              />
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`
                    text-base h-8 px-3 py-1 
                    text-[#1A1A40] hover:text-[#FFB800] 
                    transition-all duration-300 
                    ${spaceMono.className} 
                    font-bold
                    relative
                    group
                    hover:bg-[#FFC700]/10
                    data-[state=open]:bg-[#FFC700]/10
                  `}
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  About <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                className={`
                  w-48 bg-[#FFC700] 
                  border-none rounded-lg shadow-lg 
                  ${spaceMono.className}
                  backdrop-blur-sm
                  relative
                  z-[200]
                  before:absolute before:inset-0 
                  before:border-2 before:border-black/10 
                  before:rounded-lg
                  after:absolute after:inset-0 
                  after:bg-gradient-to-b after:from-white/10 after:to-transparent 
                  after:rounded-lg after:pointer-events-none
                `}
                sideOffset={4}
                align="center"
                side="bottom"
              >
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://collab.land/overview", label: "Overview" },
                    { href: "https://collab.land/team", label: "Team" },
                    { href: "https://docs.collab.land/dao/token/token_overview", label: "$COLLAB" }
                  ].map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="
                        block px-4 py-2 
                        text-[#1A1A40] 
                        text-base
                        font-bold
                        hover:bg-[#FFC700]/80 
                        hover:translate-x-1
                        transition-all duration-200
                        relative
                        group
                      "
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`
                    text-base h-8 px-3 py-1 
                    text-[#1A1A40] hover:text-[#FFB800] 
                    transition-all duration-300 
                    ${spaceMono.className} 
                    font-bold
                    relative
                    group
                    hover:bg-[#FFC700]/10
                    data-[state=open]:bg-[#FFC700]/10
                  `}
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  Admins <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                className={`
                  w-48 bg-[#FFC700] 
                  border-none rounded-lg shadow-lg 
                  ${spaceMono.className}
                  backdrop-blur-sm
                  relative
                  z-[200]
                  before:absolute before:inset-0 
                  before:border-2 before:border-black/10 
                  before:rounded-lg
                  after:absolute after:inset-0 
                  after:bg-gradient-to-b after:from-white/10 after:to-transparent 
                  after:rounded-lg after:pointer-events-none
                `}
                sideOffset={4}
                align="center"
                side="bottom"
              >
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://cc.collab.land", label: "Command Center" },
                    { href: "https://docs.collab.land", label: "Docs" },
                    { href: "https://invite.collab.land", label: "Invite" },
                    { href: "https://bit.ly/3M5lIAo", label: "Integrations" },
                    { href: "https://pricing.collab.land", label: "Premium" }
                  ].map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="
                        block px-4 py-2 
                        text-[#1A1A40] 
                        text-base
                        font-bold
                        hover:bg-[#FFC700]/80 
                        hover:translate-x-1
                        transition-all duration-200
                        relative
                        group
                      "
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`
                    text-base h-8 px-3 py-1 
                    text-[#1A1A40] hover:text-[#FFB800] 
                    transition-all duration-300 
                    ${spaceMono.className} 
                    font-bold
                    relative
                    group
                    hover:bg-[#FFC700]/10
                    data-[state=open]:bg-[#FFC700]/10
                  `}
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  Resources <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                className={`
                  w-48 bg-[#FFC700] 
                  border-none rounded-lg shadow-lg 
                  ${spaceMono.className}
                  backdrop-blur-sm
                  relative
                  z-[200]
                  before:absolute before:inset-0 
                  before:border-2 before:border-black/10 
                  before:rounded-lg
                  after:absolute after:inset-0 
                  after:bg-gradient-to-b after:from-white/10 after:to-transparent 
                  after:rounded-lg after:pointer-events-none
                `}
                sideOffset={4}
                align="center"
                side="bottom"
              >
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://docs.collab.land", label: "Docs" },
                    { href: "https://bit.ly/3M5lIAo", label: "Integrations" },
                    { href: "https://collabland.substack.com/", label: "Newsletter" },
                    { href: "https://collab.land/security", label: "Security" },
                    { href: "https://collabland.freshdesk.com/support/tickets/new", label: "Support" },
                    { href: "https://medium.com/collab-land", label: "Updates" },
                    { href: "https://www.youtube.com/channel/UCmyt5i7JmBPd03r2eJ-EaMA", label: "YouTube" }
                  ].map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="
                        block px-4 py-2 
                        text-[#1A1A40] 
                        text-base
                        font-bold
                        hover:bg-[#FFC700]/80 
                        hover:translate-x-1
                        transition-all duration-200
                        relative
                        group
                      "
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`
                    text-base h-8 px-3 py-1 
                    text-[#1A1A40] hover:text-[#FFB800] 
                    transition-all duration-300 
                    ${spaceMono.className} 
                    font-bold
                    relative
                    group
                    hover:bg-[#FFC700]/10
                    data-[state=open]:bg-[#FFC700]/10
                  `}
                >
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  Socials <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                className={`
                  w-48 bg-[#FFC700] 
                  border-none rounded-lg shadow-lg 
                  ${spaceMono.className}
                  backdrop-blur-sm
                  relative
                  z-[200]
                  before:absolute before:inset-0 
                  before:border-2 before:border-black/10 
                  before:rounded-lg
                  after:absolute after:inset-0 
                  after:bg-gradient-to-b after:from-white/10 after:to-transparent 
                  after:rounded-lg after:pointer-events-none
                `}
                sideOffset={4}
                align="center"
                side="bottom"
              >
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://discord.gg/collabland", label: "Discord" },
                    { href: "https://www.instagram.com/collab_land_", label: "Instagram" },
                    { href: "https://linktr.ee/collab_land_", label: "Linktree" },
                    { href: "https://twitter.com/Collab_Land_", label: "X" }
                  ].map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href} 
                      className="
                        block px-4 py-2 
                        text-[#1A1A40] 
                        text-base
                        font-bold
                        hover:bg-[#FFC700]/80 
                        hover:translate-x-1
                        transition-all duration-200
                        relative
                        group
                      "
                    >
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </nav>
      </header>

      <main className="flex-grow pt-[44px]">
        <section className="relative min-h-[800px] overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/LANDING_PAGE.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          {/* Content Overlay */}
          <div className="relative z-10 h-full">
            <div className="absolute right-8 sm:right-12 lg:right-16 top-52">
              <div className="max-w-2xl">
                <h1 className="text-5xl sm:text-6xl font-bold text-[#F5F1E6] mb-8">
                  Turning Tokens 
                  <br />
                  into Connections, 
                  <br />
                  One Community 
                  <br />
                  at a Time
                </h1>

                <div className="flex flex-wrap gap-4">
                  <Button
                    size="default"
                    className={`
                      bg-[#FFC700] text-[#1A1A40] 
                      hover:bg-[#5865F2] hover:text-white 
                      transition-colors duration-300 
                      rounded-full text-lg font-bold 
                      px-8 py-4 h-14 
                      ${spaceMono.className}
                    `}
                  >
                    Add to Discord
                  </Button>
                  <Button
                    size="default"
                    className={`
                      bg-[#FFC700] text-[#1A1A40] 
                      hover:bg-[#0088cc] hover:text-white 
                      transition-colors duration-300 
                      rounded-full text-lg font-bold
                      px-8 py-4 h-14 
                      ${spaceMono.className}
                    `}
                  >
                    Add to Telegram
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section> 

        <section className="border-t-2 border-[#3A3A6E] h-2 mb-18">
          <div className="relative">
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3A3A6E] to-transparent" />
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className={`text-lg md:text-xl lg:text-2xl font-bold text-[#FFC700] mb-6 ${ibmPlexSans.className}`}>
              Collab.Land: The Ultimate Solution for Web3 Community Management
            </h2>
            <div className={`space-y-4 text-sm md:text-base text-white ${spaceMono.className}`}>
              <p>
                Collab.Land simplifies managing tokenized crypto communities by taking care of membership verification with precision. We ensure every new member holds the necessary token(s) to join and perform regular re-verifications to keep your community safe and accurate.
              </p>
              <p>
                And unlock the full potential of your community with Pro Mini Apps, available exclusively through our Premier Subscription. Go beyond token gating to supercharge engagement and create dynamic, pro-social spaces that thrive.
              </p>
              <p>
                For over four years, tens of thousands of communities have trusted Collab.Land to deliver secure, seamless access to exclusive content, chats, and tools that elevate the community experience.
              </p>
              <p>
                Take control and manage your bot effortlessly in the Admin Portal: <Link href="https://cc.collab.land" className="text-[#FFC700] hover:underline">cc.collab.land</Link>
              </p>
            </div>
          </div>
        </section>

        <section className="border-t-2 border-[#3A3A6E] h-2 mb-20">
          <div className="relative">
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3A3A6E] to-transparent" />
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 lg:px-8 mb-32">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="bg-[#F5F1E6] border hover:bg-[#FFC700] transition-all duration-300 h-[220px] flex flex-col">
                <CardHeader className="pb-2 pt-6 px-6 text-center">
                  <CardTitle className={`text-lg md:text-xl font-bold text-[#1A1A40] ${ibmPlexSans.className}`}>
                    Comprehensive Community Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow overflow-auto p-3 pt-1 text-center">
                  <p className={`text-[#1A1A40] text-sm md:text-base ${spaceMono.className}`}>
                    Collab.Land offers a full-service tool that curates membership based on token ownership, ensuring that only verified token holders can access and participate in your community.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#F5F1E6] border hover:bg-[#FFC700] transition-all duration-300 h-[220px] flex flex-col">
                <CardHeader className="pb-2 pt-6 px-6 text-center">
                  <CardTitle className={`text-lg md:text-xl font-bold text-[#1A1A40] ${ibmPlexSans.className}`}>
                    <Link href="https://pricing.collab.land" className="hover">
                      Supported Chains and Wallets
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow overflow-auto p-3 pt-1 text-center">
                  <p className={`text-[#1A1A40] text-sm md:text-base ${spaceMono.className}`}>
                    Access comprehensive guides and tutorials to set up, manage, and optimize your Collab.Land integration. Our documentation covers everything from basic setup to advanced features.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#F5F1E6] border hover:bg-[#FFC700] transition-all duration-300 h-[220px] flex flex-col">
                <CardHeader className="pb-2 pt-6 px-6 text-center">
                  <CardTitle className={`text-lg md:text-xl font-bold text-[#1A1A40] ${ibmPlexSans.className}`}>
                    <Link href="https://pricing.collab.land" className="hover">
                      Pricing
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow overflow-auto p-3 pt-1 text-center">
                  <p className={`text-[#1A1A40] text-sm md:text-base ${spaceMono.className}`}>
                    Choose from our flexible subscription plans to unlock premium features and enhance your community management experience.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#F5F1E6] border hover:bg-[#FFC700] transition-all duration-300 h-[220px] flex flex-col">
                <CardHeader className="pb-2 pt-6 px-6 text-center">
                  <CardTitle className={`text-lg md:text-xl font-bold text-[#1A1A40] ${ibmPlexSans.className}`}>
                    <Link href="https://collab.land/safety" className="hover">
                      Safety
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow overflow-auto p-3 pt-1 text-center">
                  <p className={`text-[#1A1A40] text-sm md:text-base ${spaceMono.className}`}>
                    Safely serving tokenized communities since Spring 2020. Ensure your community's security by verifying our official bot.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#FFC700] py-2">
        <div className="w-full px-4">
          <div className="flex flex-row justify-between items-center max-w-[1920px] mx-auto">
            <nav className="flex space-x-4">
              <Link 
                href="https://www.collab.land/privacy-policy" 
                className={`text-sm font-bold text-[#1A1A40] hover:text-[#1A1A40]/80 ${spaceMono.className}`}
              >
                Privacy Policy
              </Link>
              <Link 
                href="https://www.collab.land/terms-of-service" 
                className={`text-sm font-bold text-[#1A1A40] hover:text-[#1A1A40]/80 ${spaceMono.className}`}
              >
                Terms
              </Link>
            </nav>
            
            <div className="flex items-center space-x-3">
              <Link href="https://linktr.ee/collab_land_" target="_blank">
                <Button size="icon" variant="ghost" className="h-8 w-8 p-1 hover:bg-transparent group">
                  <Image 
                    src="/LinktreeIcon.svg" 
                    alt="Linktree" 
                    width={20} 
                    height={20} 
                    className="transition-all duration-200 group-hover:scale-110 group-hover:brightness-75"
                  />
                </Button>
              </Link>
              <Link href="https://discord.gg/collabland" target="_blank">
                <Button size="icon" variant="ghost" className="h-8 w-8 p-1 hover:bg-transparent group">
                  <Image 
                    src="/DiscordIcon.svg" 
                    alt="Discord" 
                    width={20} 
                    height={20}
                    className="transition-all duration-200 group-hover:scale-110 group-hover:brightness-75" 
                  />
                </Button>
              </Link>
              <Link href="https://x.com/collab_land_" target="_blank">
                <Button size="icon" variant="ghost" className="h-8 w-8 p-1 hover:bg-transparent group">
                  <Image 
                    src="/XIcon.svg" 
                    alt="X (formerly Twitter)" 
                    width={20} 
                    height={20}
                    className="transition-all duration-200 group-hover:scale-110 group-hover:brightness-75"
                  />
                </Button>
              </Link>
            </div>

            <p className={`text-sm font-bold flex items-center gap-1.5 text-[#1A1A40] ${spaceMono.className}`}>
              <Image 
                src="/LogoIcon.svg" 
                alt="Collab.Land Logo" 
                width={18} 
                height={18} 
                className="inline-block"
              />
              Collab.Land® 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}