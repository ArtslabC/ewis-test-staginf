import { GalleryVertical, Globe, Pen } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authcontext/AuthContext";
import { Container } from "../../components/hoc";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function WelcomePage() {
  const [fullname, setFullname] = useState("");

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${SERVER_URL}/api/user/profile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("ewis_sl_user")}`,
          },
        });
        if (response.ok) {
          const userInfo = await response.json();
          setFullname(userInfo.fullname);
        } else {
          console.error("Error fetching user info:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <div className="overflow-auto p-4 bg-gray-50 min-h-screen">
        <Container classes="container mx-auto">
          <h1 className="text-xl font-normal font-Rubik mt-5">
            Welcome {fullname} 👋
          </h1>
          <div className="bg-white p-5 rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            <Button title={"Write Post"} link="/create-post" icon={Pen} />
            <Button title={"Publish News"} link="/create-news" icon={Globe} />
            <Button
              title={"Publish Job"}
              link="/create-job"
              icon={GalleryVertical}
            />
            {user.role && user.role == "admin" && (
              <>
                <Button
                  title={"Manage Users"}
                  link="/create-user"
                  icon={GalleryVertical}
                />
                {/* <Button
                title={"Add New User"}
                link="/create-user"
                icon={GalleryVertical}
                /> */}
              </>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}

export default WelcomePage;

const Button = (props) => {
  return (
    <Link
      to={props.link}
      className="w-full h-40 ring-2 ring-primary rounded-2xl flex flex-col items-center justify-center gap-5 font-Poppins text-xl bg-purple text-primary"
    >
      <div className="w-11 h-11">
        <props.icon className="w-full h-full" />
      </div>
      <span>{props.title}</span>
    </Link>
  );
};
