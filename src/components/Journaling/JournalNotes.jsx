import React, { useEffect, useState } from "react";
import JournalEntry from "./JournalEntry";

const JournalNotes = ({ notes }) => {
  const [journalNotes, setJournalNotes] = useState([]);
  const [shouldAddNote, setAddNote] = useState(false);
  const [hoveredNote, setHoveredNote] = useState(null);

  useEffect(() => {
    setJournalNotes(notes);
  }, []);

  const handelCancel = () => {
    setAddNote(false);
  };
  const handelAdd = () => {
    setAddNote(true);
  };
  const handelNoteHover = (id) => {
    setHoveredNote(id);
  };
  const handelNoteMouseOut = () => {
    setHoveredNote(null);
  };

  return (
    <div className="journal-notes">
      <div className="buttons">
        <button onClick={handelAdd} type="add" className="add">
          +
        </button>
        {shouldAddNote && (
          <button onClick={handelCancel} type="cancel" className="cancel">
            x
          </button>
        )}
      </div>
      {shouldAddNote && <JournalEntry />}
      <div className="row">
        {journalNotes.map((Note) => (
          <div
            key={Note.id}
            className="notes col-4"
            onMouseOver={() => handelNoteHover(Note.id)}
            onMouseLeave={handelNoteMouseOut}
            role="button"
          >
            <div className="header-notes">
              <h4>{Note.title}</h4>
              <div
                className={`editbuttons ${
                  hoveredNote == Note.id ? "hover" : ""
                }`}
              >
                <button>
                  <i className="bi bi-pencil-fill">x</i>
                </button>
                <button>
                  <i className="bi bi-trash"></i>x
                </button>
              </div>
            </div>
            <p>{Note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalNotes;
