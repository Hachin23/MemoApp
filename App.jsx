import React from 'react';

 import MemoListScreen from './src/screens/MemoListScreen';
// import MemoDetailScreen from './src/screens/MemoDetailScreen';
//import MemoEditScreen from './src/screens/MemoEditScreen';
//import MemoCreateScreen from './src/screens/MemoCreateScreen';
//import LogInScreen from './src/screens/LogInScreen';
//import SignUpScreen from './src/screens/SignUpScreen';

// Reactの開発ではタブ幅=2スペースが推奨されているためSettingを修正する。
export default function App() {
  return (
    <MemoListScreen />
  );
}
