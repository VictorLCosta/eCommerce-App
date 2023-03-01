import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { useStore } from "@/stores";

import { DesktopMenu } from "./DesktopMenu";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileBottomMenu } from "./MobileBottomMenu";
import { ModalContainer } from "./ModalContainer";
import { Overlay } from "./Overlay";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = observer(({ children }: MainLayoutProps) => {
  const {
    authStore: { token, getCurrentUser },
  } = useStore();

  useEffect(() => {
    if (token) {
      getCurrentUser().finally();
    }
  }, [getCurrentUser, token]);

  return (
    <div>
      <Header />
      <ModalContainer />
      <DesktopMenu />
      <Overlay />
      <MobileBottomMenu />
      <main className="my-7 mx-12 sm:mx-36">{children}</main>
      <Footer />
    </div>
  );
});
