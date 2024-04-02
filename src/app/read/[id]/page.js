export default async function Read(props) {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}topics/${props.params.id}`,
		{
			cache: 'no-store',
		},
	)
	const topic = await res.json()

	return (
		<>
			<h2>Read Page</h2>
			<p>{topic.title}</p>
			<p>{topic.body}</p>
		</>
	)
}
