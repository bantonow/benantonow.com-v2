import '@/app/ui/global.css';
import { inconsolata } from '@/app/ui/fonts'
import Footer from '@/app/ui/Footer'
import { Analytics } from "@vercel/analytics/react"
import { CSPostHogProvider, PostHogPageView, ConsoleImage } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full overflow-y-scroll">
      <body
        className={`
          bg-white text-black 
          ${inconsolata.className} 
          flex flex-col
          justify-between
          items-center
          min-h-[70vh]
          px-4 py-8
          pt-[10vh] pb-[10vh]
        `}
      >
        <CSPostHogProvider>
          <PostHogPageView />
          <ConsoleImage />
          {/* Main content */}
          <main className="max-w-3xl w-full">
            {children}
          </main>
          {/* Footer at the bottom */}
          <Footer />
        </CSPostHogProvider>
        <Analytics />
      </body>
    </html>
  );
}
