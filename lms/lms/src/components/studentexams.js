import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function StudentExamsu() {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get('http://localhost:8080/allexams'); // Adjust this URL to match your backend API
        setExams(response.data);
      } catch (error) {
        console.error('Error fetching exam data:', error);
      }
    };

    fetchExams();
  }, []);

  return (
    <div className="exam-timeline-container">
      <h1>Exam Timeline</h1>
      {exams.length > 0 ? (
        <ul className="exam-timeline-list">
          {exams.map((exam, index) => (
            <li key={index} className="exam-item">
              <div className="exam-date">{exam.examdate}</div>
              <div className="exam-details">
                <h2>{exam.examname}</h2>
                <p><strong>Course:</strong> {exam.examcoursecode}</p>
                <p><strong>Time:</strong> {exam.examtime}</p>
                <p><strong>Active status:</strong> {exam.isactive}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No upcoming exams available.</p>
      )}

      {/* Updated CSS Styles */}
      <style>{`
        .exam-timeline-container {
          padding: 40px;
          max-width: 900px;
          margin: auto;
          background-color: #f7f9fc;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .exam-timeline-container h1 {
          text-align: center;
          font-size: 2.5rem;
          color: #34495e;
          margin-bottom: 30px;
          font-family: 'Roboto', sans-serif;
          letter-spacing: 1.5px;
        }

        .exam-timeline-list {
          list-style: none;
          padding: 0;
        }

        .exam-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          margin-bottom: 20px;
          background-color: #ffffff;
          border-radius: 8px;
          border-left: 6px solid #3498db;
          transition: background-color 0.3s ease;
        }

        .exam-item:hover {
          background-color: #ecf3fc;
        }

        .exam-date {
          flex-basis: 25%;
          font-size: 1.2rem;
          color: #3498db;
          font-weight: bold;
          font-family: 'Roboto', sans-serif;
          text-align: center;
        }

        .exam-details {
          flex-basis: 70%;
          font-family: 'Roboto', sans-serif;
          text-align: left;
        }

        .exam-details h2 {
          margin: 0;
          font-size: 1.6rem;
          color: #2c3e50;
          font-weight: 600;
        }

        .exam-details p {
          margin: 8px 0;
          font-size: 1rem;
          color: #7f8c8d;
        }

        .exam-details strong {
          color: #2c3e50;
        }

        .exam-timeline-container p {
          text-align: center;
          color: #95a5a6;
          font-family: 'Roboto', sans-serif;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
}
