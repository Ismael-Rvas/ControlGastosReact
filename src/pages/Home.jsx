import { useAuthStore } from "../store/AuthStore";
import { UserAuth } from "../context/AuthContent";
function Home() {
    const { signout } = useAuthStore();
    const { user } = UserAuth();
    return (  
        <>
        <h1>Home</h1>
        </>
    );
}

export default Home;
