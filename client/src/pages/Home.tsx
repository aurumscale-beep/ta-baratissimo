import {
  ArrowUpRight,
  BellRing,
  Check,
  ChevronDown,
  CircleHelp,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Tag,
  Zap,
} from "lucide-react";

// Substitua pelos links reais dos seus grupos antes de divulgar a página.
const GROUP_LINKS = {
  whatsapp: "https://chat.whatsapp.com/SEU-LINK-DO-GRUPO",
  telegram: "https://t.me/SEU_USUARIO_OU_GRUPO",
};

const benefits = [
  { icon: Tag, title: "Ofertas selecionadas", text: "Só entra o que vale a pena." },
  { icon: BellRing, title: "Alertas em primeira mão", text: "Você fica sabendo antes." },
  { icon: Zap, title: "Sem enrolação", text: "Link, cupom e preço direto." },
];

export default function Home() {
  return (
    <main className="site-shell min-h-screen overflow-hidden">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#top" className="brand-mark" aria-label="Tá baratíssimo, início">
          <span className="brand-spark"><Sparkles size={16} strokeWidth={2.5} /></span>
          <span>Tá <strong>baratíssimo</strong></span>
        </a>
        <a href="#canais" className="header-link">
          Escolher canal <ArrowUpRight size={15} />
        </a>
      </header>

      <section id="top" className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-28 lg:pt-20">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot" /> Clube de promoções</div>
          <h1>Seu radar para <span>pagar menos.</span></h1>
          <p className="hero-lede">
            Promoções de verdade, cupons e achados que cabem no bolso — reunidos em um só lugar, sem perder tempo procurando.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#canais">
              Quero receber ofertas <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href="#como-funciona">
              Como funciona <ChevronDown size={16} />
            </a>
          </div>
          <div className="trust-row">
            <div className="avatar-stack" aria-hidden="true"><span>J</span><span>M</span><span>A</span><span>+</span></div>
            <div><strong>Gente esperta já está dentro</strong><small>Ofertas sem spam e sem complicação</small></div>
          </div>
        </div>

        <div className="hero-art" aria-label="Ilustração abstrata de ofertas e descontos">
          <div className="art-grid" />
          <div className="price-card price-card-back"><small>cupom ativado</small><strong>-70%</strong></div>
          <div className="price-card price-card-front">
            <div className="price-card-top"><span className="tiny-label">ACHADO DO DIA</span><Tag size={19} /></div>
            <div className="product-orb"><span>R$</span><strong>19</strong><small>,90</small></div>
            <div className="price-lines"><span /><span /><span /></div>
            <div className="discount-pill">economize hoje</div>
          </div>
          <div className="floating-tag tag-yellow">OFERTA</div>
          <div className="floating-tag tag-pink">NOVO</div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>
      </section>

      <section id="como-funciona" className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 lg:px-10">
        <div className="section-kicker">POR QUE ENTRAR?</div>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, text }, index) => (
            <article className="benefit-card" key={title} style={{ "--delay": `${index * 70}ms` } as React.CSSProperties}>
              <div className="benefit-icon"><Icon size={19} /></div>
              <div><h2>{title}</h2><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="canais" className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="join-panel">
          <div className="join-panel-copy">
            <div className="eyebrow eyebrow-light"><span className="pulse-dot" /> É gratuito</div>
            <h2>Escolha onde quer<br /><em>receber os achados.</em></h2>
            <p>Você pode entrar em um ou nos dois canais. As melhores oportunidades chegam primeiro por aqui.</p>
          </div>
          <div className="channel-list">
            <a className="channel-button whatsapp" href={GROUP_LINKS.whatsapp} target="_blank" rel="noreferrer">
              <span className="channel-icon"><MessageCircle size={23} fill="currentColor" /></span>
              <span className="channel-copy"><small>Entrar pelo</small><strong>WhatsApp</strong></span>
              <ArrowUpRight className="channel-arrow" size={20} />
            </a>
            <a className="channel-button telegram" href={GROUP_LINKS.telegram} target="_blank" rel="noreferrer">
              <span className="channel-icon"><Send size={22} fill="currentColor" /></span>
              <span className="channel-copy"><small>Entrar pelo</small><strong>Telegram</strong></span>
              <ArrowUpRight className="channel-arrow" size={20} />
            </a>
          </div>
        </div>
        <div className="safe-note"><ShieldCheck size={17} /><span>Seus dados ficam seguros. Você pode sair quando quiser.</span></div>
      </section>

      <footer className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-3 border-t border-white/10 px-6 py-7 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <span>© {new Date().getFullYear()} Tá baratíssimo</span>
        <span className="footer-note"><CircleHelp size={14} /> Links de afiliado podem gerar comissão, sem custo extra para você.</span>
      </footer>
    </main>
  );
}
