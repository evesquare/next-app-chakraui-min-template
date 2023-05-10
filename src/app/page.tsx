import Image from 'next/image'
import styles from '@/app/styles/pages/page.module.scss'
import Card from "@/app/components/Card"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Card
          url="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          title="Docs"
          description="Find in-depth information about Next.js features and API."
        ></Card>

        <Card
          url="https://beta.nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          title="Learn"
          description="Learn about Next.js in an interactive course with quizzes!"
        ></Card>

        <Card
          url="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          title="Templates"
          description="Explore the Next.js 13 playground."
        ></Card>

        <Card
          url="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          title="Deploy"
          description="Instantly deploy your Next.js site to a public URL with Vercel."
        ></Card>
      </div>
    </main>
  )
}
