export function TextLink({ href, children, className = '' }) {
  return <a className={className} href={href}>{children}<span aria-hidden="true"> →</span></a>;
}
export function SignupButton() {
  return <a className="button" href="https://zerodha.com/open-account/">Sign up for free</a>;
}
