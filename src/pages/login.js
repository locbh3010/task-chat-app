import { Facebook, GitHub, Google } from '@mui/icons-material'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import styled from 'styled-components'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Head from 'next/head'
import Link from 'next/link'

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
	align-items: center;
	width: 100%;
	margin-top: 24px;
`

const schema = yup.object().shape({
	email: yup.string().email('Email is valid').required('Please enter your email address'),
	password: yup.string().required('Please enter your password'),
})

const login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onBlur',
	})
	const onSubmit = (value) => {}

	const social = (
		<Stack
			alignItems="center"
			justifyContent="space-between"
			spacing={2}
			direction="row"
			sx={{ width: '100%', mt: 4 }}>
			<Button
				variant="outlined"
				startIcon={<Google />}
				fullWidth>
				Goggle
			</Button>
			<Button
				variant="outlined"
				startIcon={<Facebook />}
				fullWidth>
				Facebook
			</Button>
			<Button
				variant="outlined"
				startIcon={<GitHub />}
				fullWidth>
				GitHub
			</Button>
		</Stack>
	)
	const form = (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<TextField
				label="Email"
				fullWidth
				autoComplete={false}
				type="email"
				{...register('email')}
				error={errors.email}
				helperText={errors.email && errors.email.message}
			/>
			<TextField
				label="Password"
				fullWidth
				type="password"
				autoComplete={false}
				{...register('password')}
				error={errors.password}
				helperText={errors.password && errors.password.message}
			/>
			<Button
				type="submit"
				variant="contained"
				size="large"
				sx={{ fontWeight: 'bold' }}
				fullWidth>
				Log In
			</Button>
		</StyledForm>
	)
	return (
		<>
			<Head>
				<title>Chat app - Login</title>
			</Head>
			<Box sx={{ maxWidth: 'sm', marginInline: 'auto' }}>
				<Stack
					alignItems="center"
					justifyContent="center"
					sx={{ padding: 10 }}>
					<Typography
						variant="h4"
						textAlign="center"
						gutterBottom>
						Log in your account
					</Typography>

					{social}
					{form}
					<Typography
						variant="caption"
						sx={{ marginTop: 3 }}>
						You don't have account? <Link href="/register">Create an account</Link>
					</Typography>
				</Stack>
			</Box>
		</>
	)
}

export default login
