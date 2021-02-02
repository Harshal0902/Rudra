<h1 align="center"><b>Guidelines for Contribution</b></h1> 
<h2 align="center"><b>How to make a Pull Request?</b></h2>


**1.**  Fork [this](https://github.com/Harshal0902/Rudra) repository.

**2.**  Clone your forked copy of the project.

```
git clone --depth 1 https://github.com/<your_user_name>/Rudra.git
```
<img src="https://user-images.githubusercontent.com/64153988/106641562-5aad8180-65ad-11eb-993b-9a4708645801.png" width="500">

**3.** Navigate to the project directory :file_folder: .

```
cd awesome-portfolio-websites
```

**4.** Add a reference to the original repository.

```
git remote add upstream https://github.com/Harshal0902/Rudra.git 
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream master
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perfom your desired changes to the code base.


**9.** Track your changes:heavy_check_mark: .

```
git add . 
```

**10.** Commit your changes .

```
git commit -m "Relevant message"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests`. Please ensure you compare your feature branch to the desired branch of the repo you are suppose to make a PR to.


**13.** Then add an appropriate title and description to your pull request that explains your changes and efforts done.


**14.** Click on `Create Pull Request` on devlopment branch.

<img src="https://user-images.githubusercontent.com/64153988/106642571-88df9100-65ae-11eb-86a0-de4b3284f14e.png" width=600>



