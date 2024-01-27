import { React, useState } from "react";
import JournalEntry from "./JournalEntry";
import SidBar from "./SidBar";
import "./journaling.css";
import JournalNotes from "./JournalNotes";

const WorkSpace = () => {
  const [currentSection, setCurrentSection] = useState("entries");
  const [shouldAddNote, setAddNote] = useState(false);

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  const notes = [
    {
      id: 0,
      title: "Journal",
      content: `Après avoir réussi les classes préparatoires au Maroc et intégré la
        meilleure école du pays, j'ai choisi de continuer mon parcours académique
        à l'École Centrale de Nantes. `,
    },
    {
      id: 1,
      title: "Journal",
      content: `Après avoir réussi les classes préparatoires au Maroc et intégré la
        meilleure école du pays, j'ai choisi de continuer mon parcours académique
        à l'École Centrale de Nantes. `,
    },
  ]



  return (
    <div className="journal-container">
      <SidBar
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
      />
      <div className="journal-content">
        {currentSection === "entries" && <JournalNotes setAddNote={setAddNote} notes={notes}/>}
        {shouldAddNote && <JournalEntry />}
        {/* Add more components for notes and tasks as needed */}
      </div>
    </div>
  );
};

export default WorkSpace;
