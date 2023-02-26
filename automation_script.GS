function form_gen() {
  let spred_sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1yqNYBEAt0a0dqnUdFBDbiiswZ0RHxTr2nBl2Ww_XnsY/edit#gid=324803724");
  let values = spred_sheet.getRange("A2:A13").getValues();

  let form = FormApp.create("user_rating");
  for (let row of values){
    let item = form.addMultipleChoiceItem();
    item.setTitle(row)
    item.setChoices([
      item.createChoice(1),
      item.createChoice(2),
      item.createChoice(3),
      item.createChoice(4),
      item.createChoice(5),
    ]);
  }
  MailApp.sendEmail("rohanmeshram1987@zohomail.in", "please fill this form", "here is the form : " + form.getPublishedUrl());
}