import { FC } from "react";
import styles from "./Zone.module.scss";
import { Text } from "../../../shared";
import { ZoneCard } from "../../../entities";

export const Zone: FC = (): JSX.Element => {
  return (
    <div className={styles.zone} id="zone">
      <div className={styles.title}>
        <Text type="h3">разные зоны с разными условиями</Text>
      </div>
      {[0, 1, 2].map((e) => (
        <ZoneCard key={e} />
      ))}
    </div>
  );
};
