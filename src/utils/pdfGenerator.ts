import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';

interface Phase {
  title: string;
  weeks: string;
  objective: string;
  topics: {
    week: string;
    content: string[];
    projects: string;
    resources: string[];
  }[];
  outcome: string;
  deliverable: string;
}

export const generatePDF = (phases: Phase[], title: string) => {
  const doc = new jsPDF();
  let yPos = 20;
  const pageHeight = doc.internal.pageSize.height;
  const margin = 20;
  const lineHeight = 7;

  // Helper function to add text with word wrap
  const addWrappedText = (text: string, x: number, y: number, maxWidth: number) => {
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return lines.length * lineHeight;
  };

  // Add title
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  const titleHeight = addWrappedText(title, margin, yPos, doc.internal.pageSize.width - 2 * margin);
  yPos += titleHeight + 10;

  // Add phases
  phases.forEach((phase, index) => {
    // Check if we need a new page
    if (yPos > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
    }

    // Phase title
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text(`Phase ${index + 1}: ${phase.title}`, margin, yPos);
    yPos += lineHeight + 5;

    // Weeks
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Weeks: ${phase.weeks}`, margin, yPos);
    yPos += lineHeight;

    // Objective
    doc.setFont('helvetica', 'bold');
    doc.text('Objective:', margin, yPos);
    yPos += lineHeight;
    doc.setFont('helvetica', 'normal');
    yPos += addWrappedText(phase.objective, margin, yPos, doc.internal.pageSize.width - 2 * margin);
    yPos += 5;

    // Topics
    phase.topics.forEach(topic => {
      if (yPos > pageHeight - margin) {
        doc.addPage();
        yPos = margin;
      }

      doc.setFont('helvetica', 'bold');
      doc.text(`Week ${topic.week}:`, margin, yPos);
      yPos += lineHeight;

      doc.setFont('helvetica', 'normal');
      topic.content.forEach(content => {
        yPos += addWrappedText(`• ${content}`, margin + 5, yPos, doc.internal.pageSize.width - 2 * margin - 5);
      });

      doc.setFont('helvetica', 'bold');
      doc.text('Project:', margin, yPos);
      yPos += lineHeight;
      doc.setFont('helvetica', 'normal');
      yPos += addWrappedText(topic.projects, margin + 5, yPos, doc.internal.pageSize.width - 2 * margin - 5);

      doc.setFont('helvetica', 'bold');
      doc.text('Resources:', margin, yPos);
      yPos += lineHeight;
      doc.setFont('helvetica', 'normal');
      topic.resources.forEach(resource => {
        yPos += addWrappedText(`• ${resource}`, margin + 5, yPos, doc.internal.pageSize.width - 2 * margin - 5);
      });
      yPos += 5;
    });

    // Outcome and Deliverable
    if (yPos > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
    }

    doc.setFont('helvetica', 'bold');
    doc.text('Outcome:', margin, yPos);
    yPos += lineHeight;
    doc.setFont('helvetica', 'normal');
    yPos += addWrappedText(phase.outcome, margin + 5, yPos, doc.internal.pageSize.width - 2 * margin - 5);
    yPos += 5;

    doc.setFont('helvetica', 'bold');
    doc.text('Deliverable:', margin, yPos);
    yPos += lineHeight;
    doc.setFont('helvetica', 'normal');
    yPos += addWrappedText(phase.deliverable, margin + 5, yPos, doc.internal.pageSize.width - 2 * margin - 5);
    yPos += 10;
  });

  // Save the PDF
  const blob = doc.output('blob');
  saveAs(blob, `${title.toLowerCase().replace(/\s+/g, '-')}.pdf`);
};