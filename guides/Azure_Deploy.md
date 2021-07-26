1. login into your Azure account 

    ---USE AZURE CLOUD SHELL---
2. open cloud shell direct link (https://shell.azure.com/)

3. To run the code in Azure Cloud Shell:

    1. Start Cloud Shell.

    2. Select the Copy button on a code block to copy the code.

    3. Paste the code into the Cloud Shell session by selecting Ctrl+Shift+V on Windows and Linux or by selecting Cmd+Shift+V on macOS.

    4. Select Enter to run the code.

     ---DOWNLOAD THE SAMPLE---
     
4.  (FOR BASH)

      mkdir quickstart

   cd $HOME/quickstart    
5. Next, run the following command to clone the sample app repository to your quickstart directory.
     
     git clone https://github.com/Azure-Samples/html-docs-hello-world.git

   ---CREATE THE WEB APP---

6. cd html-docs-hello-world

   az webapp up --location westeurope --name <app_name> --html
   
   
   ==OUTPUT OF ABOVE COMMAND
   {
  "app_url": "https://&lt;app_name&gt;.azurewebsites.net",
  "location": "westeurope",
  "name": "&lt;app_name&gt;",
  "os": "Windows",
  "resourcegroup": "appsvc_rg_Windows_westeurope",
  "serverfarm": "appsvc_asp_Windows_westeurope",
  "sku": "FREE",
  "src_path": "/home/&lt;username&gt;/quickstart/html-docs-hello-world ",
  &lt; JSON data removed for brevity. &gt;
}

7. Browse to the app

In a browser, go to the app URL: http://<app_name>.azurewebsites.net.