import "./App.css";
import Page from "./components/Page";
import { useState } from "react";

function App() {
  const ref = {
    imageURL: "https://i5x64bit.github.io/portfolio/assets/images/profile.png",
    info: {
      fullName: "John Doe",
      birth: "1/2/1991",
      occupation: "Single+0",
    },
    experience: [
      {
        title: "Software Developer",
        company: "Elbit Electronics",
        from: "1.2.2021",
        to: "present",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, veritatis modi molestiae, labore illo quo officiis natus error, adipisci est atque dolore eum cumque facilis deserunt expedita voluptatem quidem iste.Molestiae autem illum reprehenderit quibusdam culpa ratione dolores quam rem nisi sed sunt vitae quae, labore ut aliquam consectetur doloremque? Sit delectus natus neque magnam ipsum porro provident expedita et!",
      },
      {
        title: "Salesmen",
        company: "Computer Shop",
        from: "2019",
        to: "12.2020",
      },
    ],
    education: [
      {
        title: "CS degree",
        school: "Ben Gurion University",
        from: "3.2021",
        to: "3.2024",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, veritatis modi molestiae, labore illo quo officiis natus error, adipisci est atque dolore eum cumque facilis deserunt expedita voluptatem quidem iste.Molestiae autem illum reprehenderit quibusdam culpa ratione dolores quam rem nisi sed sunt vitae quae, labore ut aliquam consectetur doloremque? Sit delectus natus neque magnam ipsum porro provident expedita et!",
      },
      {
        title: "Software Engineering",
        school: "Rager Highschool",
        from: "2015",
        to: "2019",
      },
    ],
    skills: ["Soft skills", "Networking", "Work under pressure"],
  };
  const [person, setPerson] = useState(ref);

  return (
    <>
      <Page person={person} isPreview={true} setPerson={setPerson} />
      <Page person={person} isPreview={false} setPerson={setPerson} />
    </>
  );
}

export default App;
