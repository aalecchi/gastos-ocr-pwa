/**
 * Web App base para conexión con Google Sheets
 */
const CONFIG = {
  SHEET_ID: 'YOUR_SHEET_ID_HERE',
  TIMEZONE: 'America/Lima'
};

function doPost(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, message: 'Ejemplo de conexión, agrega lógica aquí.' })
  ).setMimeType(ContentService.MimeType.JSON);
}
