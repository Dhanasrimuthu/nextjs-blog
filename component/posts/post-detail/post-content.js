import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';
import { Prism  } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import PostHeader from './post-header';
import Image from 'next/image';

export default function PostContent(props){
    const {posts} =props;
    const imagePath=`/images/post/${posts.image}`;
    // customComponents
    const customRenderers ={
        // image(image) {
        //     return (
        //         // <Image src={`/images/post/${image.src}`} alt={image.alt} width={600} height={300}/>
        //         <Image src={image.src} alt={image.alt} width={600} height={300}/>
        //     )
        // }
        paragraph(paragraph){
            const {node} =paragraph;

            if(node.children[0].type === 'image'){
                const image =node.children[0];

                return(
                    <div className={classes.image}>
                        <Image src={image.url} alt={image.alt} width={600} height={300}/>
                    </div>
                )

            }
            return <p>{paragraph.children}</p>
        },

        code(code){
            const {language ,value, ...props  } =code;
            return <Prism style={atomDark} language={language} children={value} PreTag='div'{...props} />
            // code({ node, inline, className, children, ...props }) {
            //     const match = /language-(\w+)/.exec(className || '');
            //     return !inline && match ? (
            //         <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" {...props}>
            //             {String(children).replace(/\n$/, '')}
            //         </SyntaxHighlighter>
            //     ) : (
            //         <code className={className} {...props}>
            //             {children}
            //         </code>
            //     );
            // }
        }
    };

    return(
        <article className={classes.content}>
            <PostHeader title={posts.title} image={imagePath}/>
            <ReactMarkdown components={customRenderers}>{posts.content}</ReactMarkdown>
        </article>
    );
}