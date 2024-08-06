
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

export const options={
    providers:[
        GitHubProvider({
         profile(profile){
            console.log("profile Github",profile)
         }
        })
    ]
}