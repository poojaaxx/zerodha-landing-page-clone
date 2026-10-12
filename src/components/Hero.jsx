import { SignupButton } from './Link';
export default function Hero() {
  return <section className="hero container" aria-labelledby="hero-title">
    <img className="hero-image" src="/assets/landing.svg" alt="Zerodha investing platforms showing a portfolio, market charts, and stock watchlists across devices" fetchPriority="high" />
    <h1 id="hero-title">Invest in everything</h1>
    <p>Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
    <SignupButton />
  </section>;
}
