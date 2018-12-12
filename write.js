const {google} = require('googleapis');
var sheets = google.sheets('v4');

authorize(function(authClient) {
  var request = {
    // The ID of the spreadsheet to update.
    spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder value.

    // The A1 notation of the values to update.
    range: 'my-range',  // TODO: Update placeholder value.

    // How the input data should be interpreted.
    valueInputOption: '',  // TODO: Update placeholder value.

    resource: {
      // TODO: Add desired properties to the request body. All existing properties
      // will be replaced.
    },

    auth: authClient,
  };

  sheets.spreadsheets.values.update(request, function(err, response) {
    if (err) {
      console.error(err);
      return;
    }

    // TODO: Change code below to process the `response` object:
    console.log(JSON.stringify(response, null, 2));
  });
});

function authorize(callback) {
  // TODO: Change placeholder below to generate authentication credentials. See
  // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
  //
  // Authorize using one of the following scopes:
  //   'https://www.googleapis.com/auth/drive'
  //   'https://www.googleapis.com/auth/drive.file'
  //   'https://www.googleapis.com/auth/spreadsheets'
  var authClient = null;

  if (authClient == null) {
    console.log('authentication failed');
    return;
  }
  callback(authClient);
}
