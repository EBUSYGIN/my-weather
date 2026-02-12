import { Header, Footer } from '@/ui/1-widgets';
import { Container } from '@/ui/4-shared';
import cn from 'classnames';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </main>
  );
}
