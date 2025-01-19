"use client";

import React from "react";
import { quotes } from "../lib/quotes";

export default function QuotesPage() {
    return (
        <div>
        <h1 className="text-[2.5rem] font-bold text-green mb-6">Notable Quotes</h1>

        {quotes.map((quote, index) => (
            <figure key={index} className="mt-10">
                <blockquote
                    className="border-l-4 border-lightgreen pl-4 italic"
                    dangerouslySetInnerHTML={{ __html: quote.text }}
                />          
                <figcaption className="mt-2 text-green text-right font-semibold"
                    dangerouslySetInnerHTML={{ __html: `— ${quote.author}` }}
                />
            </figure>
        ))}
        </div>
    );
}