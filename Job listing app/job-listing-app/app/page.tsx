import { LoginForm } from "@/components/LogInForm";
import { Onboarding } from "@/components/onboarding";
import { auth } from "./auth";
import { redirect } from "next/navigation";


export default async function Home() {
  const session = await auth();
  if (!session?.user) {return <LoginForm/>}
  else{
    redirect("/landingpage")
  }

 

}
