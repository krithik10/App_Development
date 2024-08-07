import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import React, { useRef } from 'react';
import ibc from '../asserts/images/ibc.webp';

const InvitationPreview = ({ invitation }) => {
  const previewRef = useRef();

  const bcstyle = {
    backgroundImage: `url(${ibc})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '97%',
    paddingTop: '35px',
    paddingLeft: '65px',
  };
  const handleDownload = () => {
    html2canvas(previewRef.current, { useCORS: true, scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: [canvas.width, canvas.height],
        });
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('invitation.pdf');
      })
      .catch((error) => {
        console.error('Error generating PDF:', error);
      });
  };
  return (
    <div className="preview" style={bcstyle}>
      <h2 style={{marginRight:'70px'}}>Invitation Preview</h2>
      <div ref={previewRef} className="invitation-card">
        <p style={{ fontSize: '23px', position: 'relative', top: '10vh' }}>
          Join us for the celebration of 
          <span style={{ marginLeft: '15px', fontStyle: "italic", fontSize: '30px' }}>
            {invitation.name1}
          </span>
        </p>
        <h3 style={{ position: 'relative', left: '2%', top: '12.3vh', fontSize: '40px', fontWeight: '400', fontStyle: 'italic' }}>
          {invitation.name2}
        </h3>
        <p style={{ position: 'relative', left: '25%', top: '12.2vh', fontSize: '20px' }}>
          on {invitation.date}
        </p>
        <p style={{ position: 'relative', left: '17%', top: '13.4vh', fontSize: '25px' }}>
          at {invitation.address}, {invitation.city}<br></br>
        </p>
        <span style={{ position: 'relative', left: '-1%', top: '12.7vh', fontSize: '18px' }}>
          Your presence would make the occasion more special !
        </span>
      </div>
    </div>
  );
};

export default InvitationPreview;
