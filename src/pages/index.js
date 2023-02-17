import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const Home = () => {
	return (
		<div>
			<Head>
				<title>Home Page</title>
			</Head>
			<Layout>
				<h1>home page</h1>
			</Layout>
		</div>
	)
}

export default Home
