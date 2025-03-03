import { useAuthStore } from "../store/AuthStore";
import { UserAuth } from "../context/AuthContent";
function Home() {
    const { signout } = useAuthStore();
    const { user } = UserAuth();
    return (  
        <>
            <h1>Bienvenido {user.name}</h1>
            <img src={user.picture} alt="" />
            <button onClick={signout}>Logout</button>
        </>
    );
}

export default Home;
