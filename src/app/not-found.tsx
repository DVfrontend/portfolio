'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Heading from "./components/layout/eng/Heading";

export default function Error() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 5000)
  },[router])
  return (
    <div>
      <h1>Not Found</h1>
      {/* <Image>

      </Image> */}
      <p>Could not find requested resource</p>
      {/* <Heading text="404" /> */}
    </div>
  )
}