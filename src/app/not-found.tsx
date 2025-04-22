'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Error() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 5000)
  },[router])
  return (
    <>
      <div className="flex justify-center items-center">
        <Image src={"/images/error404.png"} alt="Error 404"  width={500} height={500}/>
      </div>
      <h1 className="text-2xl font-bold">Ошибка 404</h1>
      <h2 className="text-xl font-bold">В течении 5 секунд вы автоматически вернетесь на главную страницу</h2>
    </>
  )
}