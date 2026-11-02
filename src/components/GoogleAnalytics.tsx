import { GTM_CONTAINER_ID } from "@/lib/ga"
import GaLeadTracker from "@/components/GaLeadTracker"

const GTM_BOOTSTRAP = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
`

/** Static head tag so the container is in the first HTML response. */
export function GoogleTagManagerHead() {
  return <script id="google-tag-manager" dangerouslySetInnerHTML={{ __html: GTM_BOOTSTRAP }} />
}

/** Noscript fallback plus the WhatsApp lead listener. Render at the start of body. */
export default function GoogleAnalytics() {
  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <GaLeadTracker />
    </>
  )
}
