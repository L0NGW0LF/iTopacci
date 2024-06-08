import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { signIn } from './strapi-connector.js';


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'e-mail',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        /**
         * This function is used to define if the user is authenticated or not.
         * If authenticated, the function should return an object contains the user data.
         * If not, the function should return `null`.
         */


        
        if (credentials == null) return null;
        /**
         * credentials is defined in the config above.
         * We can expect it contains two properties: `email` and `password`
         */
        try {
          const { user, jwt } = await signIn({
            email: credentials.email,
            password: credentials.password,
          });
          return { ...user, jwt };
        } catch (error) {
          // Sign In Fail
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      session.id = token.id;
      session.jwt = token.jwt;
      session.user.username = token.username;
      session.user.name = token.name;
      session.user.surname = token.surname;

      return Promise.resolve(session);
    },
    jwt: async ({ token, user }) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.id = user.id;
        token.jwt = user.jwt;
        token.username = user.username;
        token.name = user.name;
        token.surname = user.surname;

        
      }
      return Promise.resolve(token);
    },
  },
  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "", // Hex color code
    logo: "/logo.png", // Absolute URL to image
    buttonText: "" // Hex color code
  },
});