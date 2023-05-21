import { FC } from "react";
import { Oval } from "react-loader-spinner";
import styles from "./Loader.module.scss";

interface Props {
  className?: string;
  h?: number;
  w?: number;
  color?: string;
}

export const Loader: FC<Props> = ({
  className,
  h = 80,
  w = 80,
  color = "#fff",
}): JSX.Element => {
  return (
    <div className={`${styles.loader} ${className}`}>
      <Oval
        height={h}
        width={w}
        color={color}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor={color}
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
