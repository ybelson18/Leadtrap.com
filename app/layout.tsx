import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Kalam } from "next/font/google";
import { cn } from "@/lib/utils";
import { ViewTransitions } from "next-view-transitions";
import type { Viewport } from "next";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LeadBot } from "@/components/lead-bot";
import Script from "next/script";

export const metadata: Metadata = {
  title: "LeadTrap - AI That Sends You Premium Leads",
  description:
    "LeadTrap is an all in on marketing automation platform that handles emails, tasks tracking, social media management and everything in between.",
  openGraph: {
    title: "LeadTrap - AI That Sends You Premium Leads",
    description: "LeadTrap is an all in on marketing automation platform that handles emails, tasks tracking, social media management and everything in between.",
    url: "https://leadtrap.ai",
    siteName: "LeadTrap",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "LeadTrap - AI Lead Generation Platform"
      }
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06b6d4" },
    { media: "(prefers-color-scheme: dark)", color: "#06b6d4" },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const kalam = Kalam({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-kalam',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.className} ${kalam.variable}`}>
        <head>
          <script dangerouslySetInnerHTML={{
            __html: `
              self.__wrap_n=self.__wrap_n||(self.CSS&&CSS.supports("text-wrap","balance")?1:2);
              self.__wrap_b=(e,l,t)=>{
                let a=null==(t=t||document.querySelector(\`[data-br="\${e}"]\`))?void 0:t.parentElement;
                if(!a)return;
                let r=e=>t.style.maxWidth=e+"px";
                t.style.maxWidth="";
                let d=a.clientWidth,n=a.clientHeight,o=d/2-.25,i=d+.5,s;
                if(d){
                  for(r(o),o=Math.max(t.scrollWidth,o);o+1<i;)
                    r(s=Math.round((o+i)/2)),a.clientHeight===n?i=s:o=s;
                  r(i*l+d*(1-l))
                }
                t.__wrap_o||"undefined"!=typeof ResizeObserver&&(t.__wrap_o=new ResizeObserver(()=>{
                  self.__wrap_b(0,+t.dataset.brr,t)
                })).observe(a)
              };
              self.__wrap_n!=1&&self.__wrap_b(":R577puja:",1);
            `
          }} />
        </head>
        <body
          className={cn(
            inter.className,
            "bg-charcoal antialiased h-full w-full"
          )}
        >
          <Script 
            src="https://app.leadtrap.ai/platform/script?partner_id=dfaacbca-1c96-4399-9b36-7c63c2707f16"
            strategy="afterInteractive"
            type="text/javascript"
            async
          />
          <NavBar />
          {children}
          <Footer />
          <LeadBot />
        </body>
      </html>
    </ViewTransitions>
  );
}
