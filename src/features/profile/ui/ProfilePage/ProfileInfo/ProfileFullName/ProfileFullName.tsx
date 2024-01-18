import s from "features/profile/ui/ProfilePage/ProfileInfo/ProfileFullName/ProfileFullName.module.css";
import { useAppDispatch } from "common";
import { useSelector } from "react-redux";
import { AppRootState } from "app/store";
import EditIcon from "@mui/icons-material/Edit";

export const ProfileFullName = (props: any) => {
  const name = useSelector<AppRootState, string>((state) => state.profileStore.userProfile.fullName);

  const handleNameChanged = () => {};

  return (
    <div className={s.fullNameContainer}>
      {/*<h2 className={s.fullName}>Sir J G Faulkner</h2>*/}
      {name ? name : "default name"}
      <EditIcon onClick={handleNameChanged}></EditIcon>
    </div>
  );
};
