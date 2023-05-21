import { FC } from "react";
import styles from "./Map.module.scss";
import { Loader } from "../../../shared";
import {
  GoogleMap,
  LoadScriptProps,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";

const libraries: LoadScriptProps["libraries"] = ["places"];

export const Map: FC = (): JSX.Element => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAXgV7Xnqc6mVvOVbz8ljhMF1_BEjopOEA",
    libraries,
  });

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <div className={styles.location}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={15}
          options={{
            disableDefaultUI: true,
            clickableIcons: false,
          }}
          center={{ lat: 62.0294375, lng: 129.705484 }}
        >
          <MarkerF position={{ lat: 62.0294375, lng: 129.705484 }} />
        </GoogleMap>
      ) : (
        <Loader className={styles.loader} color="#FF8181" w={50} h={50} />
      )}
    </div>
  );
};
