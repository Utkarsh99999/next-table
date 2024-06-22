
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee);

export default function MyFontAwesomeIcon(props) {
  return <FontAwesomeIcon icon={props.icon} />;
}
