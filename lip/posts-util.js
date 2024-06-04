import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDirectory=path.join(process.cwd(),'posts')

export function getPostFiles(){
    return  fs.readdirSync(postDirectory); 
}
export function getPostData(fileName){
    const postSlug =fileName.replace(/\.md$/,'');
    const filePath = path.join(postDirectory,`${postSlug}.md`)
    const fileContent=fs.readFileSync(filePath,'utf-8');
    const {data ,content} = matter(fileContent);
    // remove the extension
   
     
    const postData={
        slug: postSlug,
        ...data,
        content,
    };
    return postData;
}

export function getAllPosts(){
    const postFiles = getPostFiles();
    const allPosts =postFiles.map((postFile)=>{
        return getPostData(postFile)
    })
    const sortedData = allPosts.sort((postA,postB)=> postA > postB ? -1: 1 );
    return sortedData;
}

export function getFeaturedPost(){
    const featuredPosts =getAllPosts().filter((post) => post.isFeatured);
    return featuredPosts;
}
export function showAll(){
    const allPosts =getAllPosts();
    return allPosts;
}