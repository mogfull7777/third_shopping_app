import React, {useEffect, useState} from 'react';
import axios from "axios";

const Profile = () => {

    const [userInfo, setUserInfo] = useState({});

    const getUserInfo = async () => {

        try {

            const token = await localStorage.getItem("token")

            const config = {
                headers : {
                    authorization : "Bearer " + token.toString()
                }
            }

            const {data, status} = await axios.get("http://localhost:9090/api/users/profile", config)

            if (status === 200) {
                console.log(data)
                setUserInfo(data)
            }



        } catch (err) {

            console.log(err.message)

        }
    }
    useEffect(() => {
        getUserInfo()
    }, [])


    return (
        <div>
            <h1>{userInfo.email}</h1>
            <h2>{userInfo.name}</h2>
        </div>
    );
};

export default Profile;