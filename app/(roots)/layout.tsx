import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
<div className="flex flex-col min-h-screen">
<NavigationMenu/>
<main className="flex-grow">{children}</main>
<Footer/>

</div>

  );
}
