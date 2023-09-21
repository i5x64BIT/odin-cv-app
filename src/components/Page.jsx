/* eslint-disable react/prop-types */
import Section from "./Section";
import Info from "./Info";
import ProfilePicture from "./ProfilePicture";

export default function Page({ isPreview, person, setPerson }) {
  return (
    <>
      <div className="page edit-page">
        <section className="header">
          <Info isPreview={isPreview} person={person} setPerson={setPerson}/>
          <ProfilePicture isPreview={isPreview} person={person} setPerson={setPerson} />
        </section>
        <Section type="experience" isPreview={isPreview} person={person} />
        <Section type="education" isPreview={isPreview} person={person} />
        <Section type="skills" isPreview={isPreview} person={person} />
      </div>
    </>
  );
}
