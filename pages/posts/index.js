import { Fragment } from "react";
import AllPost from "../../component/posts/all-post";
import { showAll } from "../../lip/posts-util";
import Head from "next/head";

export default function AllPosts(props){
    return(
        <Fragment>
            <Head>
                <title>All Posts</title>
                <meta name="description" content="A List of all programming"/>
            </Head>
            <AllPost posts={props.posts} />
        </Fragment>
    );
}

export function getStaticProps(){
    const featuredPosts =showAll();
    return{
        props:{
           posts:featuredPosts, 
        }
    }
}