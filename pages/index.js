import { Fragment } from "react";
import Hero from "../component/home-page/hero"
import FeaturedPost from "../component/home-page/featured-post";
import { getFeaturedPost } from "../lip/posts-util";
import Head from "next/head";
export default function HomePage(props){
//     const Dummy_data=[
//     {slug:"s1",title:"title1",image:"image.png",excerpt:"hello",date:"2024-06-11"},
//     {slug:"s2",title:"title2",image:"image.png",excerpt:"hello",date:"2024-06-11"},
//     {slug:"s3",title:"title3",image:"image.png",excerpt:"hello",date:"2024-06-11"},
//     {slug:"s4",title:"title4",image:"image.png",excerpt:"hello",date:"2024-06-11"}
// ]
    return(
        <Fragment>
            <Head>
                <title>My blog</title>
                <meta name="description" content="I post about programming & development." />
            </Head>
            <Hero />
            <FeaturedPost posts={props.posts}/>
        </Fragment>
    );
}
 export function getStaticProps(){
    const featuredPosts=getFeaturedPost();
    return{
       props: {
          posts:featuredPosts,
        },
        revalidate:60
    }
 }