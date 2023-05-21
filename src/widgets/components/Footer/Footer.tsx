import { FC } from "react";
import styles from "./Footer.module.scss";
import { Text } from "../../../shared";

export const Footer: FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Text>© Copyright 2023. Made by Ernest</Text>
    </footer>
  );
};
