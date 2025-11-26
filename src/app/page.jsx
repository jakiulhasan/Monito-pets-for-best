import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import OurPets from "@/components/OurPets";
import PetKnowledge from "@/components/PetKnowledge";
import React from "react";

export default function page() {
  return (
    <div>
      <div className=" flex justify-center">
        <Banner></Banner>
      </div>
      <OurPets> </OurPets>
      <Hero></Hero>
      <PetKnowledge></PetKnowledge>
      <Newsletter></Newsletter>
    </div>
  );
}

// "use client";
// import { useSession, signIn, signOut } from "next-auth/react";

// export default function Component() {
//   const { data: session } = useSession();
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     );
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   );
// }
