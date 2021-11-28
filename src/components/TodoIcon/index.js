import "./TodoIcon.css";
import { ReactComponent as CheckSVG } from './check.svg'
import { ReactComponent as DeleteSVG } from './delete.svg'
import { ReactComponent as CloseSVG } from './close.svg'

function TodoIcon({ type, color='gray', onClick }) {

  const iconTypes = {
    check: (color) => (
      <CheckSVG className="icon-svg icon-svg__check" fill={color} />
    ),
    delete: (color) => (
      <DeleteSVG className="icon-svg icon-svg__delete" fill={color} />
    ),
    uncheck: (color) => (
      <CloseSVG className="icon-svg icon-svg__uncheck" fill={color} />
    ),
  };

  return (
    <span
      className={`icon-container icon-container__${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
