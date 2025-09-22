import { useNavigate } from "react-router-dom";

export const useGoToHomePage = () => {
  const navigate = useNavigate();
  return (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };
};
