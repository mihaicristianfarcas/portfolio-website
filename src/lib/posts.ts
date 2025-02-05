import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'src', 'content', 'posts')

export type Post = {
    metadata: PostMetadata
    content: string
}

export type PostMetadata = {
    author?: string
    title?: string
    summary?: string
    image?: string
    date?: string
    slug: string
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        const filePath = path.join(rootDirectory, `${slug}.mdx`)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const {data, content} = matter(fileContents)
        
        return {metadata: {...data, slug}, content}
    } catch (error){
        console.error(`Error reading file:`, error)
        return null
    }
}

export async function getPosts(limit?: number): Promise<PostMetadata[]> {
    const files = fs.readdirSync(rootDirectory)

    const posts = files.map(file => getPostMetadata(file))
    .sort((a, b) => { if (new Date(a.date ?? '') < new Date(b.date ?? '')) return 1; else return -1 })

    if(limit) return posts.slice(0, limit)

    return posts;
}

export function getPostMetadata(filepath: string): PostMetadata {
    const slug = filepath.replace(/\.mdx$/, '')
    const filePath = path.join(rootDirectory, filepath)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const {data} = matter(fileContents)
    return {...data, slug}
}
