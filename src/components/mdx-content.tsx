import { JSX } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Quote from '@/components/quote'
import ContentFooter from './content-footer'

function Code({ children, ...props }: any) {
  // For inline code
  if (typeof children === 'string') {
    const codeHTML = highlight(children)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
  }
  return <code {...props}>{children}</code>
}

function Pre({ children, ...props }: any) {
  // Check if this is a code block by looking for a nested code element
  if (children?.type === 'code' && typeof children.props.children === 'string') {
    const codeContent = children.props.children
    
    const codeHTML = highlight(codeContent)
    
    return (
      <pre {...props}>
        <code 
          className={children.props.className || ''}
          dangerouslySetInnerHTML={{ __html: codeHTML }} 
        />
      </pre>
    )
  }
  
  // For any other pre content, return as-is
  return <pre {...props}>{children}</pre>
}

const components = {
  code: Code,
  pre: Pre,
  Quote: Quote,
  ContentFooter: ContentFooter
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
