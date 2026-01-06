'use client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: "/ingest",
        ui_host: "https://us.posthog.com", 
        person_profiles: 'identified_only',
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
        capture_pageleave: true,
        capture_exceptions: true,
        debug: process.env.NODE_ENV === "development",
        autocapture: true,
    })
}

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
    return (
        <PostHogProvider client={posthog}>
        {children}
        </PostHogProvider>
    )
}

export function PostHogPageView() {
    useEffect(() => {
        // Track pageviews
        posthog?.capture('$pageview')
    }, [])

    return null
}

export function ConsoleImage() {
    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')!
            canvas.width = img.width
            canvas.height = img.height
            ctx.drawImage(img, 0, 0)
            const w = Math.min(window.innerWidth * 0.3, 300)
            const h = img.height * (w / img.width)
            console.log(
                '%c %c\nif you are also calvin, email me',
                `font-size: 1px; padding: ${h}px ${w}px; background: url(${canvas.toDataURL()}); background-size: contain;`,
                `display: block; margin-top: 6px; text-align: center;font-size: 18px; line-height: 1.4;`
            )
        }
        img.src = '/calvin.webp'
    }, [])
    return null
}