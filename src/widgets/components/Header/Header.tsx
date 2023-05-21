import { FC } from "react";
import styles from "./Header.module.scss";
import { Button, Text } from "../../../shared";
import { RiArrowRightSFill } from "react-icons/ri";

export const Header: FC = (): JSX.Element => {
  return (
    <header className={styles.header} id="header">
      <img src="/bg2.png" alt="bg" className={styles.bg} />
      <div className={styles.gradient}></div>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="logo" />
          <div className={styles.title}>
            <Text type="h1">КИБЕРКЛУБ</Text>
            <Text type="h2">НА ЛЕРМОНТОВА</Text>
          </div>
        </div>
        <div className={styles.info}>
          <Text type="h4">
            <RiArrowRightSFill /> Профсоюзная улица 22/10к1
          </Text>
          <Text type="h4">
            <RiArrowRightSFill /> Работаем круглосуточно!
          </Text>
          <Text type="h4">
            <RiArrowRightSFill /> 8 977 320 88 88
          </Text>
        </div>
        <div>
          <Button>Забронировать</Button>
        </div>
      </div>
    </header>
  );
};
