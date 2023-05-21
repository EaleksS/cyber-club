import { FC, useEffect, useRef } from "react";
import { Contacts, Layout, Stock, Zone, useNav } from "../../widgets";
import { Slider } from "../../entities";
import { Header } from "../../widgets";
import { useWindowDimensions } from "../../shared";

export const Main: FC = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null);
  const ZoneRef = useRef<HTMLDivElement>(null);
  const SliderRef = useRef<HTMLDivElement>(null);
  const StockRef = useRef<HTMLDivElement>(null);
  const ContactsRef = useRef<HTMLDivElement>(null);
  const BottomRef = useRef<HTMLDivElement>(null);

  const { scroll } = useWindowDimensions();
  const { setPage, scrollNav, setSrollNav } = useNav();

  useEffect(() => {
    if (
      !(
        headerRef.current &&
        ZoneRef.current &&
        SliderRef.current &&
        StockRef.current &&
        ContactsRef.current
      )
    )
      return;

    if (
      scroll >
      ContactsRef.current.offsetTop - ContactsRef.current.offsetHeight / 0.8
    )
      return setPage("contacts");
    if (scroll > StockRef.current.offsetTop - StockRef.current.offsetHeight / 2)
      return setPage("stock");
    if (
      scroll >
      SliderRef.current.offsetTop - SliderRef.current.offsetHeight / 2
    )
      return setPage("photo");
    if (scroll > ZoneRef.current.offsetTop - ZoneRef.current.offsetHeight / 2)
      return setPage("zone");
    if (
      scroll >
      headerRef.current.offsetTop - headerRef.current.offsetHeight / 2
    )
      return setPage("home");
  }, [scroll, setPage]);

  useEffect(() => {
    if (scrollNav === "") return;

    if (scrollNav === "contacts") {
      BottomRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
      return setSrollNav("");
    }

    if (scrollNav === "stock") {
      StockRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return setSrollNav("");
    }
    if (scrollNav === "photo") {
      SliderRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return setSrollNav("");
    }
    if (scrollNav === "zone") {
      ZoneRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return setSrollNav("");
    }
    if (scrollNav === "home") {
      headerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return setSrollNav("");
    }
  }, [scrollNav, setSrollNav]);

  return (
    <Layout>
      <div ref={headerRef}>
        <Header />
      </div>
      <div ref={ZoneRef}>
        <Zone />
      </div>
      <div ref={SliderRef}>
        <Slider />
      </div>
      <div ref={StockRef}>
        <Stock />
      </div>
      <div ref={ContactsRef}>
        <Contacts />
      </div>
      <div style={{ marginTop: "7rem" }} ref={BottomRef}></div>
    </Layout>
  );
};
