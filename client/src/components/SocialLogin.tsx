import React from "react";
import { FaGoogle } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useLoginWithSocialMedia } from "@/hooks/auth/useLoginWithSocialMedia";

const SocialLogin = () => {
  const { loginWithSocialMedia } = useLoginWithSocialMedia();

  // Handle success response from Google OAuth
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleGoogleSuccess = async (response: any) => {
    try {
      // Fetch user details from Google's API
      const {
        data: { given_name, family_name, email, picture },
      } = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${response.access_token}`,
        },
      });
      loginWithSocialMedia({
        name: `${given_name} ${family_name}`,
        email: email,
        profilePic: picture,
      });
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  // Handle Google OAuth errors
  const handleGoogleError = () => {
    console.error("Error logging in with Google");
  };

  const googleLogin = useGoogleLogin({
    onSuccess: handleGoogleSuccess,
    onError: handleGoogleError,
  });

  return (
    <div className="flex flex-col gap-2">
      <div
        onClick={() => googleLogin()}
        className="flex  cursor-pointer items-center justify-center gap-2 rounded-lg border border-primary-blue p-2  transition duration-300 ease-in hover:bg-primary-blue hover:text-primary-text"
      >
        <span>Sign in with Google</span>
        <FaGoogle className="h-5 w-5 text-primary-text" />
      </div>
    </div>
  );
};

export default SocialLogin;
