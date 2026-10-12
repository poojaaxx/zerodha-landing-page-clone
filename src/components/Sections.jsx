import { features, pricing } from '../data/content';
import { SignupButton, TextLink } from './Link';
export function FeatureCard({ title, body }) {
  return <article className="feature-card"><h3>{title}</h3><p>{body}</p></article>;
}
export function TrustSection() {
  return <section className="container section trust-grid" aria-labelledby="trust-title"><div><h2 id="trust-title">Trust with confidence</h2><div className="features-grid">{features.map(feature => <FeatureCard key={feature.title} {...feature} />)}</div></div><div className="ecosystem"><a href="https://zerodha.com/products/"><img src="/assets/ecosystem.png" alt="The Zerodha universe: Kite, Console, Coin and partner platforms for investing" loading="lazy" /></a><div className="product-links"><TextLink href="https://zerodha.com/products/">Explore our products</TextLink><TextLink href="https://kite-demo.zerodha.com/">Try Kite demo</TextLink></div></div></section>;
}
export function ApiBanner() {
  return <aside className="container api-banner" aria-label="Kite Connect"><img src="/assets/kc-logo-landing.svg" alt="Kite Connect" loading="lazy" /><p>Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more. <TextLink href="https://zerodha.com/products/api/">Explore</TextLink></p><img className="api-art" src="/assets/kc-banner-image.svg" alt="" loading="lazy" /></aside>;
}
function PriceCard({ value, image, lines }) {
  return <article className="price-card"><img src={`/assets/${image}`} alt={value} loading="lazy" /><p>{lines.map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</p></article>;
}
export function PricingSection() {
  return <section className="container section pricing-section" aria-labelledby="pricing-title"><div className="pricing-grid"><div><h2 id="pricing-title">Unbeatable pricing</h2><p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p></div><div className="prices-grid">{pricing.map((price, i) => <PriceCard key={i} {...price} />)}</div></div><TextLink href="https://zerodha.com/charges/">See pricing</TextLink></section>;
}
export function EducationSection() {
  return <section className="container section education-grid" aria-labelledby="education-title"><a href="https://zerodha.com/varsity/"><img src="/assets/index-education.svg" alt="Varsity illustration of books, learning, and financial knowledge" loading="lazy" /></a><div><h2 id="education-title">Free and open market education</h2><p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p><TextLink href="https://zerodha.com/varsity/">Varsity</TextLink><p className="space-top">TradingQ&amp;A, the most active trading and investment community in India for all your market related queries.</p><TextLink href="https://tradingqna.com/">TradingQ&amp;A</TextLink></div></section>;
}
export function AccountSection() {
  return <section className="container account-section" aria-labelledby="account-title"><h2 id="account-title">Open a Zerodha account</h2><p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&amp;O trades.</p><SignupButton /></section>;
}
