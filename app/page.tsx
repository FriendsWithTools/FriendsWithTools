import Link from 'next/link';
import Image from 'next/image';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

export default function Home() {
  return (
    <main>
      <div>
        <SearchBar />
      </div>
      <h1>Explore Page</h1>
    </main>
  );
}
