import logo from "../../assets/images/logo.svg";
import { CgMenuRight } from "react-icons/cg";

export const Header = ({ toggleActive }) => {
  return (
    <header className="w-full h-20 px-5 flex items-end justify-between bg-todo-20 border-b-[1px] border-slate-400">
      <div className="h-20 flex items-center">
        <img className="w-20" src={logo} alt="logo" />
      </div>
      <div className="h-20 md:hidden flex items-center">
        <CgMenuRight className="text-3xl cursor-pointer" onClick={toggleActive} />
      </div>
    </header>
  );
};
