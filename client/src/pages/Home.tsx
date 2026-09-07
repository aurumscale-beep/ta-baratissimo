import { BadgeDollarSign, Copy } from "lucide-react";

// Troque somente estes dois endereços quando enviar os links reais dos grupos.
const GROUP_LINKS = {
  whatsapp: "https://chat.whatsapp.com/SEU-LINK-DO-GRUPO",
  telegram: "https://t.me/SEU_USUARIO_OU_GRUPO",
};

const stores = [
  ["Amazon", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazon.svg"],
  ["Americanas", "https://commons.wikimedia.org/wiki/Special:FilePath/Lojas_Americanas_(2021).svg"],
  ["Carrefour", "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/carrefour.svg"],
  ["Natura", "https://commons.wikimedia.org/wiki/Special:FilePath/Natura_logo.svg"],
];

const iconUrl = (name: string, color: string) => `https://cdn.simpleicons.org/${name}/${color}`;

export default function Home() {
  return (
    <main className="simple-page">
      <div className="simple-container">
        <header className="simple-header">
          <div className="simple-logo" aria-label="Tá baratíssimo">
            <span className="logo-coin"><BadgeDollarSign size={38} strokeWidth={2.3} /></span>
            <span>Tá <strong>baratíssimo</strong></span>
          </div>
          <p className="logo-tag">Ofertas que valem a pena</p>
        </header>

        <section className="simple-intro">
          <h1>Promoções de Grandes Redes de Lojas do Brasil</h1>
          <p>Publicamos apenas ofertas verificadas</p>
          <h2>👇 Clique e acesse as Melhores Ofertas 👇</h2>
        </section>

        <section className="group-links" aria-label="Acesse nossos grupos">
          <a className="group-button group-button-whatsapp" href={GROUP_LINKS.whatsapp} target="_blank" rel="noreferrer">
            <img src={iconUrl("whatsapp", "ffffff")} alt="Ícone oficial do WhatsApp" /><span>GRUPO DO WHATSAPP</span><Copy size={22} strokeWidth={2.2} />
          </a>
          <a className="group-button group-button-telegram" href={GROUP_LINKS.telegram} target="_blank" rel="noreferrer">
            <img src={iconUrl("telegram", "ffffff")} alt="Ícone oficial do Telegram" /><span>GRUPO DO TELEGRAM</span><Copy size={22} strokeWidth={2.2} />
          </a>
        </section>

        <div className="simple-divider" />

        <section className="stores-section">
          <p>Divulgamos promoções de lojas confiáveis e seguras.</p>
          <div className="store-cloud" aria-label="Lojas acompanhadas">
            {stores.map(([store, src]) => (
              <span className="store-chip" key={store} title={store}>
                <img src={src} alt={`Logo da ${store}`} />
              </span>
            ))}
          </div>
        </section>

        <footer className="simple-footer">
          <span>Tá baratíssimo</span><span>Ofertas, cupons e achados todos os dias</span>
        </footer>
      </div>
    </main>
  );
}
