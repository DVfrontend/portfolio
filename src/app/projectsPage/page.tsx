import styles from './page.module.scss'
import { Card } from "@/components/ui/card"
import { Container } from "../lib/utils"

export default function ProjectsPage() {
  return (
    <Container>
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
    </Container>
  )
}