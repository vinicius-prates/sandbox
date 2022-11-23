import { Notify } from "notiflix";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../userStore";

export const UserInfo = () => {
    const account = useUserStore((state) => state.userAccount);

  const navigate = useNavigate();
  useEffect(() => {
    if (!account) {
      Notify.failure("You need to loggin first!");
      navigate("/login");
      return;
    }
  }, []);

    return(
        <div>
            <div>

            </div>
        </div>
    )
}