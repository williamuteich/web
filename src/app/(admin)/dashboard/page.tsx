import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogoutButton from "../../(pages)/login/components/LogoutButton";

interface UserDadosProps {
  id: string;
  name: string;
  email: string;
}

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  console.log("retornando da sessao", session)

  const { id, name, email }: UserDadosProps = session.user as UserDadosProps;

  return (
    <div>
      <p>Olá, {name}!</p>
      <p>Email: {email}</p>

      <div>
        <LogoutButton />
      </div>
    </div>
  );
}
