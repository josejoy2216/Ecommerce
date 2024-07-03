import React, { useState } from 'react';
import "./css/dashboard.css"

const Upload = () => {
  const [bookName, setBookName] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookDescription, setBookDescription] = useState('');
  const [bookImage, setBookImage] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookData = {
      bookName,
      bookAuthor,
      bookDescription,
      bookImage,
      category: bookCategory,
    };

    console.log("Submitting book data:", bookData);

    try {
      const response = await fetch("http://localhost:5000/upload-book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      })
      // .then((data) => {
      //       alert("Book uploaded Successfully")

      // })

      if (response.ok) {
        const result = await response.json();
        console.log("Book uploaded successfully:", result);
        // Clear the form
        setBookName('');
        setBookAuthor('');
        setBookDescription('');
        setBookImage('');
        setBookCategory('');
        alert("Book uploaded Successfully")
      } else {
        console.error("Failed to upload book");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Upload Book</h2>
      <div className="container mt-5 mb-5 color">
        <div className="card custom-glass-card shadow-sm">
          <div className="card-body ">
            <h5 className="card-title">Add a New Book</h5>
            <form onSubmit={handleSubmit}>
              <table className="table borderless ">
                <tbody>
                  <tr>
                    <td><label htmlFor="bookName">Book Name:</label></td>
                    <td>
                      <input
                        id="bookName"
                        type="text"
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                        className="form-control"
                        placeholder="Enter book name"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><label htmlFor="bookAuthor">Book Author:</label></td>
                    <td>
                      <input
                        id="bookAuthor"
                        type="text"
                        value={bookAuthor}
                        onChange={(e) => setBookAuthor(e.target.value)}
                        className="form-control"
                        placeholder="Enter book author"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><label htmlFor="bookDescription">Book Description:</label></td>
                    <td>
                      <textarea
                        id="bookDescription"
                        value={bookDescription}
                        onChange={(e) => setBookDescription(e.target.value)}
                        className="form-control"
                        placeholder="Enter book description"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><label htmlFor="bookCategory">Category:</label></td>
                    <td>
                      <select
                        id="bookCategory"
                        value={bookCategory}
                        onChange={(e) => setBookCategory(e.target.value)}
                        className="form-control"
                      >
                        <option value="">Select a category</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Science">Science</option>
                        <option value="History">History</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Mystery">Mystery</option>
                        <option value="Romance">Romance</option>
                        <option value="Thriller">Thriller</option>
                        {/* Add more categories as needed */}
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td><label htmlFor="bookImage">Book Image URL:</label></td>
                    <td>
                      <input
                        id="bookImage"
                        type="text"
                        value={bookImage}
                        onChange={(e) => setBookImage(e.target.value)}
                        className="form-control"
                        placeholder="Enter image URL"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              {bookImage && (
                <div className="text-center">
                  <img
                    src={bookImage}
                    alt="Book"
                    className="img-fluid mt-3"
                    style={{ maxHeight: '40vh', objectFit: 'contain' }}
                  />
                </div>
              )}
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
