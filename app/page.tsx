import MagiaDoJSX from '@/components/MagiaDoJSX/MagiaDoJSX'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <h2>Interfaces Modernos</h2>
      <p>Bem vindo à minha app em Ract e Next.js.</p>
      <MagiaDoJSX />
    </div>
  )
}

<header className='flex flex-col items-center'>
  <h1>React & Next.js</h1>
  <nav className='flex gap-4'>
    <link href="/">Intro</link>
    <link href="/sobre">Sobre</link>
  </nav>
</header>