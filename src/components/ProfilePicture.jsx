/* eslint-disable react/prop-types */
export default function ProfilePicture({ person }) {
  return (
    <>
      <img
        className="profile-picture"
        src={
          !person || !person.imageURL
            ? "./src/assets/profile.svg"
            : person.imageURL
        }
      />
    </>
  );
}
