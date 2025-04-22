import styles from './page.module.scss'
import { Card } from "@/components/layout/card"

export default function ProjectsPage() {
  return (
    <>
      <div className={styles.container}>
        {/* <div className="rotate-x-15 -rotate-y-30">
          <Card1 />
        </div>
        <div className="rotate-x-15 -rotate-y-30">
          <Card2 />
        </div> 
        <div className="rotate-x-15 -rotate-y-30">
          <Card3 />
        </div> */}
      </div>
      <Card />
    </>
  )
}