import { contextBridge, ipcRenderer } from 'electron';

// Only the functions listed here are available to React, as window.electronAPI.
contextBridge.exposeInMainWorld('electronAPI', {
  test: (message: string): Promise<string> =>
    ipcRenderer.invoke('test', message),
});
