import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'app/_posts')

export interface PostData {
    id: string
    title: string
    date: string
    excerpt: string
    content: string
}

export function getSortedPostsData(): PostData[] {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".mdx" from file name to get id
        const id = fileName.replace(/\.mdx$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        return {
            id,
            content: matterResult.content,
            ...(matterResult.data as { date: string; title: string; excerpt: string })
        }
    })

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export async function getPostData(id: string): Promise<PostData> {
    const fullPath = path.join(postsDirectory, `${id}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    return {
        id,
        content: matterResult.content,
        ...(matterResult.data as { date: string; title: string; excerpt: string })
    }
} 