import NextAuth from "next-auth"
// import AppleProvider from "next-auth/providers/apple"
import GoogleProvider from "next-auth/providers/google"
// import EmailProvider from "next-auth/providers/email"




export default NextAuth({
    secret: process.env.SECRET,
    providers: [
      // OAuth authentication providers
    //   AppleProvider({
    //     clientId: process.env.APPLE_ID,
    //     clientSecret: process.env.APPLE_SECRET,
    //   }),
      GoogleProvider({
        clientId: '82208393482-atn9b7fhiur6i9du30vaf0qv1lg7j8gv.apps.googleusercontent.com',
        clientSecret: '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',
      }),
      
    
    ],
  });



  // 82208393482-atn9b7fhiur6i9du30vaf0qv1lg7j8gv.apps.googleusercontent.com

  // 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


//   signIn Page:-----------


// import { useSession, signIn, signOut } from "next-auth/react"

// export default function Component() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }









// session provider:-------------

// import { SessionProvider } from "next-auth/react"

// export default function App({
//   Component,
//   pageProps: { session, ...pageProps },
// }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }