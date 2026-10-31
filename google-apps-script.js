// Skullberry Tattoo Studio - saves contact form entries into this Google Sheet.
// Paste into Extensions > Apps Script in your Google Sheet, then Deploy as a Web app.

const SHEET_NAME = 'Inquiries';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const spreadsheet = SpreadsheetApp.openById('1O_4otUehBQw8DR1P652cd1fTRBE-R0OA0LBLn4K3YPw');
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // First time: create the sheet with headers
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow(['Date', 'Full Name', 'Email', 'Contact Number', 'Subject', 'Message']);
      sheet.getRange('D:D').setNumberFormat('@');   // keep phone numbers starting with 0
      sheet.setFrozenRows(1);
    }

    const p = e.parameter;
    sheet.appendRow([
      new Date(),
      p.name || '',
      p.email || '',
      p.phone || '',
      p.subject || '',
      p.message || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}