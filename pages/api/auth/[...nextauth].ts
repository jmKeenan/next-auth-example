import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import GithubProvider from "next-auth/providers/github"
import TwitterProvider from "next-auth/providers/twitter"
//import BHProvider from "next-auth/providers/bullhorn"
import Auth0Provider from "next-auth/providers/auth0"
// import AppleProvider from "next-auth/providers/apple"
// import EmailProvider from "next-auth/providers/email"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  
  
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
   
    {
    id: "bullhorn",
    name: "Bullhorn",
    type: "oauth",
    authorization: "https://auth-west.bullhornstaffing.com/oauth/authorize",
    token:  "https://auth.bullhornstaffing.com/oauth/token",
    profile(profile) {
      return {
          profile.id = json.BhRestToken;
          profile.token = json.BhRestToken;
          profile.url = json.restUrl;
      }
    },
    }
 
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
})
