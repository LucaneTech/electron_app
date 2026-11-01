import { useState } from 'react';
import { Button } from '../components/Button';

const cards = [
  {
    title: 'main.ts',
    text: "Tourne dans Node.js. Crée la fenêtre et accède au système.",
  },
  {
    title: 'preload.ts',
    text: 'Fait le pont entre main.ts et React, de façon contrôlée.',
  },
  {
    title: 'React',
    text: "Tourne dans la fenêtre. Affiche l'interface que tu vois ici.",
  },
];

export const HomeWindow = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-2xl font-bold">Accueil</h1>
      <p className="mt-1 mb-6 text-slate-600">
        Les trois parties d'une application Electron avec React.
      </p>

      <div className="mb-6 grid grid-cols-3 gap-4">
        {cards.map((card) => (
          <section key={card.title} className="rounded bg-white p-4 shadow">
            <h2 className="mb-2 font-bold">{card.title}</h2>
            <p className="text-sm text-slate-600">{card.text}</p>
          </section>
        ))}
      </div>

      <section className="rounded bg-white p-4 shadow">
        <h2 className="mb-2 font-bold">Exemple d'état React</h2>
        <p className="mb-3 text-slate-600">Compteur : {count}</p>
        <Button label="Ajouter 1" onClick={() => setCount(count + 1)} />
      </section>
    </>
  );
};
