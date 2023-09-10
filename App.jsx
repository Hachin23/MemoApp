import React from 'react';

import MemoListScreen from './src/screens/MemoListScreen';
//import MemoDetailScreen from './src/screens/MemoDetailScreen';


// Reactの開発ではタブ幅=2スペースが推奨されているためSettingを修正する。
export default function App() {
  return (
    <MemoListScreen />
  );
}
