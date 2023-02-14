import { DesktopMenu } from "./DesktopMenu";
import { Header } from "./Header";
import { MobileBottomMenu } from "./MobileBottomMenu";
import ModalContainer from "./ModalContainer";

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <ModalContainer />
      <DesktopMenu />
      <MobileBottomMenu />
      <main className="my-7 mx-12 sm:mx-36">{children}</main>
    </div>
  );
}
