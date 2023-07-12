import classNames from "classnames/bind";
import styles from "./SearchResultItem.module.scss";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faCheckCircle,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);
function SearchResultItem() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("search-title-1")}>
        <h4 className={cx("name-1")}>
          <FontAwesomeIcon icon={faClock} className={cx("icon-1")} />
          <span className={cx("name")}>Nguyen Van A</span>
          <FontAwesomeIcon icon={faCircleXmark} className={cx("icon-2")} />
        </h4>
      </div>
    </div>
  );
}

export default SearchResultItem;
