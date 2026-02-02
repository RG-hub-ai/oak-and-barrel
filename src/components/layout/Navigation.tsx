'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/Button';
import { Container } from './Container';

interface NavigationProps {
  onReservationClick: () => void;
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/menu', label: 'Menu' },
];

export function Navigation({ onReservationClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] bg-[#FDF8F3]/95 backdrop-blur-md border-b border-[#5C4033]/[0.06]">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold" style={{ color: '#5C4033' }}>
              Oak & Barrel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-sm transition-colors duration-150 hover:opacity-80"
                style={{ color: pathname === link.href ? '#E8A849' : '#2D2A26' }}
              >
                {link.label}
              </Link>
            ))}
            <Button onClick={onReservationClick}>
              Make Reservation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            style={{ color: '#2D2A26' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden fixed inset-0 top-16 z-[400]
          transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{ backgroundColor: '#FDF8F3' }}
      >
        <Container className="pt-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-[family-name:var(--font-display)] text-2xl font-semibold transition-colors duration-150"
                style={{ color: pathname === link.href ? '#E8A849' : '#2D2A26' }}
              >
                {link.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                onReservationClick();
              }}
              size="lg"
              fullWidth
              className="mt-4"
            >
              Make Reservation
            </Button>
          </div>
        </Container>
      </div>
    </nav>
  );
}
