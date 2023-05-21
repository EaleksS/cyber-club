import { FC } from "react";
import styles from "./ZoneCard.module.scss";
import { Button, Text } from "../../../shared";

export const ZoneCard: FC = (): JSX.Element => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src="/bg2.png" alt="zone" />
      </div>
      <div className={styles.content}>
        <Text>Игровой ПК и переферия</Text>
        <Text type="h4" fz="35px" fw="600">
          Стандарт
        </Text>
        <Text type="h5" fz="25px" fw="300">
          Лучшие Места
        </Text>
        <Button type="primary">
          подробнее <span>→</span>
        </Button>
      </div>
    </div>
  );
};
