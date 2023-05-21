import { FC } from "react";
import styles from "./Contacts.module.scss";
import { Map } from "../..";
import { Button, Text } from "../../../shared";

export const Contacts: FC = (): JSX.Element => {
  return (
    <div className={styles.contacts} id="contacts">
      <img src="/bg.png" alt="bg" className={styles.bg} />
      <div className={styles.contact}>
        <Text type="h3" fz="36px">
          Как нас найти?
        </Text>
        <Text mt="2rem">
          Метро Профсоюзная <b className={styles.c1}>●</b>
          <span> 4 минуты пешком</span>
        </Text>
        <Text>
          Метро Академическая <b className={styles.c2}>●</b>
          <span> 5 минут пешком</span>
        </Text>
        <Text mt="2rem">
          Адрес: <span>Профсоюзная улица 22/10 к1</span>
        </Text>
        <Text>
          Телефон: <span>+7 977 320 88 88</span>
        </Text>
        <Text mt="2rem">
          По вопросам сотрудничества <br />
          <span>
            Коммерческие предложения можно направить в группу ВК или в Телеграм
          </span>
        </Text>

        <Button mt="2rem">Забронировать!</Button>
      </div>
      <Map />
    </div>
  );
};
