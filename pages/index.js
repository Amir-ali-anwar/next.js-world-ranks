import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout/Layout";
export default function Home({ countries }) {
  console.log(countries);
  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>
    </Layout>
  );
}
export const getStaticProps = async () => {
  const resp = await fetch("https://restcountries.com/v3.1/all");
  const countries = await resp.json();
  return {
    props: {
      countries,
    },
  };
};
