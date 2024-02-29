
import Aside from "@/components/Aside";
import Header from "@/components/Header";
import AsideTriage from "@/components/aside/AsideTriage";
import Triage_Acceuil from "@/components/contents/triage/Triage_Acceuil";
import Triage_Content from "@/components/contents/triage/Triage_Content";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { routes } from "./services/routes.js";
import { useEffect } from "react";


export default function Triage() {

  const [content, setContent] = useState(<Triage_Acceuil />);
  const router = useRouter();
  const { pathname } = router;

  
  const [visible, setVisible] = useState(false);
  const [titre, setTitre] = useState('Acceuil');
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
            <title>Triage - {titre}</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header />
          <Aside setContent={setContent} asideContent={<AsideTriage setContent={setContent} setTitre={setTitre} />} />
          <Triage_Content content={content}/>
        </>
      ):(null)}
    </>
  );
}



