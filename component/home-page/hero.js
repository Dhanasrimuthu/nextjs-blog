import Image from "next/image";
import classes from './hero.module.css'
// import {} from '../../public/images/site/download.jpg'
export default function Hero(){
    return(
        <section className={classes.hero}>
            <div className={classes.Image}>
            <Image className={classes.Im} src='/images/site/download.jpg' alt="Not found" width={300} height={300}/> 
            </div>
            <h1>Hi I'm Hero</h1>
            <p>This is a blog about web development in NextJs code</p>
        </section>
    );
}