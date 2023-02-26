**Title : Automation Home Assignment**

**Overview**:
    The project is about web-scrapping of https://www.billboard.com/charts/artist-100/ getting the top 100 ranked artist per week and 3 preceding week. Then taking top 5 artist of the week and arranging then adding them together with alphabetical order and without repetition.


 **Dependencies**
 1. BeautifulSoup
 2. Requests
 3. CSV
 4. Pandas
 5. Numpy
 6. Google sheets
 7. Schedule tasks 
 
 **Process Flow**
 
 Steps to run the automation program,
 first we have to run "automation_rohan.py" to get the "out.csv" which contain the name of top artist for four weeks. 
 Second we need to upload the "out.csv" file to google drive.
 Third we need to open "out.csv" in google sheets.
 Four we need to run the code in google script the file to which is in "automation_script.GS" and also in code file as comments. 
 after running the script we will get google forms for each of the top artist and can rank them from 1 to 5 on popualrity scale.     
 
 *automation_rohan.py*
 1. Importing all library and functions such as BeautifulSoup, Pandas, Numpy,Requests.
 
 2. Opening a csv file in write mode  with column names week , artists, rank.
 
 3. Getting the urls for the website to scrape. And putting them in for loop to parse it.
 
 4. We get the response from the website by using Requests library. 
 
 5. We use BeautifulSoup and lxml parser to parse the received HTML code in response.
 
 6. We get Artist and their rank by using soup.find and findall method.
 
 7. We write the rows with week, artist and ranks in rank_artist.csv file.
 
 8. We use pandas to read csv file and get top 5 artist per week by using indexing.
 
 9. We concatenate 4 data frames into one by using pd.concate function with inner join. And display the concanated data frame.
 
 10. Extracted the only artist from the dataframe and remove duplicates by using unique function. And we get a numpy array. Sorted the numpy array into alphabetical order.
 
 11. We make a pandas datframe of recieved numpy array and named colunm as Artists.
 
 12. We write the dataframe to out.csv file for further use.
 
 *Google sheet*
 
 1. Upload the out.csv file to google sheet.
 
 *Google script* Automation_script.GS
 
(file link: https://script.google.com/d/1rApe-DtolBsILNihirOaQ30fwNrw0qCHSwlQoS9AUymvJVMPHb6YeMjL/edit?usp=sharing)

 1.  Create form_gen function for running google spreadsheet in url to get the artist names.
 
 2. We get the values or name of the artist by using get ranges and get value functions.
 
 3. We create google form by using FormApp.create and named it user_rating .We make it multiple choice rating from 1 to 5 for artist which will be feb by users who will subit their reviews.
 
 4. Used for loop to create the artist names and rating individual.
 
 5. Added emailing functionality by using MailApp.sendEmail function and sending link of the form with it. 
 
 6. Set a time driven trigger whcich will run it monthly on 30th of every month on 12pm to 1pm.
 
 *Scheduling the scrapping*
 
 1. First we create a bathch file and provided our file path in the file.
    python3 C:\Users\rohan\Desktop\Automation_Assignment_Rohan_Meshram\automation_rohan.py
 
 2. We use Schedule tasks a windows tools for scheduling the task.
 
 3. We create a task name "scrape a website".
 
 4. We choose the trigger as monthly and on first day of the month.
 
 5. Action as start a program. and added task.bat file to the schedule task software.
 
 6. And finished with scheduling the task it will run on 7:07 pm on 1st of every month.
 
 7. The screen shot of the scheduling task is also added to the zip file. 
 
 
    
   
   
  
 

