'use client'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

export const Controls = () => {
	const router = useRouter()
	const params = useParams()
	const id = params.id

	const onDelete = () => {
		fetch(process.env.NEXT_PUBLIC_API_URL + 'topics/' + id, {
			method: 'DELETE',
		})
			.then((res) => res.json)
			.then((result) => {
				router.push('/')
			})
	}

	return (
		<ul>
			<li>
				<Link href="/create">Create</Link>
			</li>
			{id && (
				<>
					<li>
						<Link href={'/update/' + id}>Update</Link>
					</li>
					<li>
						<input
							type="button"
							value="delete"
							onClick={onDelete}
						/>
					</li>
				</>
			)}
		</ul>
	)
}
