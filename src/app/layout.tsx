import { Provider } from "@/components/ui/provider";
import { fonts } from "@/config/fonts";
import type { Metadata } from "next";
// import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "サイトタイトル",
  description: "サイトの説明文",
  keywords: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🦋</text></svg>"
        />
      </head>
      <body className={fonts.inter.variable}>
        <Provider forcedTheme="light">{children}</Provider>
      </body>
      {/* <GoogleAnalytics gaId={process.env.GA_ID ?? ""} /> */}
    </html>
  );
}
