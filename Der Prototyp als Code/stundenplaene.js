export function getSubjectsForSemester(semester) {

    if (semester === 'MI1') {
      return [
        
        { time: '11:30 - 13:00', days: [''], courses: [''] },
        { time: '11:30 - 13:00', days: [''], courses: [''] },
        
  //montag      
  
        { time: '08:00 - 09:30', days: ['monday'], courses: ['MI_MI1'] },
        { time: '09:45 - 11:15', days: ['monday'], courses: ['MI_MI1-L A'] },
       
        { time: '11:30 - 13:00', days: ['monday'], courses: ['MI_MI1-L B'] },
        { time: '11:30 - 13:00', days: ['monday'], courses: ['MI_MI1-L C'] },
  
        { time: '13:30 - 15:00', days: ['monday'], courses: ['MI_MATHE1_Tutorium'] },
  
  //dienstag
  
        { time: '08:00 - 09:30', days: ['tuesday'], courses: [ 'MI_MATHE1-L A'] },
        { time: '09:45 - 11:15', days: ['tuesday'], courses: [ 'MI_MATHE1'] },
  
        { time: '11:30 - 13:00', days: ['tuesday'], courses: [ 'MI_MATHE1-L B'] },
        { time: '13:30 - 15:00', days: ['tuesday'], courses: [ 'MI_MATHE1-L C'] },
  
  //mittwoch
        { time: '09:45 - 11:15', days: ['wednesday'], courses: [ 'MI_INF1'] },
  
        { time: '11:30 - 13:00', days: ['wednesday'], courses: [ 'MI_INF1-L A'] },
        { time: '11:30 - 13:00', days: ['wednesday'], courses: [ 'MI_INF1-L C'] },
        
        { time: '13:30 - 15:00', days: ['wednesday'], courses: [ 'MI_INF1-L B'] },
        { time: '13:30 - 15:00', days: ['wednesday'], courses: [ 'MI_PROG1-L C'] },
  
  //donnerstag
  
        { time: '09:45 - 11:15', days: ['thursday'], courses: [ 'MI_PROG1'] },
  
        { time: '11:30 - 13:00', days: ['thursday'], courses: [ 'MI_INF1-L A'] },
        { time: '11:30 - 13:00', days: ['thursday'], courses: [ 'MI_PROG1-L A'] },
        { time: '11:30 - 13:00', days: ['thursday'], courses: [ 'MI_PROG1-L B'] },
        { time: '11:30 - 13:00', days: ['thursday'], courses: [ 'MI_PROG1-L C'] },
  
        { time: '13:30 - 15:00', days: ['thursday'], courses: [ 'MI_PROG1-L A'] },
        { time: '13:30 - 15:00', days: ['thursday'], courses: [ 'MI_PROG1-L B'] },
        { time: '13:30 - 15:00', days: ['thursday'], courses: [ 'MI_PROG1-L C'] },
  
  //freitag
        
        { time: '09:45 - 11:15', days: ['friday'], courses: [ 'MI_GEST1'] },
        
        { time: '11:30 - 13:00', days: ['friday'], courses: ['MI_GEST1-L A'] },
        { time: '11:30 - 13:00', days: ['friday'], courses: ['MI_GEST1-L B'] },
        { time: '11:30 - 13:00', days: ['friday'], courses: ['MI_GEST1-L C'] },
        { time: '11:30 - 13:00', days: ['friday'], courses: ['MI_GEST1-L D'] },
  
        { time: '13:30 - 15:00', days: ['friday'], courses: ['MI_GEST1-mÜ'] },
      ];
  
  
    } else if (semester === 'MI3') {
      return [
        { time: '15:15 - 16:45', days: [''], courses: [''] },
        { time: '17:00 - 18:30', days: [''], courses: [''] },
  
  
  //montag
    
        { time: '08:00 - 09:30', days: [ 'monday'], courses: ['MI_ISI (nur bei bedarf)'] },
  
        { time: '09:45 - 11:15', days: ['monday'], courses: ['MI_ISI'] },
        
        { time: '11:30 - 13:00', days: ['monday'], courses: ['MI_ISI-L X'] },
        { time: '11:30 - 13:00', days: ['monday'], courses: ['MI_ISI-L Y'] },
  
        { time: '13:30 - 15:00', days: ['monday'], courses: ['MI_ISI-L X'] },
        { time: '13:30 - 15:00', days: ['monday'], courses: ['MI_ISI-L Y'] },
        { time: '13:30 - 15:00', days: ['monday'], courses: ['MI_ISI_TUTORIUM'] },
  
        { time: '15:15 - 16:45', days: ['monday'], courses: ['MI_ISI-L Y'] },
  
  //dienstag
  
     { time: '08:00 - 09:30', days: ['tuesday'], courses: ['MI_MFORM'] },
  
     { time: '09:45 - 11:15', days: ['tuesday'], courses: ['MI_MFORM-L Z'] },
  
     { time: '11:30 - 13:00', days: ['tuesday'], courses: ['MI_MFORM-L Y'] },
     { time: '11:30 - 13:00', days: ['tuesday'], courses: ['MI_MFORM-L Z'] },
  
     { time: '13:30 - 15:00', days: ['tuesday'], courses: ['MI_MFORM-L X'] },
     { time: '13:30 - 15:00', days: ['tuesday'], courses: ['MI_MFORM-L Z'] },
  
     { time: '15:15 - 16:45', days: ['tuesday'], courses: ['MI_MFORM-L Z'] },
  
  //mitwoch
  
        { time: '09:45 - 11:15', days: ['wednesday'], courses: ['MI_SWT'] },
  
        { time: '11:30 - 13:00', days: ['wednesday'], courses: ['MI_SWT-mÜ X'] },
        { time: '11:30 - 13:00', days: ['wednesday'], courses: ['MI_SWT-mÜ Y'] },
  
        { time: '13:30 - 15:00', days: ['wednesday'], courses: ['MI_ENGL1 Z'] },
  
        { time: '15:15 - 16:45', days: ['wednesday'], courses: ['MI_ENGL1 Z'] },
        { time: '15:15 - 16:45', days: ['wednesday'], courses: ['MI_SWT-L X'] },
        { time: '15:15 - 16:45', days: ['wednesday'], courses: ['MI_SWT-L Y'] },
  
  //donnerstag
  
  
        { time: '11:30 - 13:00', days: ['thursday'], courses: ['MI_HCI-L Z'] },
        { time: '11:30 - 13:00', days: ['thursday'], courses: ['MI_HCI'] },
  
        { time: '13:30 - 15:00', days: ['thursday'], courses: ['MI_SWT-L Z'] },
        { time: '13:30 - 15:00', days: ['thursday'], courses: ['MI_HCI-L X'] },
        { time: '13:30 - 15:00', days: ['thursday'], courses: ['MI_SWT-L Z'] },
  
        { time: '15:15 - 16:45', days: ['thursday'], courses: ['MI_HCI-L Y'] },
  
        { time: '17:00 - 18:30', days: ['thursday'], courses: ['MI_HCI-L Z'] },
  
  //freitag
        { time: '09:45 - 11:15', days: ['friday'], courses: ['MI_PJ1 PAELKE'] },
        { time: '11:30 - 13:00', days: ['friday'], courses: ['MI_PJ2 KOPLIN'] },
        { time: '11:30 - 13:00', days: ['friday'], courses: ['MI_PJ3 SCHREIER'] },
  
  
        { time: '13:30 - 15:00', days: ['friday'], courses: ['MI_PJ1 PAELKE'] },
        { time: '13:30 - 15:00', days: ['friday'], courses: ['MI_PJ2 KOPLIN'] },
        { time: '13:30 - 15:00', days: ['friday'], courses: ['MI_PJ3 SCHREIER'] },
        
      ];
  
  
    } else  if (semester === 'MI5') {
      return [
      { time: '08:00 - 9:00', days: [ 'wednesday'], courses: ['Physik', 'Deutsch'] },
        { time: '09:00 - 10:00', days: ['thursday'], courses: ['Informatik', 'Sport'] },
      ];
    }
  
  
  
    else  if (semester === 'MI7') {
      return [
      { time: '8:00 - 9:00', days: [ 'wednesday'], courses: ['Physik', 'Deutsch'] },
        { time: '9:00 - 10:00', days: ['thursday'], courses: ['Informatik', 'Sport'] },
      ];
  
  }
   }


   

   document.addEventListener('DOMContentLoaded', (event) => {
      document.getElementById('downloadPdfButton').addEventListener('click', downloadPDF);
    });
    
  
    async function downloadPDF() {
      const element = document.getElementById('myTimetable');
    
      html2canvas(element, {
        scale: 5 
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF({
          orientation: 'landscape', 
          format: 'a3' 
        });
    
        const imgWidth = 430;  
        const pageHeight = 210;  
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;
    
        let position = 0;
    
        
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
    
          if (heightLeft > 0) {
            pdf.addPage();
          }
        }
    
        pdf.save('mein_stundenplan.pdf');
      });
    }
    