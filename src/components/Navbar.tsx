import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTheme } from "@/lib/theme-provider";

/* ---------------- NAV STRUCTURE ---------------- */

const NAV_ITEMS: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "About",
    children: [
      { title: "IEEE", href: "/about/ieee" },
      { title: "IEEE SOU SB", href: "/about/ieee-sou-sb" },
      {
        title: "GROUP",
        children: [
          { title: "IEEE SOU WIE AG", href: "/about/ieee-sou-wie-sb-ag" },
          { title: "IEEE SOU SIGHT SBG", href: "/about/ieee-sou-sight-sbg" },
        ],
      },
      {
        title: "CHAPTER",
        children: [
          { title: "IEEE SOU SPS SBC", href: "/about/ieee-sou-sps-sbc" },
          { title: "IEEE SOU CS SBC", href: "/about/ieee-sou-cs-sbc" },
        ],
      },
    ],
  },
<<<<<<< HEAD
  {
    title: "Events",
    children: [
      { title: "2024", href: "/events?year=2024" },
      { title: "2025", href: "/events?year=2025" },
      { title: "2026", href: "/events?year=2026" },
    ],
  },
=======

  { title: "Events", href: "/events" },

>>>>>>> dbc334a (fix)
  {
    title: "Team",
    children: [
      { title: "Faculty Advisor", href: "/team/faculty-advisor" },
      { title: "Advisory Board", href: "/team/advisory-board" },
      { title: "Executive Members", href: "/team/executive-members" },
      { title: "Core Members", href: "/team/core-members" },
    ],
  },
  {
    title: "Achievement",
    children: [
      { title: "Branch Awards", href: "/achievement/branch-awards" },
      { title: "Newsletter", href: "/achievement/newsletter" },
      { title: "Student Achievement", href: "/achievement/student" },
    ],
  },
  { title: "Bylaws", href: "/bylaws" },
  { title: "Contact Us", href: "/contact" },
];

/* ---------------- COMPONENT ---------------- */

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleMobileDropdownToggle = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
<<<<<<< HEAD
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 py-2 shadow-md backdrop-blur-sm"
          : "py-4 bg-white dark:bg-gray-900"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                loading="lazy"
                src={
                  theme === "dark"
                    ? "http://ieee.socet.edu.in/wp-content/uploads/2025/09/Group-2085662984-1-scaled.png"
                    : "http://ieee.socet.edu.in/wp-content/uploads/2025/09/N_Wedge-removebg-preview.png"
                }
                alt="IEEE SOU SB Logo"
                className={cn(
                  "w-auto object-contain",
                  theme === "dark" ? "h-12 md:h-20 max-w-[300px]" : "h-12 md:h-20 max-w-[350px]"
                )}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center md:space-x-0.5">
            {NAV_ITEMS.map((item) => (
              <React.Fragment key={item.title}>
                {item.children ? (
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          {item.title}
                        </NavigationMenuTrigger>

                        <NavigationMenuContent>
                          <div className="w-60 p-2">
                            {item.children.map((child) => (
                              <React.Fragment key={child.title}>
                                {child.children ? (
                                  <div className="px-3 py-2">
                                    <p className="text-xs font-semibold tracking-wide text-muted-foreground mb-2 text-left">
                                      {child.title}
                                    </p>
                                    <div className="space-y-1">
                                      {child.children.map((nestedChild) => (
                                        <NavigationMenuLink asChild key={nestedChild.title}>
                                          <Link
                                            to={nestedChild.href}
                                            className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-left hover:pl-4"
                                          >
                                            {nestedChild.title}
                                          </Link>
                                        </NavigationMenuLink>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <NavigationMenuLink asChild>
                                    <Link
                                      to={child.href || "#"}
                                      className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-center hover:pl-4"
                                    >
                                      {child.title === "IEEE SOU SB" ? (
                                        <img
                                          src="http://ieee.socet.edu.in/wp-content/uploads/2025/06/IEEE-SOU-SB-Logo-scaled.png"
                                          alt="IEEE SOU SB Logo"
                                          className="h-10 mx-auto object-contain"
                                        />
                                      ) : (
                                        child.title
                                      )}
                                    </Link>
                                  </NavigationMenuLink>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                ) : (
                  <Link
                    to={item.href || "#"}
                    className="px-2 py-2 text-sm font-medium hover:text-primary whitespace-nowrap transition-colors"
=======
    <>
      {/* ═══════════════ MAIN NAVBAR ═══════════════ */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-border/30",
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-md"
            : "bg-white dark:bg-gray-900"
        )}
        style={{
          height: 'clamp(60px, 8vw, 90px)',
          padding: '0 clamp(12px, 3vw, 36px)'
        }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center h-full">
            {/* Logo - center aligned on medium screens and up */}
            <div className="flex-shrink-0 mx-auto lg:mx-0 lg:mr-4">
              <Link to="/" className="group">
                <img
                  src={
                    theme === "dark"
                      ? "http://ieee.socet.edu.in/wp-content/uploads/2025/09/Group-2085662984-1-scaled.png"
                      : "http://ieee.socet.edu.in/wp-content/uploads/2025/09/N_Wedge-removebg-preview.png"
                  }
                  className="h-[clamp(28px, 5.5vw, 52px)] w-auto object-contain transition-all duration-300 group-hover:scale-105"
                  alt="IEEE SOU SB"
                  style={{
                    maxHeight: 'clamp(36px, 6vw, 54px)' // 60% of navbar height
                  }}
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex-shrink-0 ml-[clamp(8px, 2.5vw, 24px)]">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="transition-all duration-300 hover:scale-110 hover:bg-primary/10"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>

            {/* DESKTOP NAV — center (only on lg+ screens) */}
            <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-[clamp(16px, 2.5vw, 32px)]">
              {NAV_ITEMS.map((item, index) => (
                <React.Fragment key={item.title}>
                  {item.children ? (
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger className="text-[clamp(14px, 1.2vw, 18px)] font-medium transition-all duration-300 hover:text-primary hover:bg-primary/5">
                            {item.title}
                          </NavigationMenuTrigger>

                          <NavigationMenuContent>
                            <div className="w-64 p-3">
                              {item.children.map((child) => (
                                <React.Fragment key={child.title}>
                                  {child.children ? (
                                    <>
                                      <p className="px-3 py-2 text-xs font-semibold text-muted-foreground text-center border-b border-border/30">
                                        {child.title}
                                      </p>

                                      {child.children.map((nested) => (
                                        <NavigationMenuLink
                                          asChild
                                          key={nested.title}
                                        >
                                          <Link
                                            to={nested.href}
                                            className="block px-3 py-2 text-[clamp(14px, 1.2vw, 18px)] hover:bg-accent rounded-md text-center transition-all duration-200 hover:translate-x-1"
                                          >
                                            {nested.title}
                                          </Link>
                                        </NavigationMenuLink>
                                      ))}
                                    </>
                                  ) : (
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to={child.href}
                                        className="block px-3 py-2 text-[clamp(14px, 1.2vw, 18px)] hover:bg-accent rounded-md text-center transition-all duration-200 hover:translate-x-1"
                                      >
                                        {child.title}
                                      </Link>
                                    </NavigationMenuLink>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  ) : (
                    <Link
                      to={item.href}
                      className="px-3 py-2 text-[clamp(14px, 1.2vw, 18px)] font-medium hover:text-primary whitespace-nowrap transition-all duration-300 hover:bg-primary/5 rounded-md"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      {item.title}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>

            {/* ACTION BUTTONS — right */}
            <div className="hidden lg:flex flex-shrink-0 items-center gap-[clamp(16px, 2.5vw, 32px)]">
              <Button variant="outline" size="sm" asChild className="transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground">
                <Link to="/join">Join IEEE</Link>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="transition-all duration-300 hover:scale-110 hover:bg-primary/10"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════ MOBILE MENU ═══════════════ */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-500",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 w-[85vw] max-w-sm h-full bg-white dark:bg-gray-900 shadow-xl overflow-y-auto transition-transform duration-500 mobile-menu-panel",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-5 pt-20 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.title}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => handleMobileDropdownToggle(item.title)}
                      className="flex items-center justify-between w-full py-2.5 px-3 text-sm font-medium rounded-md hover:bg-accent transition-colors duration-200"
                    >
                      {item.title}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          openDropdown === item.title && "rotate-180"
                        )}
                      />
                    </button>

                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        openDropdown === item.title
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="pl-4 space-y-0.5 pb-2">
                        {item.children.map((child) => (
                          <React.Fragment key={child.title}>
                            {child.children ? (
                              <>
                                <p className="px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                                  {child.title}
                                </p>
                                {child.children.map((nested) => (
                                  <Link
                                    key={nested.title}
                                    to={nested.href}
                                    className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {nested.title}
                                  </Link>
                                ))}
                              </>
                            ) : (
                              <Link
                                to={child.href}
                                className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.title}
                              </Link>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-2.5 px-3 text-sm font-medium rounded-md hover:bg-accent transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
>>>>>>> dbc334a (fix)
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
<<<<<<< HEAD

            {/* Action Buttons — right */}
            <div className="flex items-center gap-2 ml-2">
              <Button
                variant="outline"
                size="sm"
                className="text-primary border-primary hover:bg-primary/10"
                asChild
              >
                <Link to="/join">Join IEEE</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={toggleTheme}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={cn(
          "md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-all",
          isMobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_ITEMS.map((item) => (
            <React.Fragment key={item.title}>
              {item.children ? (
                <div className="space-y-1">
                  <div
                    className="px-3 py-2 text-sm font-medium text-primary flex items-center justify-between cursor-pointer"
                    onClick={() => handleMobileDropdownToggle(item.title)}
                  >
                    {item.title}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        openDropdown === item.title && "rotate-180"
                      )}
                    />
                  </div>
                  {openDropdown === item.title && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <React.Fragment key={child.title}>
                          {child.children ? (
                            <div className="px-3 py-1">
                              <p className="text-[10px] font-semibold tracking-wide text-muted-foreground mb-1">
                                {child.title}
                              </p>
                              <div className="space-y-1">
                                {child.children.map((nestedChild) => (
                                  <Link
                                    key={nestedChild.title}
                                    to={nestedChild.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-3 py-2 rounded-md text-xs font-medium hover:bg-secondary transition-all duration-200 text-left hover:pl-5"
                                  >
                                    {nestedChild.title}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              to={child.href || "#"}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-3 py-2 rounded-md text-xs font-medium hover:bg-secondary transition-all duration-200 text-left hover:pl-5"
                            >
                              {child.title === "IEEE SOU SB" ? (
                                <img
                                  src="http://ieee.socet.edu.in/wp-content/uploads/2025/06/IEEE-SOU-SB-Logo-scaled.png"
                                  alt="IEEE SOU SB Logo"
                                  className="h-8 object-contain"
                                />
                              ) : (
                                child.title
                              )}
                            </Link>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.href || "#"}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary transition-colors"
                >
                  {item.title}
                </Link>
              )}
            </React.Fragment>
          ))}
          <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200 dark:border-gray-800 mt-2">
            <Button
              variant="outline"
              size="sm"
              className="text-primary border-primary hover:bg-primary/10 w-full"
              asChild
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link to="/join">Join IEEE</Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-center"
              onClick={() => {
                toggleTheme();
                setIsMobileMenuOpen(false);
              }}
            >
              {theme === "dark" ? (
                <span className="flex items-center">
                  <Sun className="h-4 w-4 mr-2" /> Light Mode
                </span>
              ) : (
                <span className="flex items-center">
                  <Moon className="h-4 w-4 mr-2" /> Dark Mode
                </span>
              )}
            </Button>
          </div>
=======

            <div className="pt-4 px-3">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/join" onClick={() => setIsMobileMenuOpen(false)}>
                  Join IEEE
                </Link>
              </Button>
            </div>
          </div>
>>>>>>> dbc334a (fix)
        </div>
      </div>

      {/* Spacer to push content below the navbar */}
      <div className="h-[4.5rem]" />
    </>
  );
}