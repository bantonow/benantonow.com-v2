import React from "react";
import { TextScrambleLink } from "../ui/TextScrambleLink";

export default function MediaPage() {
    return(
        <div>
            <h1 className="text-[2.5rem] font-bold text-green mb-6">Media</h1>
            <ul className="ml-6">
                <li>- <TextScrambleLink href="https://letterboxd.com/benantonow/">Letterboxd</TextScrambleLink></li>
                <li>- <TextScrambleLink href="https://www.goodreads.com/user/show/185254448-ben-antonow">Goodreads</TextScrambleLink></li>
                <li>- <TextScrambleLink href="https://www.discogs.com/user/benantonow">Discogs</TextScrambleLink></li>
            </ul>
        </div>
    )
}