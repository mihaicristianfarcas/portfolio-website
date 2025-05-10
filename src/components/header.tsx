'use client'

import Link from 'next/link'
import ThemeToggle from '@/components/ui/theme-toggle'
import { cn } from '@/lib/utils'
import { useScrollTop } from '../../hooks/use-scroll-top'

export default function Header() {
  const scrolled = useScrollTop()

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 mx-auto max-w-4xl py-6 backdrop-blur-sm',
        scrolled && 'border-bottom shadow-lg'
      )}
    >
      <nav className='container flex items-center justify-between'>
        <div>
          <Link href='/' className='title font-bold no-underline'>
            {/* Wolf Logo */}
            <svg
              version='1.0'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='30'
              viewBox='0 0 384.000000 488.000000'
              preserveAspectRatio='xMidYMid meet'
              className='fill-foreground hover:fill-muted-foreground'
            >
              <g
                transform='translate(0.000000,488.000000) scale(0.100000,-0.100000)'
                stroke='none'
              >
                <path
                  d='M1575 4847 c-88 -58 -149 -101 -210 -149 -81 -62 -332 -320 -378
-388 -109 -161 -166 -251 -192 -301 -21 -41 -41 -64 -74 -85 -77 -48 -280
-256 -351 -360 -8 -12 -35 -47 -59 -79 -58 -77 -184 -328 -220 -440 -32 -100
-55 -215 -71 -351 -16 -141 19 -464 50 -464 5 0 16 21 26 48 72 198 152 335
268 458 53 56 65 65 66 47 0 -12 -5 -34 -10 -49 -19 -50 -31 -280 -20 -368 35
-265 204 -584 457 -863 81 -89 301 -294 513 -477 160 -139 334 -309 420 -411
130 -154 203 -277 301 -509 19 -44 39 -81 46 -83 17 -6 155 207 217 337 88
183 124 309 146 510 14 128 -2 366 -34 492 -13 51 -22 94 -21 96 2 2 34 -6 72
-18 82 -26 436 -51 454 -33 7 7 -21 32 -98 85 -137 95 -246 197 -310 290 -67
98 -88 140 -118 245 -31 104 -27 154 11 172 53 24 228 50 409 60 412 24 493
39 601 110 104 68 254 243 320 374 30 58 42 131 25 151 -7 8 -90 40 -184 72
-201 66 -293 101 -517 197 -272 115 -270 114 -391 311 -93 153 -292 347 -473
460 -94 59 -311 149 -403 167 -58 11 -63 14 -63 38 -1 182 -84 683 -121 728
-17 19 -29 16 -84 -20z m-55 -589 c-1 -272 -23 -337 -159 -454 -51 -44 -97
-81 -103 -83 -19 -7 -3 254 21 319 34 97 72 174 109 220 47 60 114 130 124
130 4 0 8 -60 8 -132z m457 -798 c241 -31 315 -62 434 -180 44 -42 79 -82 79
-88 0 -11 -87 -8 -241 9 -139 15 -228 53 -321 137 -42 38 -98 108 -98 124 0
11 51 10 147 -2z m328 -670 c146 -11 294 -44 509 -115 77 -25 180 -55 228 -67
49 -12 85 -25 81 -29 -4 -4 -147 -13 -318 -19 -437 -15 -599 -42 -777 -131
-200 -99 -330 -241 -408 -442 -37 -95 -49 -181 -50 -357 l-1 -135 -25 30 c-40
49 -151 283 -179 380 -20 67 -29 131 -37 248 l-11 158 43 102 c38 89 53 111
114 173 108 108 244 172 427 198 117 17 236 19 404 6z'
                />
                <path
                  d='M2388 4654 c-62 -42 -126 -87 -143 -100 -98 -79 -128 -103 -175 -139
-80 -60 -129 -108 -132 -130 -3 -16 15 -26 112 -61 63 -23 142 -54 175 -69 69
-31 200 -115 264 -169 24 -20 48 -33 52 -29 36 36 39 607 3 749 -4 15 -13 24
-25 24 -10 0 -69 -34 -131 -76z'
                />
              </g>
            </svg>
          </Link>
        </div>

        <ul className='sm flex items-center gap-6 text-sm font-light text-muted-foreground'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
