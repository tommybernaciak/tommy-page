import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faTwitter,
	faLinkedin,
	faInstagram,
	faYoutube,
	IconDefinition
} from '@fortawesome/free-brands-svg-icons';
import { FunctionComponent, ReactElement, useMemo } from 'react';

interface ISocial {
	icon: IconDefinition;
	name: string;
	url: string;
}
interface IProps {
	social: ISocial;
}

const SocialIcon: FunctionComponent<IProps> = ({ social }): ReactElement => {
	return (
		<a
			className="px-2 py-1.5 rounded-md text-sm block text-gray-200 hover:text-gray-100 hover:bg-gray-700 cursor-pointer"
			href={social.url}
			target="_blank"
			rel="noreferrer"
		>
			<span className="sr-only">{social.name}</span>
			<span>
				<FontAwesomeIcon icon={social.icon} />
			</span>
		</a>
	);
};

const Social: FunctionComponent = (): ReactElement => {
	const social: ISocial[] = useMemo(() => {
		return [
			{ name: 'GitHub', icon: faGithub, url: 'https://github.com/tommybernaciak' },
			{
				name: 'LinkedIn',
				icon: faLinkedin,
				url: 'https://www.linkedin.com/in/tommy-bernaciak/'
			},
			{
				name: 'Twitter',
				icon: faTwitter,
				url: 'https://twitter.com/tommybernaciak'
			},
			{
				name: 'Instagram',
				icon: faInstagram,
				url: 'https://www.linkedin.com/in/tommy-bernaciak/'
			},
			{
				name: 'Youtube',
				icon: faYoutube,
				url: 'https://www.linkedin.com/in/tommy-bernaciak/'
			}
		];
	}, []);

	return (
		<ul className="list-none flex flex-wrap justify-center gap-1 pt-2 border-t border-gray-600 text-gray-200">
			{social.map(s => (
				<li key={s.name}>
					<SocialIcon social={s} />
				</li>
			))}
		</ul>
	);
};

export default Social;
