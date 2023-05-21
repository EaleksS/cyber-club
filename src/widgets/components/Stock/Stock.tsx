import { FC } from "react";
import styles from "./Stock.module.scss";
import { Button, Text } from "../../../shared";

export const Stock: FC = (): JSX.Element => {
  return (
    <div className={styles.stock} id="stock">
      <div className={styles.title}>
        <Text type="h3">АКЦИ И СКИДКИ</Text>
      </div>

      {[1, 2, 3, 4, 5].map((e) => (
        <div className={styles.item} key={e}>
          <Text type="h4">промокод {e}</Text>
        </div>
      ))}
      <Button>ЕЩЕ АКЦИИ</Button>
    </div>
  );
};
