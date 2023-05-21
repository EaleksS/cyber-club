import { FC, ReactNode } from "react";
import styles from "./Layout.module.scss";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../..";
import { Up } from "../../../entities";

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {children}
      <NavBar />
      <Footer />
      <Up />
    </div>
  );
};
