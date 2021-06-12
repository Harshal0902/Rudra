![](https://miro.medium.com/max/1600/1*fi2mC7_59HvQs3JW1WIBMg.jpeg)

- The docker app for desktop for windows or mac can be downloaded from the link given [link](https://docs.docker.com/docker-for-windows/install/).
- When you install docker if you&#39;re on windows 10 home you might be asked to install linux kernel. Go ahead and download it.
- We also need to have account at Docker Hub registry so that we can pull and push Docker images. It&#39;s free so if you already haven&#39;t one, checkout this [link ](https://hub.docker.com/)to create one for yourself.
- Last, we need Static website that we want to dockerize. So if you already have one that&#39;s great but if you don&#39;t you can get it from google..

# Now what is docker ?

In brief, Docker is an open source DevOps tool designed to help developers and operations to streamline application development and deployment.

By dockerizing an application, you can deploy and run an application using containers.

Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and deploy it as one package.

By doing so application can be deployed on any target environment/machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.

Thus removing the deployment issues that occur due to various environment spec mismatch.

To learn more about docker checkout this [link](https://www.docker.com/).

# **Getting started with the process.**

Open up your docker machine.You should see a grey icon to tell you that its perfectly working.

![](https://miro.medium.com/max/189/1*2dn1t2dCshRZ6PJeIRe_IA.png)

![](RackMultipart20210611-4-uxavy0_html_133244b6f93156fd.png)

the one in the bottom right yes thats the one.

Right click on it and click docker hub. Its necessary to have an account on docker hub to work with docker. If you dont have one you can create one.

moving on so when you&#39;re done with creating acc on docker hub.

The dialogue which comes to your screen will be like or exactly this.

![](RackMultipart20210611-4-uxavy0_html_e1e1dc6c627b29be.png)

![](https://miro.medium.com/max/875/1*ovIcgDyxum5uT8-w8ZJ_pg.png)

skip the tutorial.

Now when you&#39;re in.

# 1. Create A Static Website

We assume you already have a static site on your system. For this tutorial, I have downloaded a static website from [here](https://onepagelove.com/download/slick/). After making some changes, placed all files in a directory on Docker server.

![](RackMultipart20210611-4-uxavy0_html_766e382c95713214.png)

![](https://miro.medium.com/max/651/0*CWRItyLUPYRZaA69.png)

# 2. Create Dockerfile

Next, create a [Dockerfile](https://tecadmin.net/tutorial/docker/docker-dockerfile/)(D should be capital) in the same directory. Edit your Dockerfile in your favorite text editor:

**To Use Nginx Web server**

FROM nginx
 COPY . /usr/share/nginx/html

**To Use Apache Web server**

FROM apache
 COPY . /var/www/html

between two, my recommendation is NGINX.

# 3. Build Docker Image

Now, You have a Dockerfile for your static site. You can now create a docker image with these files. To create a Docker image run:

docker build -t img-static-site-example .

![](RackMultipart20210611-4-uxavy0_html_2ae3eca7355dd89d.png)

![](https://miro.medium.com/max/856/0*zFWVdxjg0rfkzkB_.png)

The above command will create a Docker image with name img-static-site-example. Use &quot;docker images&quot; command to list available images on local system.

# 4. Run Docker Container

Now, you have a docker image now. Use this docker image to launch a new container on your system. To run your Docker container using the newly created image, type:

docker run -it -d -p 80:80 img-static-site-example

In case the port 80 is occupied by the host machine or any other docker container. You can change the host machine port to something else.

docker run -it -d -p 8080:80 img-php-apache-example

The &quot;-d&quot; option detach the container from current shell and run in background. This will print container ID on screen.

Use &quot;docker ps&quot; command to view the running container. In case you didn&#39;t find any container, use &quot;docker ps -a&quot; to view all containers (in any state) on your machine.

# 5. Access Your Application

Once the container is up and running. All the on port 8080 of host machine will be redirected to container&#39;s port 80.

Access you docker host using IP address (or hostname/domain name) on port 8080 to view application.

# 6. Add Docker Compose (Optional)

Before start using docker compose, You must have docker-compose binary on your system. Use [this tutorial](https://tecadmin.net/tutorial/docker/docker-compose/) to get docker-compose on your system.

This will help you to easily rebuild docker images and re-create containers without stopping and creating them manually..

Let&#39;s create a file in current directory with name docker-compose.yml.

nano docker-compose.yml

Add the following content.

version: &#39;3&#39;
 services:
 web:
 image: img-static-site-example
 build: .
 container\_name: my-static-site
 restart: always
 ports:
 - &quot;8080:80&quot;

Now, build your docker image. This will create a docker image with the help of Dockerfile available in current directory.

docker-compose build

![]()

![](https://miro.medium.com/max/859/0*94Li_UqMrAss6u_5.png)

Then run your docker container using the following command.

docker-compose up -d

![](RackMultipart20210611-4-uxavy0_html_514fd45292279617.png)

![](https://miro.medium.com/max/858/0*ZXcM7e5jvE6-f7tc.png)

Once you have the docker container up and running. You can rebuild image and recreate your container any time by running these two commands.

For example, you have make a change your site. Just run these two commands on terminal.

docker-compose build
 docker-compose up -d

This will rebuild the docker image and recreate the docker container.