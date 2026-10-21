"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import useToggleState from "@lib/hooks/use-toggle-state"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Text, clx } from "@modules/common/components/ui"
import { Fragment } from "react"
import CountrySelect from "../country-select"
import LanguageSelect from "../language-select"
import { Locale } from "@lib/data/locales"

const SideMenuItems = {
  Home: "/",
  Store: "/store",
  Account: "/account",
  Cart: "/cart",
}

type SideMenuProps = {
  regions: HttpTypes.StoreRegion[] | null
  locales: Locale[] | null
  currentLocale: string | null
}

const SideMenu = ({ regions, locales, currentLocale }: SideMenuProps) => {
  const countryToggleState = useToggleState()
  const languageToggleState = useToggleState()

  return (
    <div className="h-full flex items-center">
      <Popover className="h-full flex items-center">
        {({ open, close }) => (
          <>
            <div className="relative flex items-center h-full">
              {/* Clean Hamburger Icon Button */}
              <Popover.Button
                data-testid="nav-menu-button"
                aria-label="Open navigation menu"
                className="w-10 h-10 flex items-center justify-center rounded-lg text-stone-800 hover:text-stone-900 hover:bg-stone-100/70 transition-colors focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Popover.Button>
            </div>

            {open && (
              <div
                className="fixed inset-0 z-[50] bg-black/40 backdrop-blur-sm pointer-events-auto transition-opacity"
                onClick={close}
                data-testid="side-menu-backdrop"
              />
            )}

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="-translate-x-full opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="-translate-x-full opacity-0"
            >
              <PopoverPanel className="flex flex-col fixed top-0 left-0 w-4/5 max-w-sm h-full z-[51] bg-[#FAF8F5] text-stone-800 shadow-2xl border-r border-[#EADFCB]">
                <div
                  data-testid="nav-menu-popup"
                  className="flex flex-col h-full justify-between p-6 sm:p-8"
                >
                  {/* Top Bar inside Drawer with Close Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#EADFCB]/60" id="xmark">
                    <span className="font-serif text-lg font-medium text-[#2B231D]">Whimsy &amp; Wonder</span>
                    <button
                      data-testid="close-menu-button"
                      onClick={close}
                      aria-label="Close navigation menu"
                      className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-stone-200/50 text-stone-700 transition-colors"
                    >
                      <XMark className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <ul className="flex flex-col gap-6 items-start justify-start my-auto">
                    {Object.entries(SideMenuItems).map(([name, href]) => {
                      return (
                        <li key={name}>
                          <LocalizedClientLink
                            href={href}
                            className="font-serif text-2xl sm:text-3xl tracking-tight text-stone-900 hover:text-stone-600 transition-colors"
                            onClick={close}
                            data-testid={`${name.toLowerCase()}-link`}
                          >
                            {name}
                          </LocalizedClientLink>
                        </li>
                      )
                    })}
                  </ul>

                  {/* Region & Language Pickers + Footer */}
                  <div className="flex flex-col gap-y-5 pt-6 border-t border-[#EADFCB]/60">
                    {!!locales?.length && (
                      <div
                        className="flex justify-between items-center text-sm font-medium text-stone-600"
                        onMouseEnter={languageToggleState.open}
                        onMouseLeave={languageToggleState.close}
                      >
                        <LanguageSelect
                          toggleState={languageToggleState}
                          locales={locales}
                          currentLocale={currentLocale}
                        />
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            languageToggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                    )}

                    {regions && (
                      <div
                        className="flex justify-between items-center text-sm font-medium text-stone-600"
                        onMouseEnter={countryToggleState.open}
                        onMouseLeave={countryToggleState.close}
                      >
                        <CountrySelect
                          toggleState={countryToggleState}
                          regions={regions}
                        />
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            countryToggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                    )}

                    <Text className="text-xs text-stone-400 pt-2">
                      &copy; {new Date().getFullYear()} Whimsy &amp; Wonder. All rights reserved.
                    </Text>
                  </div>
                </div>
              </PopoverPanel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default SideMenu