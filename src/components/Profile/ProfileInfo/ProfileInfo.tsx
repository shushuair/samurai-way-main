import React from 'react';
import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://thumbs.dreamstime.com/b/funchal-%C3%A2%E2%82%AC-madeira-island-portugal-85328664.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + description</div>
        </div>
    );
};

export default ProfileInfo;

