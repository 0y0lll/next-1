'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Update() {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const router = useRouter()
	const params = useParams()

	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${params.id}`)
			.then((res) => res.json())
			.then((result) => {
				console.log(result)
				setTitle(result.title)
				setBody(result.body)
			})
	}, [params.id])

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()

				const options = {
					method: 'PATCH',
					headers: {
						'Content-Type': 'appliation/json',
					},
					body: JSON.stringify({ title, body }),
				}

				fetch(
					`${process.env.NEXT_PUBLIC_API_URL}topics/${params.id}`,
					options,
				)
					.then((res) => res.json())
					.then((result) => {
						console.log('result', result)

						const lastId = result.id
						router.push(`/read/${lastId}`)
					})
			}}
		>
			<input
				type="text"
				name="title"
				placeholder="title"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<textarea
				name="body"
				cols="30"
				rows="10"
				placeholder="body"
				value={body}
				onChange={(e) => setBody(e.target.value)}
			></textarea>

			<input type="submit" value="update" />
		</form>
	)
}
