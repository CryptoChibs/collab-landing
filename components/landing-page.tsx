'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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
  return (
    <div className="min-h-screen bg-[#1A1A40] text-white flex flex-col">
      {/* Top Navigation Banner */}
      <header className="fixed w-full top-0 z-[100] shadow-lg after:absolute after:inset-0 after:shadow-[0_4px_12px_rgba(0,0,0,0.2)] after:pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFC700] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFC700]/5 to-transparent pointer-events-none" />
        <nav className="bg-[#F5F1E6] px-2 py-2 flex flex-row items-center justify-between w-full relative min-h-[40px] z-50">
          <div className="flex items-center">
            <Link href="https://collab.land" className="transform transition-transform hover:scale-105">
              {/* Desktop logo */}
              <Image
                src="/Logo-Color.png"
                alt="Collab.Land"
                width={200}
                height={40}
                className="h-8 w-auto hover:brightness-110 transition-all hidden md:block"
                priority
              />
              {/* Mobile logo */}
              <Image
                src="/LogoIconColor.svg"
                alt="Collab.Land"
                width={32}
                height={32}
                className="h-9 w-auto hover:brightness-110 transition-all md:hidden"
                priority
              />
            </Link>
          </div>
          
          <div className="flex items-center gap-2">
            {/* About Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`
                    text-[13px] h-8 px-3 py-1 
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
                        text-[13px]
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

            {/* Admins Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className={`text-[13px] h-8 px-3 py-1 text-[#1A1A40] hover:text-[#FFB800] transition-all duration-300 ${spaceMono.className} font-bold relative group hover:bg-[#FFC700]/10 data-[state=open]:bg-[#FFC700]/10`}>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  Admins <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className={`w-48 bg-[#FFC700] border-none rounded-lg shadow-lg ${spaceMono.className} backdrop-blur-sm relative z-[200] before:absolute before:inset-0 before:border-2 before:border-black/10 before:rounded-lg after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/10 after:to-transparent after:rounded-lg after:pointer-events-none`} sideOffset={4} align="center" side="bottom">
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://cc.collab.land", label: "Command Center" },
                    { href: "https://docs.collab.land", label: "Docs" },
                    { href: "https://invite.collab.land", label: "Invite" },
                    { href: "https://bit.ly/3M5lIAo", label: "Integrations" },
                    { href: "https://pricing.collab.land", label: "Premium" }
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2 text-[#1A1A40] text-[13px] font-bold hover:bg-[#FFC700]/80 hover:translate-x-1 transition-all duration-200 relative group">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Resources Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className={`text-[13px] h-8 px-3 py-1 text-[#1A1A40] hover:text-[#FFB800] transition-all duration-300 ${spaceMono.className} font-bold relative group hover:bg-[#FFC700]/10 data-[state=open]:bg-[#FFC700]/10`}>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  Resources <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className={`w-48 bg-[#FFC700] border-none rounded-lg shadow-lg ${spaceMono.className} backdrop-blur-sm relative z-[200] before:absolute before:inset-0 before:border-2 before:border-black/10 before:rounded-lg after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/10 after:to-transparent after:rounded-lg after:pointer-events-none`} sideOffset={4} align="center" side="bottom">
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://docs.collab.land", label: "Docs" },
                    { href: "https://bit.ly/3M5lIAo", label: "Integrations" },
                    { href: "https://collabland.substack.com/", label: "Newsletter" },
                    { href: "https://collabland.freshdesk.com/support/tickets/new", label: "Support" },
                    { href: "https://medium.com/collab-land", label: "Updates" },
                    { href: "https://www.youtube.com/channel/UCmyt5i7JmBPd03r2eJ-EaMA", label: "YouTube" }
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2 text-[#1A1A40] text-[13px] font-bold hover:bg-[#FFC700]/80 hover:translate-x-1 transition-all duration-200 relative group">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#1A1A40] group-hover:h-1/2 transition-all duration-200" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            {/* Socials Popover */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className={`text-[13px] h-8 px-3 py-1 text-[#1A1A40] hover:text-[#FFB800] transition-all duration-300 ${spaceMono.className} font-bold relative group hover:bg-[#FFC700]/10 data-[state=open]:bg-[#FFC700]/10`}>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  Socials <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className={`w-48 bg-[#FFC700] border-none rounded-lg shadow-lg ${spaceMono.className} backdrop-blur-sm relative z-[200] before:absolute before:inset-0 before:border-2 before:border-black/10 before:rounded-lg after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/10 after:to-transparent after:rounded-lg after:pointer-events-none`} sideOffset={4} align="center" side="bottom">
                <div className="grid gap-1 relative z-10">
                  {[
                    { href: "https://discord.gg/collabland", label: "Discord" },
                    { href: "https://www.instagram.com/collab_land_", label: "Instagram" },
                    { href: "https://linktr.ee/collab_land_", label: "Linktree" },
                    { href: "https://twitter.com/Collab_Land_", label: "X" }
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2 text-[#1A1A40] text-[13px] font-bold hover:bg-[#FFC700]/80 hover:translate-x-1 transition-all duration-200 relative group">
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
        <section className="relative overflow-hidden px-4 py-8 sm:py-12 lg:py-16 sm:px-6 lg:px-8">
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className={`mb-2 text-base font-bold tracking-tight text-[#F5F1E6] sm:text-xl lg:text-2xl ${ibmPlexSans.className}`}>
                Turning Tokens into Connections,
                <br />
                One Community at a Time
              </h1>
              <p className={`mb-8 text-xs sm:text-sm text-[#8C92AC] max-w-lg mx-auto ${spaceMono.className}`}>
                Empower your community with token-gated access, automated roles, and seamless Web3 integration.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="default"
                  className={`
                    bg-[#FFC700] text-[#1A1A40] 
                    hover:bg-[#5865F2] hover:text-white 
                    transition-colors duration-300 
                    rounded-full text-sm font-bold 
                    px-4 py-2 h-9
                    ${spaceMono.className}
                  `}
                >
                  <DiscordLogo className="mr-2 h-4 w-4" />
                  Add to Discord
                </Button>
                <Button
                  size="default"
                  className={`
                    bg-[#FFC700] text-[#1A1A40] 
                    hover:bg-[#0088cc] hover:text-white 
                    transition-colors duration-300 
                    rounded-full text-sm font-bold 
                    px-4 py-2 h-9
                    ${spaceMono.className}
                  `}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Add to Telegram
                </Button>
              </div>
            </div>
          </div>
        </section> 

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="bg-[#F5F1E6]/5 p-4">
                <Users className="mb-3 h-8 w-8 text-[#FFC700]" />
                <Link href="#community" className={`mb-1 text-lg font-bold text-white hover:text-[#FFC700] transition-colors ${ibmPlexSans.className}`}>
                  Comprehensive Community Management
                </Link>
                <p className={`text-[#8C92AC] text-sm ${spaceMono.className}`}>
                  Collab.Land offers a full-service tool that curates membership based on token ownership, ensuring that only verified token holders can access and participate in your community.
                </p>
              </Card>

              <Card className="bg-[#F5F1E6]/5 p-4">
                <Wallet className="mb-3 h-8 w-8 text-[#FFC700]" />
                <Link href="#docs" className={`mb-1 text-lg font-bold text-white hover:text-[#FFC700] transition-colors ${ibmPlexSans.className}`}>Extensive Integration and Support</Link>
                <p className={`text-[#8C92AC] text-sm ${spaceMono.className}`}>
                We support communities across 35+ different Layer 1 and Layer 2 blockchains, utilizing both fungible tokens and NFTs. It also integrates with 25+ wallets, with dozens more available via WalletConnect, providing flexibility and broad compatibility.
                </p>
              </Card>

              <Card className="bg-[#F5F1E6]/5 p-4">
                <Sparkles className="mb-3 h-8 w-8 text-[#FFC700]" />
                <Link href="#pricing" className={`mb-1 text-lg font-bold text-white hover:text-[#FFC700] transition-colors ${ibmPlexSans.className}`}>Privacy and Security Commitment</Link>
                <p className={`text-[#8C92AC] text-sm ${spaceMono.className}`}>
                Collab.Land places your privacy first, ensuring wallet addresses and social login mappings are never shared with third parties without your explicit consent. Your identity stays secure, private, and entirely under your control.
                </p>
              </Card>

              <Card className="bg-[#F5F1E6]/5 p-4">
                <Shield className="mb-3 h-8 w-8 text-[#FFC700]" />
                <Link href="#safety" className={`mb-1 text-lg font-bold text-white hover:text-[#FFC700] transition-colors ${ibmPlexSans.className}`}>Plans & Pricing</Link>
                <p className={`text-[#8C92AC] text-sm ${spaceMono.className}`}>
                Whether you're scaling up or just starting out, we've got you covered with flexible subscription plans, including customizable options that grow with your community and unlock premium features—plus a free starter tier for new communities.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#FFC700] py-1">
        <div className="w-full px-2">
          <div className="flex flex-row justify-between items-center max-w-[1920px] mx-auto">
            <nav className="flex space-x-2.5">
              <Link 
                href="https://www.collab.land/privacy-policy" 
                className={`text-[11px] font-bold text-[#1A1A40] hover:text-[#1A1A40]/80 ${spaceMono.className}`}
              >
                Privacy Policy
              </Link>
              <Link 
                href="https://www.collab.land/terms-of-service" 
                className={`text-[11px] font-bold text-[#1A1A40] hover:text-[#1A1A40]/80 ${spaceMono.className}`}
              >
                Terms
              </Link>
            </nav>
            
            <div className="flex items-center space-x-2">
              <Link href="https://linktr.ee/collab_land_" target="_blank">
                <Button size="icon" variant="ghost" className="h-6 w-6 p-0.5 hover:bg-transparent group">
                  <Image 
                    src="/LinktreeIcon.svg" 
                    alt="Linktree" 
                    width={16} 
                    height={16} 
                    className="transition-all duration-200 group-hover:scale-110 group-hover:brightness-75"
                  />
                </Button>
              </Link>
              <Link href="https://discord.gg/collabland" target="_blank">
                <Button size="icon" variant="ghost" className="h-6 w-6 p-0.5 hover:bg-transparent group">
                  <Image 
                    src="/DiscordIcon.svg" 
                    alt="Discord" 
                    width={16} 
                    height={16}
                    className="transition-all duration-200 group-hover:scale-110 group-hover:brightness-75" 
                  />
                </Button>
              </Link>
              <Link href="https://x.com/collab_land_" target="_blank">
                <Button size="icon" variant="ghost" className="h-6 w-6 p-0.5 hover:bg-transparent group">
                  <Image 
                    src="/XIcon.svg" 
                    alt="X (formerly Twitter)" 
                    width={16} 
                    height={16}
                    className="transition-all duration-200 group-hover:scale-110 group-hover:brightness-75"
                  />
                </Button>
              </Link>
            </div>

            <p className={`text-[11px] font-bold flex items-center gap-1 text-[#1A1A40] ${spaceMono.className}`}>
              <Image 
                src="/LogoIcon.svg" 
                alt="Collab.Land Logo" 
                width={14} 
                height={14} 
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