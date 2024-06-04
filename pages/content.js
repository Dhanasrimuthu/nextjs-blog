import { Fragment } from "react";
import ContactForm from "../component/contact/contact-form";
import Head from "next/head";

export default function Content(){
    return(
        <Fragment>
            <Head>
                <title>Contact me</title>
                <meta name="description" content="send your message"/>
            </Head>
            <ContactForm />
        </Fragment>
    );
}