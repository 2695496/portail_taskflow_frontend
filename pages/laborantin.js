

import Aside from "@/components/Aside";
import Header from "@/components/Header";
import Laboratoire_Accueil from "@/components/contents/Labo/Laboratoire_Accueil";
import AsideLaborantins from "@/components/aside/AsideLaborantins.jsx";
import Labo_Content from "@/components/contents/Labo/Labo_Content";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { routes } from "./services/routes.js";
import { useEffect } from "react";


export default function Laboratoire() {
  const [content, setContent] = useState(<Laboratoire_Accueil/>);
  const router = useRouter();
  const { pathname } = router;

  
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      const user = JSON.parse(token);
      const route_user = routes(user.id_role);
      if (pathname !== route_user) {
        router.push(route_user);
      } else {
        setVisible(true);
      }
    }
  }, []);
  return (
    <>
      {visible ? (
        <>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header />
          <Aside setContent={setContent} asideContent={<AsideLaborantins/>} />
          <Labo_Content content={content}/>
        </>
      ):(null)}
    </>
  );
}


