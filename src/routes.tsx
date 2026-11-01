import { createHashRouter } from 'react-router';
import { Layout } from './layouts/Layout';
import { HomeWindow } from './windows/HomeWindow';
import { SettingsWindow } from './windows/SettingsWindow';

// Hash routing (#/settings) keeps working once the packaged app loads index.html from disk.
export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomeWindow /> },
      { path: 'settings', element: <SettingsWindow /> },
    ],
  },
]);
