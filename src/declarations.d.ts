/// <reference types="@electron-forge/plugin-vite/forge-vite-env" />
declare module '*.css';

// Describes what src/preload.ts exposes, so TypeScript knows window.electronAPI.
interface Window {
  electronAPI: {
    test: (message: string) => Promise<string>;
  };
}
