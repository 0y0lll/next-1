'use client'

import { useRouter } from 'next/navigation'

export default function Create() {
	const router = useRouter()

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()

				const title = e.target.title.value
				const body = e.target.body.value
				const options = {
					method: 'POST',
					headers: {
						'Content-Type': 'appliation/json',
					},
					body: JSON.stringify({ title, body }),
				}

				fetch(`${process.env.NEXT_PUBLIC_API_URL}topics`, options)
					.then((res) => res.json())
					.then((result) => {
						console.log('result', result)

						const lastId = result.id
						router.push(`/read/${lastId}`)
					})
			}}
		>
			<input type="text" name="title" placeholder="title" />
			<textarea
				name="body"
				cols="30"
				rows="10"
				placeholder="body"
			></textarea>

			<input type="submit" value="create" />
		</form>
	)
}
