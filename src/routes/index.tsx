import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const EBOOK_URL = "https://www.naffy.io/mrok";
const DISCORD_URL = "https://discord.gg/tgXgGuxfYw";

function Index() {
  return (
    <div className="min-h-screen text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-display text-primary tracking-widest text-sm">SD</div>
          <div className="flex gap-6 text-xs uppercase tracking-widest text-muted-foreground">
            <a href="#ebooki" className="hover:text-primary transition">Ebooki</a>
            <a href="#discord" className="hover:text-primary transition">Discord</a>
            <a href="#o-mnie" className="hover:text-primary transition">O mnie</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent blur-[120px]" />
        </div>

        <div className="relative text-center max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-primary/70 mb-6">Mroczna Psychologia</p>
          <h1 className="font-display font-extrabold text-6xl md:text-8xl lg:text-9xl text-primary text-glow leading-none uppercase">
            Strefa<br />Dominacji
          </h1>
          <div className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Odkryj psychologię wpływu, władzy i kontroli. Wiedza, którą inni ukrywają — dostępna dla tych, którzy odważą się sięgnąć głębiej.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={EBOOK_URL} target="_blank" rel="noopener noreferrer"
               className="group inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-widest text-sm border-glow hover:bg-accent transition">
              Kup Ebooki →
            </a>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center px-8 py-4 border border-primary/50 text-primary font-semibold uppercase tracking-widest text-sm hover:bg-primary/10 hover:border-primary transition">
              Dołącz do Discord
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted-foreground animate-pulse">
          ↓ Wejdź głębiej
        </div>
      </section>

      {/* Ebooks */}
      <section id="ebooki" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-primary/70 mb-4">Biblioteka Cienia</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary uppercase">Ebooki</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Sztuka Manipulacji", desc: "Techniki wpływu, które zmienią sposób w jaki postrzegasz ludzkie relacje." },
              { title: "Władza Umysłu", desc: "Psychologia dominacji i budowania autorytetu w każdej sytuacji." },
              { title: "Zimna Empatia", desc: "Czytanie ludzi i wykorzystywanie ich schematów myślowych." },
            ].map((b) => (
              <div key={b.title} className="group relative bg-card border border-border p-8 hover:border-primary transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition" />
                <div className="text-primary/40 font-display text-5xl mb-4">0{["1","2","3"][["Sztuka Manipulacji","Władza Umysłu","Zimna Empatia"].indexOf(b.title)]}</div>
                <h3 className="font-display text-2xl text-foreground mb-3 uppercase">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{b.desc}</p>
                <a href={EBOOK_URL} target="_blank" rel="noopener noreferrer"
                   className="text-primary text-xs uppercase tracking-widest hover:text-accent transition inline-flex items-center gap-2">
                  Odblokuj wiedzę →
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={EBOOK_URL} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-widest text-sm border-glow hover:bg-accent transition">
              Pełna kolekcja →
            </a>
          </div>
        </div>
      </section>

      {/* Discord */}
      <section id="discord" className="relative py-32 px-6 border-y border-border bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary/70 mb-4">Społeczność</p>
          <h2 className="font-display text-4xl md:text-6xl text-primary uppercase mb-6">Wejdź do Kręgu</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Darmowy dostęp do zamkniętej społeczności na Discordzie. Rozmowy, których nie usłyszysz nigdzie indziej.
          </p>
          <div className="flex flex-wrap justify-center gap-6 my-10 text-xs uppercase tracking-widest text-muted-foreground">
            <span>• Darmowe wejście</span>
            <span>• Ekskluzywne treści</span>
            <span>• Aktywna społeczność</span>
          </div>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground font-semibold uppercase tracking-widest text-sm border-glow hover:bg-accent transition">
            Dołącz za darmo →
          </a>
        </div>
      </section>

      {/* About */}
      <section id="o-mnie" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary/70 mb-4">Manifest</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary uppercase mb-8">Nie dla każdego</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Strefa Dominacji to miejsce dla tych, którzy chcą zrozumieć mechanizmy władzy, wpływu i kontroli.
            Nie sprzedaję iluzji — dostarczam narzędzi. To co z nimi zrobisz, zależy tylko od Ciebie.
          </p>
          <div className="mt-12 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-widest text-muted-foreground">
          <div className="font-display text-primary">Strefa Dominacji</div>
          <div className="flex gap-6">
            <a href={EBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Ebooki</a>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Discord</a>
          </div>
          <div>© {new Date().getFullYear()}</div>
        </div>
      </footer>
    </div>
  );
}
