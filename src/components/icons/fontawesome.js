/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faEnvelope,
  faArrowUpRightFromSquare,
  faPhone,
  faLocationDot,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faGithub,
  faEnvelope,
  faLinkedin,
  faArrowUpRightFromSquare,
  faPhone,
  faLocationDot,
  faArrowUp
);

// Export the component to register globally
export default FontAwesomeIcon;
