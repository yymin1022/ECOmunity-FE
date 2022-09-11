import React from "react";
import styled from "styled-components";

const ProfileBgImgWholeStyle = styled.div`
    width: 100%;
    height: 200px;
    background-color: green;
    position: fixed;
    z-index: -1
`

const ProfileBgImg : React.FC = () => {
    return(
        <ProfileBgImgWholeStyle>
            <h1>Profile Background Image</h1>
        </ProfileBgImgWholeStyle>
    );
}

export default ProfileBgImg;