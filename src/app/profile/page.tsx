"use client"
import styles from "@/app/profile/profile.module.css";
import Navbar from "@/component/navbar/NavBar";
import backButton from "@/component/backButton";
import React, { useState } from "react";

import { calculateHoroscope } from "@/utils/horoscopeUtils";
import { calculateZodiac } from "@/utils/zodiacUtils";

function formatNameAndAge(name: string, birthday: string) {
  const birthDate = new Date(birthday);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  const formattedName = name.toLowerCase().replace(/\s+/g, "");
  if (age)
    return `@${formattedName}, ${age}`;
  else
    return `@${formattedName}`;
}


function formatBirthdayAndCalculateAge(birthday: string): string {
  const birthDate = new Date(birthday);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  // Format the birthday in DD / MM / YYYY format
  const formattedBirthday = `${birthDate.getDate().toString().padStart(2, "0")} / ${
    (birthDate.getMonth() + 1).toString().padStart(2, "0")} / ${
    birthDate.getFullYear()}`;

  return `${formattedBirthday} (Age ${age})`;
}

export default function Profile() {
  const [editAboutMode, setEditAboutMode] = useState(false);
  const [editInteresttMode, setEditInterestMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userName: "<user_name>",
    displayName: "",
    gender: "Gender",
    birthday: "",
    height: "",
    weight: "",
    interests: ["category 1", "category 2", "category 3"],
    horoscope: "",
    zodiac: "",
    profileBackground: "https://img.freepik.com/free-vector/business-background-with-black-geometric-lines_1361-4230.jpg",
  });

  const hasUserInfo = Boolean(userInfo.birthday || userInfo.horoscope || userInfo.zodiac || userInfo.height || userInfo.weight)

  const onBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    userInfo.horoscope = calculateHoroscope(event.target.value);
    userInfo.zodiac = calculateZodiac(parseInt(event.target.value));
    setUserInfo({...userInfo, birthday: event.target.value});
  };


  const hasInterests = userInfo.interests?.length > 0;
  const [interestInput, setInterestInput] = useState("");

  const handleInterestInputSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addInterest();
    }
  };

  const addInterest = () => {
    if (interestInput.trim() !== "" && !userInfo.interests.includes(interestInput.trim())) {
      setUserInfo({
        ...userInfo,
        interests: [...userInfo.interests, interestInput.trim()]
      });
    }
    setInterestInput("");
  };
  const removeInterest = (interestToRemove: string) => {
    setUserInfo({
      ...userInfo,
      interests: userInfo.interests.filter(interest => interest !== interestToRemove)
    });
  };

  return (
    <>
      <Navbar
        leftContent={backButton(<h2>Back</h2>)}
        centerContent={<h3 className={styles.userName}> @{userInfo.userName}</h3>}
      ></Navbar>
      <div className={styles.container}>
        {/* Profile picture Section*/}
        <section className={styles.section}>
          {/* TODO: Change this to Image in the future }*/}
          <img
            src={userInfo.profileBackground}
            alt="Profile background"
            className={styles.bannerImage}
          />
          <div className={styles.profileInfo}>
            <h1
              className={styles.profileName}>{formatNameAndAge(userInfo.displayName || userInfo.userName, userInfo.birthday)}</h1>
            <div className={styles.gender}>{userInfo.gender}</div>
            <div className={styles.tags}>
              <div className={styles.tags}>
                {userInfo.horoscope && (
                  <button className={styles.tagButton}>{userInfo.horoscope}</button>
                )}
                {userInfo.zodiac && (
                  <button className={styles.tagButton}>{userInfo.zodiac}</button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 'About' section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTitle}>About</p>
            <div onClick={() => {
              setEditAboutMode(!editAboutMode)
            }} className={styles.svgPlaceholder}>
              {editAboutMode ? (
                <p className={styles.saveButton}>Save & Update</p>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
                  <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                        strokeWidth="1.063"
                        d="M9.393 2.55 3.577 8.705c-.22.234-.432.695-.474 1.013l-.263 2.295c-.092.83.503 1.396 1.325 1.254l2.28-.39c.32-.056.766-.29.985-.53l5.816-6.156c1.006-1.063 1.459-2.274-.106-3.754-1.559-1.467-2.742-.95-3.747.113Z"/>
                  <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                        strokeWidth="1.063"
                        d="M8.422 3.577a4.34 4.34 0 0 0 3.86 3.648M2.125 15.583h12.75"/>
                </svg>
              )}
            </div>
          </div>
          <div className={styles.sectionContent}>
            {editAboutMode ? (
              <>
                <div className={styles.imageUploadContainer}>
                  <input type="file" id="image-upload" className={styles.imageUploadInput}/>
                  <label htmlFor="image-upload" className={styles.imageUploadLabel}>
                    <span className={`${styles.plusIcon} ${styles.plusIconBox}`}>+</span> Add image
                  </label>
                </div>

                <div className={styles.fieldContainer}>
                  <label>Display name</label>
                  <input value={userInfo.displayName}
                         placeholder="Enter name"
                         onChange={e => setUserInfo({...userInfo, displayName: e.target.value})}/>
                </div>
                <div className={styles.fieldContainer}>
                  <label>Gender</label>
                  <select value={userInfo.gender} onChange={e => setUserInfo({...userInfo, gender: e.target.value})}>
                    <option value="" disabled selected style={{display: userInfo.gender ? "none" : "block"}}>Select
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>

                </div>
                <div className={styles.fieldContainer}>
                  <label>Birthday</label>
                  <input type="date" value={userInfo.birthday} onChange={onBirthdayChange}/>
                </div>
                <div className={styles.fieldContainer}>
                  <label>Horoscope</label>
                  <input type="text" value={userInfo.horoscope || "--"} disabled={true}/>
                </div>
                <div className={styles.fieldContainer}>
                  <label>Zodiac</label>
                  <input type="text" value={userInfo.zodiac || "--"} disabled={true}/>
                </div>
                <div className={styles.fieldContainer}>
                  <label>Height</label>
                  <input type="number"
                         value={userInfo.height}
                         className={styles.noSpinners}
                         onChange={e => setUserInfo({...userInfo, height: e.target.value})}/>
                </div>
                <div className={styles.fieldContainer}>
                  <label>Weight </label>
                  <input type="number"
                         value={userInfo.weight}
                         className={styles.noSpinners}
                         onChange={e => setUserInfo({...userInfo, weight: e.target.value})}/>
                </div>
              </>
            ) : (
              <>
                {hasUserInfo ? (
                  <>
                    {userInfo.birthday && (
                      <div>
                        <span className={styles.fieldName}>Birthday: </span>
                        <span className={styles.fieldValue}>
            {formatBirthdayAndCalculateAge(userInfo.birthday)}
          </span>
                      </div>
                    )}
                    {userInfo.horoscope && (
                      <div>
                        <span className={styles.fieldName}>Horoscope: </span>
                        <span className={styles.fieldValue}>{userInfo.horoscope}</span>
                      </div>
                    )}
                    {userInfo.zodiac && (
                      <div>
                        <span className={styles.fieldName}>Zodiac: </span>
                        <span className={styles.fieldValue}>{userInfo.zodiac}</span>
                      </div>
                    )}
                    {userInfo.height && (
                      <div>
                        <span className={styles.fieldName}>Height: </span>
                        <span className={styles.fieldValue}>{userInfo.height} cm</span>
                      </div>
                    )}
                    {userInfo.weight && (
                      <div>
                        <span className={styles.fieldName}>Weight: </span>
                        <span className={styles.fieldValue}>{userInfo.weight} kg</span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className={styles.placeholderText}>
                    Add in your to help others know you better
                  </div>
                )}
              </>

            )}
          </div>
        </section>

        {/* 'Interest' section */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionTitle}>Interest</p>
            <div onClick={() => {
              setEditInterestMode(!editInteresttMode)
            }} className={styles.svgPlaceholder}>
              {editInteresttMode ? (
                <p className={styles.saveButton}>Save & Update</p>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 17 17">
                  <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                        strokeWidth="1.063"
                        d="M9.393 2.55 3.577 8.705c-.22.234-.432.695-.474 1.013l-.263 2.295c-.092.83.503 1.396 1.325 1.254l2.28-.39c.32-.056.766-.29.985-.53l5.816-6.156c1.006-1.063 1.459-2.274-.106-3.754-1.559-1.467-2.742-.95-3.747.113Z"/>
                  <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                        strokeWidth="1.063"
                        d="M8.422 3.577a4.34 4.34 0 0 0 3.86 3.648M2.125 15.583h12.75"/>
                </svg>
              )}
            </div>
          </div>

          <div className={styles.sectionContent}>
            {
              editInteresttMode ? (
                <>
                  <div className={styles.sectionContent} style={{ margin: '0' }}>
                    <p className={styles.interestText1}>Tell everyone about yourself</p>
                    <h2 className={styles.interestText2}>What interest you?</h2>
                    <div className={styles.addInterestField}>
                      {userInfo.interests.map((interest, index) => (
                        <div key={index} className={styles.interestTag}>
                          <span className={styles.interestText}>{interest}</span>
                          <button onClick={() => removeInterest(interest)} className={styles.removeInterestButton}>
                            X
                          </button>
                        </div>
                      ))}
                      {/* Input to add new interests */}
                      <input
                        type="text"
                        value={interestInput}
                        onChange={e => setInterestInput(e.target.value)}
                        onKeyDown={handleInterestInputSubmit}
                        placeholder="Type new interest and press Enter..."
                        className={styles.newInterestInput}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {hasInterests ? (
                    <div className={styles.interestButtons}>
                      {userInfo.interests.map((interest, index) => (
                        <div key={index} className={styles.interestButton}>
                          {interest}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className={styles.placeholderText}>
                      Add interests to help others know you better
                    </div>
                  )}
                </>
              )
            }
          </div>
        </section>
      </div>
    </>
  )
}