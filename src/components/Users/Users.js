import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
<<<<<<< HEAD
        {pages
          .map((p) => {
            return (
              <span
                className={props.currentPage === p && styles.selectedPage}
                onClick={(e) => {
                  props.onPageChanged(p);
                }}>
                {p}
              </span>
            );
          })
          .slice(0, 10)}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : "https://thispersondoesnotexist.com/image"}
                  className={styles.userPhoto}
                  alt='userPhoto'
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}>
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}>
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
=======
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
>>>>>>> 4b49e1375a38284b7c38570b14927b771ffa2e25
    </div>
  );
};

export default Users;
