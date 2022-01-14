import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faTwitter,
	faLinkedin,
	faInstagram,
	faYoutube,
	IconDefinition
} from '@fortawesome/free-brands-svg-icons';
import { FunctionComponent, ReactElement } from 'react';

interface IProps {
	icon: IconDefinition;
	srTitle: string;
}

const SocialIcon: FunctionComponent<IProps> = ({ icon, srTitle }): ReactElement => {
	return (
		<a className="px-2 py-1.5 rounded-md text-sm block text-gray-200 hover:text-gray-100 hover:bg-gray-700 cursor-pointer">
			<span className="sr-only">{srTitle}</span>
			<span>
				<FontAwesomeIcon icon={icon} />
			</span>
		</a>
	);
};

const Social: FunctionComponent = (): ReactElement => {
	return (
		<ul className="list-none flex flex-wrap justify-center gap-1 pt-2 border-t border-gray-600 text-gray-200">
			<li>
				<SocialIcon icon={faGithub} srTitle="github" />
			</li>
			<li>
				<SocialIcon icon={faTwitter} srTitle="twitter" />
			</li>
			<li>
				<SocialIcon icon={faLinkedin} srTitle="linkedin" />
			</li>
			<li>
				<SocialIcon icon={faInstagram} srTitle="instagram" />
			</li>
			<li>
				<SocialIcon icon={faYoutube} srTitle="youtube" />
			</li>
		</ul>
	);
};

export default Social;
