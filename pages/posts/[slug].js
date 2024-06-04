import { Fragment } from "react";
import PostContent from "../../component/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lip/posts-util";
import Head from "next/head";


export default function OnePost(props){
  return(
   <Fragment>
    <Head>
      <title>{props.posts.title}</title>
      <meta name="descripton" content={props.posts.excerpt} />
    </Head>
     <PostContent posts={props.posts} />
   </Fragment>
  );  
}

export function getStaticProps(context){
  const  {params} = context;
  const {slug} =params;
  
  const data =getPostData(slug);
  return{
    props:{
      posts:data,
    },
    revalidate:600
  };
}

export function getStaticPaths(){
const postFiles=getPostFiles();
const slugs=postFiles.map((fileName)=>fileName.replace(/\.md$/,''))
  return{
    paths:slugs.map((slug)=> ({params:{slug:slug}})),
    fallback:false
  };
}