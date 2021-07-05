import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: "https://thispersondoesnotexist.com/image",
        followed: false,
        fullName: "Paul",
        status: "Here I am!",
        location: {
          city: "Moscow",
          country: "Russia",
        },
      },
      {
        id: 2,
        photoUrl: "https://thispersondoesnotexist.com/image",
        followed: true,
        fullName: "Kirill",
        status: "Here we go))",
        location: {
          city: "Yekaterinburg",
          country: "Russia",
        },
      },
      {
        id: 3,
        photoUrl: "https://thispersondoesnotexist.com/image",
        followed: true,
        fullName: "Vika",
        status: "First time here. PM me pls.",
        location: {
          city: "Yekaterinburg",
          country: "Russia",
        },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img className={styles.userPhoto} src={u.photoUrl} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
