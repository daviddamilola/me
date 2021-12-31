import Nav from '@components/Nav'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
      <>
          <main>
              <Nav />
          </main>
      </>
  );
}

export default Home;