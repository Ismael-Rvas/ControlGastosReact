import { useAuthStore } from "../store/AuthStore";
import { UserAuth } from "../context/AuthContent";
export function Home() {
    const { signout } = useAuthStore();
    const { user } = UserAuth();
    return (  
        <>
        <h1>Home</h1>
        </>
    );
}


