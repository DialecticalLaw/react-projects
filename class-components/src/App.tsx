import { Component, ReactNode } from 'react';
import { Search } from './components/Search/Search';
import { Results } from './components/Results/Results';

export class App extends Component {
  render(): ReactNode {
    return (
      <>
        <Search />
        <Results />
      </>
    );
  }
}
