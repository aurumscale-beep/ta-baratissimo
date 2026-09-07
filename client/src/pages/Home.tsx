import { BadgeDollarSign, Check, Copy, Users } from "lucide-react";

// Troque somente estes dois endereços quando enviar os links reais dos grupos.
const GROUP_LINKS = {
  whatsapp: "https://chat.whatsapp.com/SEU-LINK-DO-GRUPO",
  telegram: "https://t.me/SEU_USUARIO_OU_GRUPO",
};

const stores = [
  "Amazon", "Americanas", "Carrefour", "Casas Bahia", "Extra", "Fast Shop",
  "KaBuM!", "Magazine Luiza", "Mercado Livre", "Natura", "Nike", "Ponto",
  "Submarino", "Zattini",
];

const communityFaces = ["#d3a77b", "#8eb3d2", "#c98787", "#9cae83", "#d4b28e", "#8498b0", "#c999a9", "#9ca7b9", "#d6bd9d", "#8ea899"];

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
          <a className="group-button" href={GROUP_LINKS.whatsapp} target="_blank" rel="noreferrer">
            <span>GRUPO DO WHATSAPP</span><Copy size={22} strokeWidth={2.2} />
          </a>
          <a className="group-button" href={GROUP_LINKS.telegram} target="_blank" rel="noreferrer">
            <span>GRUPO DO TELEGRAM</span><Copy size={22} strokeWidth={2.2} />
          </a>
        </section>

        <div className="simple-divider" />

        <section className="stores-section">
          <p>Divulgamos promoções de lojas confiáveis e seguras.</p>
          <div className="store-cloud" aria-label="Lojas acompanhadas">
            {stores.map((store) => <span className="store-chip" key={store}>{store}</span>)}
          </div>
        </section>

        <div className="simple-divider" />

        <section className="community-section">
          <p>Mais de <strong>10.000 usuários</strong> já se juntaram à nossa comunidade e economizaram de verdade</p>
          <div className="community-row" aria-label="Membros da comunidade">
            <div className="faces">
              {communityFaces.map((color, index) => <span key={index} style={{ backgroundColor: color }}>{index % 3 === 0 ? <Users size={15} /> : null}</span>)}
            </div>
            <span className="community-check"><Check size={14} /></span>
          </div>
        </section>

        <footer className="simple-footer">
          <span>Tá baratíssimo</span><span>Ofertas, cupons e achados todos os dias</span>
        </footer>
      </div>
    </main>
  );
}
