import DesktopMenu from "./DesktopMenu";
import Header from "./Header";
import MobileBottomMenu from "./MobileBottomMenu";

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <DesktopMenu />
      <MobileBottomMenu />
      <main className="my-5 mx-36">{children}</main>
    </div>
  );
}
