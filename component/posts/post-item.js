import Link from 'next/link';
import classes from './post-item.module.css';
import Image from 'next/image';

export default function PostItem(props){
    const {title ,image ,excerpt,date,slug} =props.post ;
    const formatedDate =new Date(date).toLocaleDateString('en-us',{
        day:'numeric',
        month:'long',
        year:'numeric',
    });
    // const imagePath =`/images/post/${slug}/${image}`;
     const imagePath =`/images/post/${image}`;

    const path=`/posts/${slug}`
    return(
        <li className={classes.post}>
            <Link href={path}>
            <div className={classes.image}>
                <Image src={imagePath} alt='Not found' width={300} height={200} layout='responsive'/>
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <time>{formatedDate}</time>
                <p>{excerpt}</p>
            </div>
            </Link>
        </li>
    );
}