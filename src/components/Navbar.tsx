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

  {
    title: "Events",
    children: [
      { title: "2024", href: "/events?year=2024" },
      { title: "2025", href: "/events?year=2025" },
      { title: "2026", href: "/events?year=2026" },
    ],
  },

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
    <>
      {/* ═══════════════ MAIN NAVBAR ═══════════════ */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-border/30",
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-md py-2"
            : "bg-white dark:bg-gray-900 py-4"
        )}
      >
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex-shrink-0 mr-8 flex items-center">
              <Link to="/" className="group">
                {/* Light mode logo */}
                <img
                  src="http://ieee.socet.edu.in/wp-content/uploads/2025/09/N_Wedge-removebg-preview.png"
                  className="h-[3.0rem] object-contain transition-all duration-300 group-hover:scale-105 dark:hidden"
                  alt="IEEE SOU SB"
                />
                {/* Dark mode logo */}
                <img
                  src="http://ieee.socet.edu.in/wp-content/uploads/2025/09/Group-2085662984-1-scaled.png"
                  className="h-[1.8rem] object-contain transition-all duration-300 group-hover:scale-105 hidden dark:block"
                  alt="IEEE SOU SB"
                />
              </Link>
            </div>

            {/* DESKTOP NAV — center */}
            <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-2">
              {NAV_ITEMS.map((item, index) => (
                <React.Fragment key={item.title}>
                  {item.children ? (
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger className="text-sm font-medium transition-all duration-300 hover:text-primary hover:bg-primary/5">
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
                                            className="block px-3 py-2 text-sm hover:bg-accent rounded-md text-center transition-all duration-200 hover:translate-x-1"
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
                                        className="block px-3 py-2 text-sm hover:bg-accent rounded-md text-center transition-all duration-200 hover:translate-x-1"
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
                      className="px-3 py-2 text-sm font-medium hover:text-primary whitespace-nowrap transition-colors duration-200 hover:bg-primary/5 rounded-md"
                    >
                      {item.title}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>

            {/* ACTION BUTTONS — right */}
            <div className="hidden lg:flex flex-shrink-0 items-center gap-2 ml-6">
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

            {/* MOBILE BUTTONS */}
            <div className="flex lg:hidden items-center gap-3 ml-auto">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="transition-all duration-300 hover:scale-110 hover:bg-primary/10"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="transition-all duration-300 hover:scale-110 hover:bg-primary/10"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
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
            "absolute top-0 right-0 w-[280px] h-full bg-white dark:bg-gray-900 shadow-xl overflow-y-auto transition-transform duration-500",
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
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4 px-3">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link to="/join" onClick={() => setIsMobileMenuOpen(false)}>
                  Join IEEE
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to push content below the navbar */}
      <div className="h-[4.5rem]" />
    </>
  );
}