import { useState } from 'react';
import { Button } from '../components/Button';

export const SettingsWindow = () => {
  const [message, setMessage] = useState('Bonjour Electron');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      setResponse(await window.electronAPI.test(message));
    } catch {
      setResponse("Erreur : main.ts n'a pas répondu.");
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Paramètres</h1>
      <p className="mt-1 mb-6 text-slate-600">
        Envoie un message de React vers main.ts, puis affiche sa réponse.
      </p>

      <section className="rounded bg-white p-4 shadow">
        <label htmlFor="message" className="mb-2 block font-bold">
          Message
        </label>
        <input
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mb-3 block w-full rounded border border-slate-300 px-3 py-2"
        />
        <Button label="Envoyer à main.ts" onClick={sendMessage} />

        {response && (
          <p className="mt-4 rounded bg-slate-100 p-3 text-sm">{response}</p>
        )}
      </section>
    </>
  );
};
