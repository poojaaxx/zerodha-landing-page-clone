import { footerColumns, legalLinks, legalHtml } from '../data/footer';
const socials = [
  ['X', 'https://x.com/zerodha', 'x-twitter.svg'],
  ['Facebook', 'https://facebook.com/zerodha.social', null, 'f'],
  ['Instagram', 'https://instagram.com/zerodhaonline/', null, '◎'],
  ['LinkedIn', 'https://linkedin.com/company/zerodha', null, 'in'],
  ['YouTube', 'https://www.youtube.com/@zerodhaonline', 'youtube.svg'],
  ['WhatsApp', 'https://whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g', 'whatsapp-logo.svg'],
  ['Telegram', 'https://t.me/zerodhain', null, '➤'],
];
export default function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-grid"><div className="footer-brand"><a href="#" aria-label="Zerodha clone home"><img className="logo" src="/assets/logo.svg" alt="Zerodha" width="129" height="17" /></a><p>© 2010 - 2026, Zerodha Broking Ltd.<br />All rights reserved.</p><div className="social-links">{socials.map(([name, href, icon, glyph], i) => <a key={name} className={i === 4 ? 'social-divider' : ''} href={href} aria-label={name} target="_blank" rel="noopener noreferrer">{icon ? <img src={`/assets/${icon}`} alt="" width="20" height="20" loading="lazy" /> : <span aria-hidden="true">{glyph}</span>}</a>)}</div><div className="app-badges"><a href="https://play.google.com/store/apps/details?id=com.zerodha.kite3"><img src="/assets/google-play-badge-light.svg" alt="Get Kite on Google Play" loading="lazy" /></a><a href="https://apps.apple.com/in/app/kite-zerodha/id1449453802"><img src="/assets/appstore-badge-light.svg" alt="Download Kite on the App Store" loading="lazy" /></a></div></div>
      {footerColumns.map(group => <nav key={group.title} aria-label={`${group.title} footer links`}><h3>{group.title}</h3><ul>{group.links.map(([label, href]) => <li key={label}><a href={href}>{label}</a></li>)}</ul></nav>)}
    </div>
    <p className="clone-notice">Educational frontend clone. Unaffiliated with Zerodha. Links to products and account opening take you to the official websites.</p>
    {/* Audited, fixed reference copy; never populated from user input or a network response. */}
    <div className="legal-copy" dangerouslySetInnerHTML={{ __html: legalHtml }} />
    <nav aria-label="Legal and exchange links" className="legal-links">{legalLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
  </div></footer>;
}
