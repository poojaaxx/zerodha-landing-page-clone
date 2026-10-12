import { useEffect, useRef, useState } from 'react';
import { navigation, products, menuGroups } from '../data/navigation';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const root = useRef(null);
  const button = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === 'Escape') { setOpen(false); button.current.focus(); }
    };
    const onClick = (event) => { if (!root.current.contains(event.target)) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onClick);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onClick); };
  }, [open]);
  return <header className="site-header" ref={root}>
    <div className="container nav-row">
      <a href="#" aria-label="Zerodha clone home"><img className="logo" src="/assets/logo.svg" alt="Zerodha" width="129" height="17" /></a>
      <nav aria-label="Main navigation" className="desktop-nav">{navigation.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
      <button ref={button} className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)}><span /><span /><span /></button>
      <div id="site-menu" className="site-menu" hidden={!open} onBlur={(event) => { if (!root.current.contains(event.relatedTarget)) setOpen(false); }}>
        <nav aria-label="Mobile navigation" className="mobile-nav">{navigation.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
        <div className="menu-products">{products.map(([name, detail, icon, href]) => <a key={name} href={href}><img src={`/assets/${icon}`} alt="" width="50" height="50" /><strong>{name}</strong><small>{detail}</small></a>)}</div>
        <div className="menu-bottom">{menuGroups.map(group => <div key={group.title}><h3>{group.title}</h3>{group.links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</div>)}<div><h3>Education</h3><div className="menu-education"><a href="https://zerodha.com/varsity/"><img src="/assets/varsity.png" alt="" />Varsity</a><a href="https://tradingqna.com/"><img src="/assets/tqna.png" alt="" />Trading Q&amp;A</a></div></div></div>
      </div>
    </div>
  </header>;
}
