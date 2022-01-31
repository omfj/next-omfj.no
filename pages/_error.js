import Header from '../components/Header'

const Error = ({ statusCode }) => {
	return (
		<>
			<Header title="omfj.no" />
			<div className="
				text-white
				text-center
			">
				<p>
					{statusCode
					? `An error occurred on server`
					: "An error occurred on client"}
				</p>
				<p className="
					text-9xl
				">
					{statusCode}
				</p>
			</div>
		</>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
