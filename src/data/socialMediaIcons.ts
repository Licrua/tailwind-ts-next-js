import { faFacebookF, faGooglePlusG, faLinkedinIn, faTwitter, IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface User {
	title: IconDefinition,
	id: string
}

const socialMediaIcons: User[] = [
  { title: faFacebookF, id: '0' },
  { title: faTwitter, id: '1' },
  { title: faGooglePlusG, id: '2' },
  { title: faLinkedinIn, id: '3' },
];
export default socialMediaIcons