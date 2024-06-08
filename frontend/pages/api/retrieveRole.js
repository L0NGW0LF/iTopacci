import { useSession } from "next-auth/react";

const getRole = async () => {
  const { data: session } = useSession();
  const response = await fetch('http://localhost:1337/api/users/me?populate=role', {
    headers: {
      Authorization: `Bearer ${session?.jwt}`,
    },
  });
  const data = await response?.json();
  const role = data?.role?.id;

  return role
}

export default getRole;