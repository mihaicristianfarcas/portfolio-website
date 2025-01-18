import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'src', 'content', 'posts')

export type Post = {
    metadata: PostMetadata
    content: string
}

export type PostMetadata = {
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
