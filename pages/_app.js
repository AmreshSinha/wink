import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.scss";
import Transition from "../components/Transition";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <Transition loading={loading} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
