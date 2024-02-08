
import Aside from "@/components/Aside";
import Header from "@/components/Header";
import RH_Content from "@/components/contents/rh/RH_Content";
import Head from "next/head";
import { useState } from "react";
import RH_Accueil from "@/components/contents/rh/RH_Accueil";


export default function Ressource() {
  const [content, setContent] = useState(<RH_Accueil />);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Aside setContent={setContent}/>
      <RH_Content content={content}/>

      
    </>
  );
}
