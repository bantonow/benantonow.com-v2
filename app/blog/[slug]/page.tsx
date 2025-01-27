import { getPostData, getSortedPostsData } from '../../lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

interface Props {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    const posts = getSortedPostsData()
    return posts.map((post) => ({
        slug: post.id,
    }))
}

export default async function Post({ params }: Props) {
    try {
        const resolvedParams = await params
        const post = await getPostData(resolvedParams.slug)
        
        return (
            <article className="max-w-4xl mx-auto">
                <h1 className="text-4xl text-green font-bold mb-4">{post.title}</h1>
                <div className="text-gray-500 mb-8">
                    {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </div>
                <div className="prose prose-lg max-w-none">
                    <MDXRemote source={post.content} />
                </div>
                <br/>
            </article>
        )
    } catch (error) {
        return notFound()
    }
} 