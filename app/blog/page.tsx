import React from "react";
import { TextScrambleLink } from "../ui/TextScrambleLink";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

export default async function BlogPage() {
    const posts = getSortedPostsData();

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-[2.5rem] font-bold text-green mb-6">Blog</h1>
            <p><em>Writing doesn't just communicate ideas; it generates them.</em> - Paul Graham</p><br /><br />
            <div className="space-y-8">
                {posts.length === 0 ? (
                    <p className="text-gray-600 italic">No posts yet. Check back soon!</p>
                ) : (
                    posts.map((post) => (
                        <article key={post.id} className="border-b border-gray-200 pb-8">
                            <Link href={`/blog/${post.id}`} className="block group">
                                <h2 className="text-2xl font-semibold mb-2 group-hover:text-green transition-colors">
                                    {post.title}
                                </h2>
                                <div className="text-gray-500 text-sm mb-3">
                                    {new Date(post.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                                <p className="text-gray-700">{post.excerpt}</p>
                            </Link>
                        </article>
                    ))
                )}
            </div>
        </div>
    );
}