export default function Layout(props) {
	return (
		<>
			<h2>Create Page</h2>
			<form>{props.children}</form>
		</>
	)
}
