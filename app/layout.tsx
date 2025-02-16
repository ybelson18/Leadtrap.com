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
import { WaitlistProvider } from "@/components/waitlist-context";

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

export const metadata: Metadata = {
  title: "LeadTrap - AI That Sends You Premium Leads",
  description:
    "LeadTrap is an all in on marketing automation platform that handles emails, tasks tracking, social media management and everything in between.",
  openGraph: {
    title: "LeadTrap - AI That Sends You Premium Leads",
    description:
      "LeadTrap is an all in on marketing automation platform that handles emails, tasks tracking, social media management and everything in between.",
    url: "https://leadtrap.ai",
    siteName: "LeadTrap",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "LeadTrap - AI Lead Generation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadTrap - AI That Sends You Premium Leads",
    description:
      "LeadTrap is an all in on marketing automation platform that handles emails, tasks tracking, social media management and everything in between.",
    images: ["/og-banner.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" className={cn("antialiased", kalam.variable)}>
        <head>
          <script
            dangerouslySetInnerHTML={{
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
            }}
          />
          {/* Google tag (gtag.js) */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-JW1QNDK36Q"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-JW1QNDK36Q');
            `}
          </Script>
        </head>
        <body
          className={cn(
            inter.className,
            "min-h-screen bg-black antialiased",
            "relative flex flex-col"
          )}
        >
          <WaitlistProvider>
            <NavBar />
            {children}
            <Footer />
            <LeadBot />
          </WaitlistProvider>
          <Script
            src="https://app.leadtrap.ai/platform/script?partner_id=dfaacbca-1c96-4399-9b36-7c63c2707f16"
            strategy="afterInteractive"
            type="text/javascript"
            async
          />
          <Script
            src="https://va.vercel-scripts.com/v1/script.js"
            strategy="afterInteractive"
            data-mode="production"
          />
        </body>
      </html>
    </ViewTransitions>
  );
}
