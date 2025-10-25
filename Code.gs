/**
 * Web App base para conexión con Google Sheets
 */
const CONFIG = {
  SHEET_ID: '1FGEse88fTTDamcRpvNjY7C_ol9xwqL7Q_EH7M-ShkkQ',
  TIMEZONE: 'America/Lima'
};

function doPost(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, message: 'Ejemplo de conexión, agrega lógica aquí.' })
  ).setMimeType(ContentService.MimeType.JSON);
}
