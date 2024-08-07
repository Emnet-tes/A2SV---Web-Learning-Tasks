'use server'
import {signIn,signOut} from '@/app/auth'

export async function doLogin(event:React.FormEvent<HTMLFormElement>){
    
  event.preventDefault();
const formData = new FormData(event.currentTarget);


    await signIn('google',{redirectTo:"/landingpage"});

}
export async function doLogout(){
    await signOut({redirectTo:""})
}