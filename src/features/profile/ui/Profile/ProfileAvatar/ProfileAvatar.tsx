import s from "./ProfileAvatar.module.css"

export const ProfileAvatar = () => {
    return (
            <div className={s.avatarContainer}>
                <img src="https://www.shutterstock.com/image-vector/young-man-avatar-character-260nw-661669825.jpg" alt="Avatar" className={s.avatarImage} />
            </div>
    );
};

