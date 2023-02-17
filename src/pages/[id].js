import Layout from '@/components/Layout'
import Messages from '@/components/Messages'
import Head from 'next/head'
import React from 'react'

const MessagePage = () => {
	return (
		<div>
			<Head>
				<title>Chat - id</title>
			</Head>
			<Layout>
				<Messages />
			</Layout>
		</div>
	)
}

export default MessagePage
