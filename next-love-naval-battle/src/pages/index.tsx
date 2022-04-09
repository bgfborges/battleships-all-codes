import Head from "next/head"
import { HomeContent } from '../components/HomeContent'
import React from 'react'

export default function Home(){
  return (
    <>
      <Head><title>Play Battle Field - A Love Community</title></Head>
      <HomeContent />
    </>
  )
}
