import { type NextPage } from "next";
import Head from "next/head";
import MainContainer from "src/components/container";
import LandingFooter from "src/components/footer";
import Header from "src/components/header";
import LandingHeroSection from "src/components/hero-section";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Broaden Agency</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full flex-col">
        <MainContainer>
          <Header />
          <main className="my-24 flex w-full flex-col gap-y-24">
            <LandingHeroSection />
          </main>
          <LandingFooter />
        </MainContainer>
      </div>
    </>
  );
};

export default Home;
