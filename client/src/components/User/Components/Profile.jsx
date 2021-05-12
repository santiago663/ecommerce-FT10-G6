/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editCurrentUser,
  activate2fa,
} from "../../../redux/actions/actionUserAuth";
import { removeError } from "../../../redux/actions/uiError";
import Swal from "sweetalert2";
import "../../../scss/components/_profileuser.scss";
import { firebase } from "../../../firebase/firebase-config";
export default function Profile() {
  const { currentUser } = useSelector((store) => store.auth);
  const { msgError } = useSelector((store) => store.uiError);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [file, setFile] = useState(null);
  const [user, setInputs] = useState({
    available: true,
    email: "",
    id: 0,
    location_id: 0,
    name: "",
    password: "",
    phone_Number: "",
    phone_Code: "",
    role: {},
    roleId: 0,
    profilePic: "",
    authy: false,
  });

  useEffect(() => {
    setInputs({
      ...user,
      id: currentUser.id,
      name: currentUser.name,
      email: currentUser.email,
      available: currentUser.available,
      location_id: currentUser.location_id,
      password: currentUser.password,
      phone_Number: currentUser.phone_Number && currentUser.phone_Number[1],
      phone_Code: currentUser.phone_Number && currentUser.phone_Number[0],
      role: currentUser.role,
      roleId: currentUser.roleId,
      profilePic: currentUser.profilePic,
      authy: currentUser.authy,
    });
  }, [currentUser]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setActive(true);
    if (e.target.name === "file") {
      setFile(e.target.files[0]);
      const previewFile = e.target.files[0];
      setInputs({ ...user, profilePic: URL.createObjectURL(previewFile) });
    } else {
      if (e.target.name === "phone_Number" || e.target.name === "phone_Code") {
        setInputs({
          ...user,
          authy: false,
          authyId: null,
          [e.target.name]: e.target.value,
        });
      } else {
        setInputs({
          ...user,
          [e.target.name]: e.target.value,
        });
      }
    }
  };

  const submitUpdateProfile = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        setActive(false);

        if (file) {
          const storageRef = firebase.storage().ref(`profile/${file.name}`);
          const task = storageRef.put(file);
          task.on(
            "state_changed",
            function (snapshot) {},
            function (error) {
              console.log(error);
            },
            function () {
              task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                dispatch(
                  editCurrentUser(currentUser.id, {
                    ...user,
                    phone_Number: [user.phone_Code, user.phone_Number],
                    profilePic: downloadURL,
                  })
                );
              });
            }
          );
        } else {
          if (
            currentUser.phone_Number[0] !== user.phone_Number ||
            currentUser.phone_Number[1] !== user.phone_Code
          ) {
            dispatch(
              editCurrentUser(currentUser.id, {
                ...user,
                phone_Number: [user.phone_Code, user.phone_Number],
                authy: false,
                authyId: null,
              })
            );
          } else {
            dispatch(
              editCurrentUser(currentUser.id, {
                ...user,
                phone_Number: [user.phone_Code, user.phone_Number],
              })
            );
          }
          Swal.fire("Saved!", "", "success");
        }
      } else if (result.isDenied) {
        setInputs({
          ...user,
          id: currentUser.id,
          name: currentUser.name,
          email: currentUser.email,
          available: currentUser.available,
          location_id: currentUser.location_id,
          password: currentUser.password,
          phone_Number: currentUser.phone_Number[1],
          phone_Code: currentUser.phone_Number[0],
          role: currentUser.role,
          roleId: currentUser.roleId,
          profilePic: currentUser.profilePic,
        });
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  msgError !== null &&
    Swal.fire({
      title: "Error!",
      text: msgError,
      icon: "error",
      confirmButtonText: "Cool",
    }).then(() => {
      dispatch(removeError());
    });

  const activate2FA = (e) => {
    if (user.phone_Number.length > 5 && user.phone_Code.length > 1) {
      if (document.getElementById("check2fa").checked === true) {
        Swal.fire({
          title: "<strong>Do you want to activate 2FA?</strong>",
          icon: "info",
          html:
            "<h3>Important</h3> " +
            "<span>2FA will be activated for your account, you will receive a message on your cell phone asking you to install Authy, later you will have to register with the same phone number registered in your Digital Art account.</span> " +
            "<span> The next time you log in you must perform the two-factor verification, once you enter your credentials you will receive a code in the Authy application which you must enter in order to access your account.</span>",
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText: '<i class="fa fa-thumbs-up"></i> Yes!',
          confirmButtonAriaLabel: "Thumbs up, great!",
          cancelButtonText: "No",
          cancelButtonAriaLabel: "Thumbs down",
        }).then((result) => {
          if (result.isConfirmed) {
            if (currentUser.authyId) {
              dispatch(
                editCurrentUser(currentUser.id, {
                  ...currentUser,
                  authy: true,
                })
              );
            } else {
              dispatch(
                activate2fa(
                  currentUser.email,
                  currentUser.phone_Number[1],
                  currentUser.phone_Number[0]
                )
              );
            }
            //si no se regitro anteriormente---> registrarlo en authy, guardar data authyid y authy true
            Swal.fire("Saved!", "", "success");
          } else if (!result.isConfirmed) {
            document.getElementById("check2fa").checked = false;
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      } else {
        Swal.fire({
          title: "<strong>Do you want to disable 2FA??</strong>",
          icon: "info",
          html:
            "<h3>Important</h3> " +
            "<span>2FA will be deactivated for your account, if you wish to reactivate it you can do so at any time.</span> " +
            "<span>The next time you log in, you just have to enter your username and password.</span>",
          showCloseButton: true,
          showCancelButton: true,
          focusConfirm: false,
          confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
          confirmButtonAriaLabel: "Thumbs up, great!",
          cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
          cancelButtonAriaLabel: "Thumbs down",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(
              editCurrentUser(currentUser.id, {
                ...currentUser,
                authy: false,
              })
            );
            Swal.fire("Saved!", "", "success");
          } else if (!result.isConfirmed) {
            document.getElementById("check2fa").checked = true;
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      }
    } else {
      Swal.fire({
        title: "Error!",
        text:
          "Please make sure phone code area & phone number fields are completed",
        icon: "error",
        confirmButtonText: "Cool",
      }).then(() => {
        document.getElementById("check2fa").checked = false;
      });
    }
  };

  return (
    <div className="profile-body">
      <div className="profile-pic-div">
        <img src={user.profilePic} alt="profilePic" id="photo" />
        <input type="file" id="file" name="file" onChange={handleInputChange} />
        <label for="file" id="uploadBtn">
          Choose Photo
        </label>
      </div>
      <div className="title">
        <h1>Profile</h1>
        <h2>about me</h2>
      </div>
      <hr className="divisor" />
      <div className="user-info">
        <div className="container-user-info">
          <h3>Update your information</h3>
          <span>
            Complete all the fields and submit your information pressing save
          </span>
          <form onSubmit={submitUpdateProfile}>
            <div className="data">
              <label htmlFor="#" className="inputs-profile">
                NAME
              </label>
              <input
                className="ipro"
                type="text"
                value={user.name}
                name="name"
                onChange={handleInputChange}
              />
            </div>
            <div className="data">
              <label htmlFor="#" className="inputs-profile">
                PHONE
              </label>
              <input
                className="ipro phonecountry"
                type="text"
                name="phone_Code"
                placeholder="54"
                value={user.phone_Code}
                onChange={handleInputChange}
              />
              <input
                className="ipro"
                type="text"
                value={user.phone_Number}
                name="phone_Number"
                onChange={handleInputChange}
              />
            </div>
            <div className="data">
              <label htmlFor="#" className="inputs-profile">
                EMAIL
              </label>
              <input
                disabled
                className="ipro"
                type="text"
                value={user.email}
                name="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="data">
              <label htmlFor="#" className="inputs-profile">
                LOCATION
              </label>
              <input
                className="ipro"
                type="text"
                value={user.location_id}
                name="location"
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className={active ? "btn-active" : "btn-inactive"}
            >
              Save
            </button>
          </form>
        </div>
        <div className="activate2fa">
          <h3>Activate 2FA</h3>
          <span>
            To activate two factor authentication please complete your phone
            number
          </span>

          <label className="switch">
            <input
              type="checkbox"
              id="check2fa"
              onClick={(e) => activate2FA(e)}
              checked={currentUser.authy}
            />
            <span className="sli round"></span>
          </label>
        </div>
      </div>

      <div className="profile-footer"></div>
    </div>
  );
}
