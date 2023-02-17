import { Facebook, GitHub, Google } from '@mui/icons-material'
import { Button, Stack, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import styled from 'styled-components'

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 16px;
	align-items: center;
	width: 100%;
	margin-top: 24px;
`

const login = () => {
	return (
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

				<StyledForm>
					<TextField
						label="Email"
						fullWidth
						autoComplete={false}
						type="email"
					/>
					<TextField
						label="Password"
						fullWidth
						type="password"
						autoComplete={false}
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
			</Stack>
		</Box>
	)
}

export default login
