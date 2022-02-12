import { NextPageContext } from 'next';
import Header from '../components/Header';
import SEO from '../components/SEO';

interface ErrorComponentProps {
	statusCode?: number;
}


const Error = ({ statusCode }: ErrorComponentProps): JSX.Element => {
	return (
		<>
			<SEO title="Error" />
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

Error.getInitialProps = ({ res, err }: NextPageContext) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
