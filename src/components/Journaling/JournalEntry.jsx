import {React,useState} from 'react'

const JournalEntry = () => {
    const [entry, setEntry] = useState({ title: '', content: '' });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEntry({ ...entry, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add logic to save the journal entry
      console.log('Saving journal entry:', entry);
      // You can send the data to your server, update state, etc.
    };
  
    return (
      <div className="journal-entry-form">
        <h2>Create a New Journal Entry</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={entry.title} onChange={handleInputChange} />
  
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content" value={entry.content} onChange={handleInputChange}></textarea>
  
          <button type="submit">Save Entry</button>
        </form>
      </div>
    );
}

export default JournalEntry