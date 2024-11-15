
import { getServerSession } from "next-auth";
import { auth as authOptions} from "@/lib/auth-config";
import LogoutButton from "../../(pages)/login/components/LogoutButton";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect("/login")
  }

  return (
    <div className="pt-48">
      {session && (
        <div>
            {JSON.stringify(session, null, 2)}
        </div>
      )}
      <div>
        <LogoutButton />
      </div>
    </div>
  );
}
