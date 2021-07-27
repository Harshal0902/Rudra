**Deploying App to DigitalOcean** <br>

## What is Digital Ocean?
[DigitalOcean](https://www.digitalocean.com/) is a cloud infrastructure provider. <br>
It offers cloud services to developers that help them in the deploying and scaling applications that run on multiple servers at the same time without reducing their performance.<br>

DigitalOcean offers related services, such as computing, storage, databases, and networking, through a developer-friendly interface optimized for high productivity.<br>

## What is a Static App? <br>

A [static app](https://accella.net/knowledgebase/advice/whats-the-difference-between-a-dynamic-and-a-static-mobile-app/) is any web application that can be delivered directly to an end user's browser without any server-side alteration of the HTML, CSS, or JavaScript content.<br>

Before deploying an app to DigitalOcean, setting up the GitHub environment is the initial important step <br>
Thus, 
The prerequisites include:
1. Static web application files
2. Email address (or [GitHub](https://github.com/) account)
3. Payment method (Credit Card or PayPal) <br>

# Steps to Deploying A Static Application to DigitalOcean <br>

Creating a local repository on your machine for static website project is a key step before deployment to DigitalOcean.<br>
The static website app's files are copied to the GitHub repository created.<br>
On the desktop, open the static website's 'working folder' - the one storing all the folders and files.<br>
Copy the files on the 'working folder' and paste them to the repository folder.<br>
After pasting the files on the local repository folder, save the changes to the repository. On GitHub, saved changes are called commits.<br>
Click 'Commit to master' to save your changes to the “main” branch of your project.
After a successful commit, push the committed files to GitHub and 'Publish Repository'<br>

Use the link below to check the published files in your GitHub. <br>

https://github.com/github_account_name/repository_name <br>
The link should direct you to a GitHub account with repository’s files.<br>
## Step 1
### *Create Your DigitalOcean Account*

To create a DigitalOcean account, you need to visit DigitalOcean's sign up page and choose among the following options:<br>

<img src="./guides/DigitalOceanPNGs/signupscreen.png" alt="Create a DigitalOcean account"/><br>

***Option 1:*** Manually enter your email address and password <br>
***Option 2:*** Google sign-in <br>
***Option 3:*** GitHub sign-in <br>

***Tip***
If you choose ***Option 1:*** (email address and password option), verification of the email is required. <br>
Check your email for a verification link automatically from Digital Ocean.<br> 
Check spam in case you don't see the verification email in your inbox). <br>
Enter a payment method (Credit Card or PayPal) for identity verification (the payment method entered will not be charged). <br>

<br>
<img src="./guides/DigitalOceanPNGs/verifydigitalocean.png" alt="Payment Verification"/>
<br>

A pre-authorization charge to verify the credit card or PayPal account, which will be reversed within one week.<br>
After account verification, the App platform on Digital Ocean is now accessible.<br>

You will be billed on the first day of the following month for your current month’s usage, and your saved primary payment method will be automatically charged with your balance. 
In some cases, you might be charged if your usage exceeds a threshold. You can also log in and pay your current balance or make a pre-payment with PayPal at any time.<br>


## Step 2

### *Deploy Your Website with DigitalOcean App Platform*

In this step we’ll deploy our static website with App Platform. <br>

* Visit the DigitalOcean App Platform portal and click on the blue “Launch Your App” button. Check the image below.<br>
<img src="./guides/DigitalOceanPNGs/app-platform-home.png" alt="Launch App"/> <br>

* You will be prompted to select your GitHub repository.
Here, link to connect your DigitalOcean App Platform account to your GitHub account by clicking *Link Your GitHub Account* button:

* Sign into your GitHub account and select the account that you want to connect to App Platform. 
Once selected, you will be directed to a page where you can select which repositories to permit App Platform to access. <br>
<img src="./guides/DigitalOceanPNGs/link-new-app.png" alt="Link to GitHub"/><br>

The page will prompt you to sign into GitHub and select the repositories to allow the DigitalOcean App Platform access. Select the *Only Repository* button and the select the created repository that was initially pushed to GitHub.<br>

* Click the *Save* button <br>
The page will redirect to App Platform that will enable selecting the repository in the dropdown menu: <br>

* After selecting your repository, click “Next.” 
You will then be prompted to choose the name, branch, and options for Autodeploy. <br>
If you check the *Autodeploy* box, all the future changes made to the repository files will automatically push to your live site.<br>
Choose the selections and click *Next*: <br>

<img src="./guides/DigitalOceanPNGs/name-your-app.png" alt="Name of App"/><br>

* Static App Configuration.<br>
The page automatically detect your component type as a *Static Site* <br>
<img src="./guides/DigitalOceanPNGs/config-your-app.png" alt="App Config"/><br>

At the above step, there is no any necessary changes required. Click *Next* at the bottom of the page and the page will re-direct to a new window to allow the selection of a *Starter* use plan in case you prefer the deployment of the static website as among the first three sites allowed for free on DigitalOcean.<br>
<img src="./guides/DigitalOceanPNGs/finalize-and-launch.png" alt="Finalize and Launch"/><br>

After clicking the *Launch Your App* button, the DigitalOcean page will return a *Deployed Successfully* notification and the process will be complete. <br>

***Tip***<br>
There will be links under the name of the static app, which should help in verifying the functionality of the app, which will also redirect to the published static app website. The site should appear, and if it does not, check any errors and try again. <br>

 You can host up to [three free static sites](https://docs.digitalocean.com/products/app-platform/#free-and-professional-tiers). <br>
 For further information check the DigitalOcean [App Documentation Page](https://docs.digitalocean.com/products/app-platform/)<br>
 To delete the staticx app, please follow the steps in [Destroy an App](https://docs.digitalocean.com/products/app-platform/quickstart/#destroy-an-app).<br>


