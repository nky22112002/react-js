import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react/headless";
import images from "../../../../assets/images";
import { Wrapper as WrapperPopper } from "../../../Popper";
import SearchResultItem from "../../../SearchResultItem";
import Button from "../../../Button";
const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="TikTok" />
        </div>
        <Tippy
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <WrapperPopper>
                <h4 className={cx("search-item-1")}>Tìm kiếm gần đây</h4>
                <SearchResultItem />
                <SearchResultItem />
                <SearchResultItem />
              </WrapperPopper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search account or video" spellCheck="false" />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <button className={cx("loading")}>
              <FontAwesomeIcon icon={faSpinner} />
            </button>
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx("action")}>
          <Button
            upload
            onClick={() => {
              alert("CLicked!!!");
            }}
          >
            <FontAwesomeIcon icon={faPlus} className={cx("upload-icon")} />
            <span className={cx("upload-span-text")}>Tải lên</span>
          </Button>
          <Button
            primary
            onClick={() => {
              alert("Clicked!!!");
            }}
          >
            Đăng nhập
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
