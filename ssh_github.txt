# Setting up SSH with ed25519 Access for GitHub on Mac OS (additionally Linux and Windows)

This guide will walk you through the steps to set up SSH with ed25519 access for GitHub on Mac OS.

## Prerequisites

Before you begin, you will need the following:

- A Mac OS computer
- A GitHub account

## Steps

1. Generate an SSH key pair in the folder ~./ssh:
    ```
    ssh-keygen -t ed25519 -C "your_email@example.com"
    ```

2. Add the SSH key to the ssh-agent:
    ```
    eval "$(ssh-agent -s)"
    ssh-add -K ~/.ssh/id_ed25519
    ```

3. Create a config file in ~/.ssh folder:
    ```
	touch ~/.ssh/config
	```
	
4. Use nano editor or any you like, to add configuration to the config file:
	Host *
	  AddKeysToAgent yes
	  UseKeychain yes
	  IdentityFile ~/.ssh/id_ed25519

5. Copy the SSH key to the clipboard:
    ```
    pbcopy < ~/.ssh/id_ed25519.pub
    ```
	GNU/Linux (requires the xclip package):
	```
	xclip -sel clip < ~/.ssh/id_rsa.pub
	```
	Windows Command Line:
	```
	type %userprofile%\.ssh\id_rsa.pub | clip
	```
	Git Bash on Windows / Windows PowerShell:
	```
	cat ~/.ssh/id_rsa.pub | clip
	```

6. Add the SSH key to your GitHub account:
    - Log in to your GitHub account
    - Go to Settings > SSH and GPG keys
    - Click New SSH key
    - Paste the SSH key into the Key field
    - Click Add SSH key
7. Test the SSH connection:
    ```
    ssh -T git@github.com
    ```

8. Setup remote URL:
    - Log in to your GitHub account
    - Go to your specific repository
    - Click the tab CODE > button CODE > tab LOCAL > copy SSH_URL
	would look like this git@github.com:YourGitHubUserName/Your_GitHub_RepoName.git

	Go to your local repository folder and run:
	```
	git remote set-url origin SSH_URL
	```
    Check the setting:
    ```
    git remote -v
    git remote get-url --all origin
    ```
9. Upload changes to GitHub:
	Change file README.md
	Stage the changes
	```
	git add README.md
	git commit -m "Add changes to README.md"
	git push -u origin main
	```
	
	You should not be asked for a username or password. If it works, your SSH key is correctly configured.
	
## Conclusion

You have successfully set up SSH with ed25519 access for GitHub on Mac OS.
