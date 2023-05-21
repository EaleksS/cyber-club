import { FC } from "react";
import styles from "./NavBar.module.scss";
import { HiHome } from "react-icons/hi2";
import { TiLocation } from "react-icons/ti";
import { TbDiscount2 } from "react-icons/tb";
import { MdPhotoLibrary, MdDashboard } from "react-icons/md";
import { useNav } from "../../store/nav.store";

export const NavBar: FC = (): JSX.Element => {
  const { page, setSrollNav } = useNav();

  return (
    <>
      <div className={styles.nav_bar}>
        <nav className={styles.nav}>
          <ul>
            <li
              className={`${page === "home" && styles.active}`}
              onClick={() => page !== "home" && setSrollNav("home")}
            >
              <HiHome />
            </li>
            <li
              className={`${page === "zone" && styles.active}`}
              onClick={() => page !== "zone" && setSrollNav("zone")}
            >
              <MdDashboard />
            </li>
            <li
              className={`${page === "photo" && styles.active}`}
              onClick={() => page !== "photo" && setSrollNav("photo")}
            >
              <MdPhotoLibrary />
            </li>
            <li
              className={`${page === "stock" && styles.active}`}
              onClick={() => page !== "stock" && setSrollNav("stock")}
            >
              <TbDiscount2 />
            </li>
            <li
              className={`${page === "contacts" && styles.active}`}
              onClick={() => page !== "contacts" && setSrollNav("contacts")}
            >
              <TiLocation />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
