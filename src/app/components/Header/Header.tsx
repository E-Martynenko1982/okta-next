import Link from "next/link";
import Image from "next/image";
import Search from "../Search/Search";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20 px-4 py-4">
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between gap-1">
        {/* Left Side: Burger (mobile) + Logo */}
        <div className="flex items-center gap-3">
          {/* Burger button — mobile only */}
          <button
            className="md:hidden text-white focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <Link href="/" className="flex items-center gap-2">
            {/* Desktop logo */}
            <Image
              src="/images/logo_tm (1).png"
              alt="Okta Logo"
              width={160}
              height={40}
              className="hidden md:block w-auto h-10 object-contain"
              priority
            />
            {/* Mobile logo */}
            <Image
              src="/images/logo_okta_mini.webp"
              alt="Okta Logo"
              width={40}
              height={40}
              className="block md:hidden w-auto h-10 object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right Side: Navigation and Search */}
        <div className="flex gap-4">
          <nav className="lg:flex lg:flex-row-reverse items-center gap-8">
            <div className="flex justify-end gap-4">
              <Search />
              <Link href="/cart" className="text-white hover:text-white/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
              </Link>
            </div>
            <ul className="hidden lg:flex items-center gap-6 text-white/80 font-medium">
              <li>
                <Link
                  href="/catalog"
                  className="hover:text-white transition-colors"
                >
                  Каталог
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-white transition-colors"
                >
                  Новини
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  Про нас
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="hover:text-white transition-colors"
                >
                  Контакти
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
